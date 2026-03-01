import { Command as CommanderCommand } from 'commander';
import { Command } from '../core/Command';
import chalk from 'chalk';
import { ApiService } from '../services/ApiService';
import { InputValidator } from '../validators/InputValidator';

export class GithubCommand extends Command {
    private apiService: ApiService;
    private validator: InputValidator;

    constructor(command: CommanderCommand) {
        super(command);
        this.apiService = new ApiService();
        this.validator = new InputValidator();
    }

    public register(): void {
        this.command
            .command('github <username>')
            .description('Fetch information about a GitHub user')
            .action(async (username: string) => {
                try {
                    const validatedUsername = this.validator.validateString(username);
                    console.log(chalk.cyan(`Fetching data for GitHub user: ${validatedUsername}...`));
                    const data = await this.apiService.getGithubUser(validatedUsername);
                    console.log(chalk.green(`Name: ${data.name || 'N/A'}`));
                    console.log(chalk.green(`Bio: ${data.bio || 'N/A'}`));
                    console.log(chalk.green(`Public Repos: ${data.public_repos}`));
                    console.log(chalk.green(`Followers: ${data.followers}`));
                } catch (error: any) {
                    console.error(chalk.red(`Error fetching GitHub user: ${error.message}`));
                }
            });
    }
}
