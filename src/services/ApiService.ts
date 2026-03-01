import axios from 'axios';

export class ApiService {
    public async getGithubUser(username: string): Promise<any> {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    }

    public async getWeather(city: string): Promise<string> {
        const response = await axios.get(`https://wttr.in/${city}?format=3`);
        return response.data;
    }

    public async getRandomQuote(): Promise<any> {
        const response = await axios.get('https://dummyjson.com/quotes/random');
        return response.data;
    }

    public async getRandomJoke(): Promise<any> {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        return response.data;
    }

    public async getTimezoneTime(timezone: string): Promise<any> {
        const response = await axios.get(`http://worldtimeapi.org/api/timezone/${timezone}`);
        return response.data;
    }
}
