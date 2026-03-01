import { Command as CommanderCommand } from 'commander';
import { Command } from '../core/Command';
import chalk from 'chalk';
import { InputValidator } from '../validators/InputValidator';

export class GreetCommand extends Command {
    private validator: InputValidator;

    constructor(command: CommanderCommand) {
        super(command);
        this.validator = new InputValidator();
    }

    public register(): void {
        this.command
            .command('greet <name>')
            .description('Greet a user by their name')
            .option('-u, --uppercase', 'Convert name to uppercase')
            .action((name: string, options: { uppercase?: boolean }) => {
                try {
                    const validatedName = this.validator.validateString(name);
                    const finalName = options.uppercase ? validatedName.toUpperCase() : validatedName;
                    console.log(chalk.green(`Hello, ${finalName}!`));
                } catch (error: any) {
                    console.error(chalk.red(`Validation Error: ${error.message}`));
                }
            });
    }
}
