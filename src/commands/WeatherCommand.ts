import { Command as CommanderCommand } from 'commander';
import { Command } from '../core/Command';
import chalk from 'chalk';
import { ApiService } from '../services/ApiService';
import { InputValidator } from '../validators/InputValidator';

export class WeatherCommand extends Command {
    private apiService: ApiService;
    private validator: InputValidator;

    constructor(command: CommanderCommand) {
        super(command);
        this.apiService = new ApiService();
        this.validator = new InputValidator();
    }

    public register(): void {
        this.command
            .command('weather <city>')
            .description('Get the current weather for a specific city')
            .action(async (city: string) => {
                try {
                    const validatedCity = this.validator.validateString(city);
                    console.log(chalk.cyan(`Fetching weather for: ${validatedCity}...`));
                    const data = await this.apiService.getWeather(validatedCity);
                    console.log(chalk.blue(data.trim()));
                } catch (error: any) {
                    console.error(chalk.red(`Error fetching weather: ${error.message}`));
                }
            });
    }
}
