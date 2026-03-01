#!/usr/bin/env node

import { Cli } from './core/Cli';
import { GreetCommand } from './commands/GreetCommand';
import { FileInfoCommand } from './commands/FileInfoCommand';
import { GithubCommand } from './commands/GithubCommand';
import { WeatherCommand } from './commands/WeatherCommand';
import { QuoteCommand } from './commands/QuoteCommand';
import { JokeCommand } from './commands/JokeCommand';
import { UuidCommand } from './commands/UuidCommand';
import { CalcCommand } from './commands/CalcCommand';
import { UppercaseCommand } from './commands/UppercaseCommand';
import { TimeCommand } from './commands/TimeCommand';

const cli = new Cli();

cli.registerCommand((program) => new GreetCommand(program));
cli.registerCommand((program) => new FileInfoCommand(program));
cli.registerCommand((program) => new GithubCommand(program));
cli.registerCommand((program) => new WeatherCommand(program));
cli.registerCommand((program) => new QuoteCommand(program));
cli.registerCommand((program) => new JokeCommand(program));
cli.registerCommand((program) => new UuidCommand(program));
cli.registerCommand((program) => new CalcCommand(program));
cli.registerCommand((program) => new UppercaseCommand(program));
cli.registerCommand((program) => new TimeCommand(program));

cli.run();
