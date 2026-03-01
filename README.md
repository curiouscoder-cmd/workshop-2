# mycli

A fully functional CLI tool built with Node.js, TypeScript, and Object-Oriented Programming.

## Setup Instructions

```bash
git clone https://github.com/curiouscoder-cmd/workshop-2.git
cd workshop-2
npm install
npm run build
```

## Available Commands

| Command | Description |
|---|---|
| `mycli greet <name>` | Greet a user by name |
| `mycli fileinfo <filename>` | Get file size, created and modified dates |
| `mycli github <username>` | Fetch GitHub user profile info |
| `mycli weather <city>` | Get current weather for a city |
| `mycli quote` | Get a random inspirational quote |
| `mycli joke` | Get a random joke |
| `mycli uuid` | Generate a random UUID |
| `mycli calc <expression>` | Evaluate a math expression |
| `mycli uppercase <text>` | Convert text to uppercase |
| `mycli time <timezone>` | Get the current time in a timezone |

## Flags and Options

- `mycli greet <name> -u` — Greet with uppercase name
- `mycli uuid -c <count>` — Generate multiple UUIDs
- `mycli -v` — Show version
- `mycli --help` — Show help

## Example Usage

```bash
npx ts-node src/index.ts greet Nitya
npx ts-node src/index.ts greet Nitya -u
npx ts-node src/index.ts fileinfo package.json
npx ts-node src/index.ts github torvalds
npx ts-node src/index.ts weather Delhi
npx ts-node src/index.ts quote
npx ts-node src/index.ts joke
npx ts-node src/index.ts uuid
npx ts-node src/index.ts uuid -c 5
npx ts-node src/index.ts calc "2+3*4"
npx ts-node src/index.ts uppercase "hello world"
npx ts-node src/index.ts time Asia/Kolkata
```

## APIs Used

1. **GitHub API** — `https://api.github.com/users/:username`
2. **Weather API** — `https://wttr.in/:city`
3. **Quote API** — `https://dummyjson.com/quotes/random`
4. **Joke API** — `https://official-joke-api.appspot.com/random_joke`
5. **World Time API** — `http://worldtimeapi.org/api/timezone/:tz`

## Tech Stack

- Node.js
- TypeScript
- Commander.js
- Chalk
- Axios
- Zod