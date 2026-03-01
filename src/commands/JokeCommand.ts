import { Command as CommanderCommand } from 'commander';
import { Command } from '../core/Command';
import chalk from 'chalk';
import { ApiService } from '../services/ApiService';

export class JokeCommand extends Command {
    private apiService: ApiService;

    constructor(command: CommanderCommand) {
        super(command);
        this.apiService = new ApiService();
    }

    public register(): void {
        this.command
            .command('joke')
            .description('Get a random joke')
            .action(async () => {
                try {
                    console.log(chalk.cyan('Fetching a random joke...'));
                    const data = await this.apiService.getRandomJoke();
                    console.log(chalk.yellow(data.setup));
                    console.log(chalk.green(data.punchline));
                } catch (error: any) {
                    console.error(chalk.red(`Error fetching joke: ${error.message}`));
                }
            });
    }
}
