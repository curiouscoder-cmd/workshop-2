import { Command as CommanderCommand } from 'commander';

export abstract class Command {
    protected command: CommanderCommand;

    constructor(command: CommanderCommand) {
        this.command = command;
    }

    public abstract register(): void;
}
