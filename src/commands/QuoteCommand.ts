import { Command as CommanderCommand } from 'commander';
import { Command } from '../core/Command';
import chalk from 'chalk';
import { ApiService } from '../services/ApiService';

export class QuoteCommand extends Command {
    private apiService: ApiService;

    constructor(command: CommanderCommand) {
        super(command);
        this.apiService = new ApiService();
    }

    public register(): void {
        this.command
            .command('quote')
            .description('Get a random inspirational quote')
            .action(async () => {
                try {
                    console.log(chalk.cyan('Fetching a generic random quote...'));
                    const data = await this.apiService.getRandomQuote();
                    console.log(chalk.yellow(`"${data.quote}"`));
                    console.log(chalk.magenta(`- ${data.author}`));
                } catch (error: any) {
                    console.error(chalk.red(`Error fetching quote: ${error.message}`));
                }
            });
    }
}
