import { Command as CommanderCommand } from 'commander';
import { Command } from '../core/Command';
import chalk from 'chalk';
import { InputValidator } from '../validators/InputValidator';

export class UppercaseCommand extends Command {
    private validator: InputValidator;

    constructor(command: CommanderCommand) {
        super(command);
        this.validator = new InputValidator();
    }

    public register(): void {
        this.command
            .command('uppercase <text>')
            .description('Convert any text to uppercase')
            .action((text: string) => {
                try {
                    const validatedText = this.validator.validateString(text);
                    console.log(chalk.green(validatedText.toUpperCase()));
                } catch (error: any) {
                    console.error(chalk.red(`Error: ${error.message}`));
                }
            });
    }
}
