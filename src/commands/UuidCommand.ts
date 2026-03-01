import { Command as CommanderCommand } from 'commander';
import { Command } from '../core/Command';
import chalk from 'chalk';
import * as crypto from 'crypto';

export class UuidCommand extends Command {
    constructor(command: CommanderCommand) {
        super(command);
    }

    public register(): void {
        this.command
            .command('uuid')
            .description('Generate a random UUID')
            .option('-c, --count <number>', 'Number of UUIDs to generate', '1')
            .action((options: { count: string }) => {
                const count = parseInt(options.count, 10);
                if (isNaN(count) || count < 1) {
                    console.error(chalk.red('Count must be a positive number'));
                    return;
                }
                for (let i = 0; i < count; i++) {
                    console.log(chalk.green(crypto.randomUUID()));
                }
            });
    }
}
