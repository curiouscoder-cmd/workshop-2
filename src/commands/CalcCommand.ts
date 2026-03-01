import { Command as CommanderCommand } from 'commander';
import { Command } from '../core/Command';
import chalk from 'chalk';
import { InputValidator } from '../validators/InputValidator';

export class CalcCommand extends Command {
    private validator: InputValidator;

    constructor(command: CommanderCommand) {
        super(command);
        this.validator = new InputValidator();
    }

    public register(): void {
        this.command
            .command('calc <expression>')
            .description('Evaluate a basic math expression')
            .action((expression: string) => {
                try {
                    const validated = this.validator.validateMathExpression(expression);
                    const result = Function(`"use strict"; return (${validated})`)();
                    console.log(chalk.green(`Result: ${result}`));
                } catch (error: any) {
                    console.error(chalk.red(`Invalid expression: ${error.message}`));
                }
            });
    }
}
