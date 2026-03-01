import { Command as CommanderCommand } from 'commander';
import { Command } from '../core/Command';
import chalk from 'chalk';
import { ApiService } from '../services/ApiService';
import { InputValidator } from '../validators/InputValidator';

export class TimeCommand extends Command {
    private apiService: ApiService;
    private validator: InputValidator;

    constructor(command: CommanderCommand) {
        super(command);
        this.apiService = new ApiService();
        this.validator = new InputValidator();
    }

    public register(): void {
        this.command
            .command('time <timezone>')
            .description('Get the current time in a timezone (e.g. Asia/Kolkata)')
            .action(async (timezone: string) => {
                try {
                    const validatedTz = this.validator.validateTimezone(timezone);
                    console.log(chalk.cyan(`Fetching time for: ${validatedTz}...`));
                    const data = await this.apiService.getTimezoneTime(validatedTz);
                    console.log(chalk.green(`Timezone: ${data.timezone}`));
                    console.log(chalk.green(`Date & Time: ${data.datetime}`));
                } catch (error: any) {
                    console.error(chalk.red(`Error fetching time: ${error.message}`));
                }
            });
    }
}
