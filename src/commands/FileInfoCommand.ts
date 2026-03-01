import { Command as CommanderCommand } from 'commander';
import { Command } from '../core/Command';
import chalk from 'chalk';
import * as fs from 'fs';
import { InputValidator } from '../validators/InputValidator';

export class FileInfoCommand extends Command {
    private validator: InputValidator;

    constructor(command: CommanderCommand) {
        super(command);
        this.validator = new InputValidator();
    }

    public register(): void {
        this.command
            .command('fileinfo <filename>')
            .description('Get basic information about a file')
            .action((filename: string) => {
                try {
                    const validatedName = this.validator.validateString(filename);
                    if (!fs.existsSync(validatedName)) {
                        console.error(chalk.red(`File does not exist: ${validatedName}`));
                        return;
                    }
                    const stats = fs.statSync(validatedName);
                    console.log(chalk.blue(`File Info for: ${validatedName}`));
                    console.log(chalk.yellow(`Size: ${stats.size} bytes`));
                    console.log(chalk.yellow(`Created: ${stats.birthtime}`));
                    console.log(chalk.yellow(`Modified: ${stats.mtime}`));
                } catch (error: any) {
                    console.error(chalk.red(`Error: ${error.message}`));
                }
            });
    }
}
