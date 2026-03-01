import { z } from 'zod';

export class InputValidator {
    public validateString(input: string, minLength: number = 1): string {
        const schema = z.string().min(minLength);
        return schema.parse(input);
    }

    public validateMathExpression(input: string): string {
        const schema = z.string().regex(/^[0-9+\-*/().\s]+$/);
        return schema.parse(input);
    }

    public validateTimezone(input: string): string {
        const schema = z.string().regex(/^[a-zA-Z]+\/[a-zA-Z_]+$/);
        return schema.parse(input);
    }
}
