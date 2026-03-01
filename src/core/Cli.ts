import { Command as CommanderCommand } from 'commander';
import { Command } from './Command';
import chalk from 'chalk';

export class Cli {
    private program: CommanderCommand;
    private commands: Command[] = [];

    constructor() {
        this.program = new CommanderCommand();
        this.setup();
    }

    private setup() {
        this.program
            .name('mycli')
            .description(chalk.blue('A custom CLI tool built with Node, TypeScript, and OOP'))
            .version('1.0.0', '-v, --version', 'output the current version');
    }

    public registerCommand(commandFactory: (program: CommanderCommand) => Command) {
        const command = commandFactory(this.program);
        command.register();
        this.commands.push(command);
    }

    public run() {
        this.program.parse(process.argv);
    }
}
