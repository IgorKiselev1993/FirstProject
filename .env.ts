import {API_KEY, API_URL} from '@env';
import {z} from 'zod';

const envSchema = z.object({
  API_KEY: z.string().nonempty(),
  API_URL: z.string(),
});

const envVars = {
  API_KEY,
  API_URL,
};

const parsed = envSchema.safeParse(envVars);
if (!parsed.success) {
  console.error('Переменные не валидны:', parsed.error);
} else {
  console.log('Переменные валидны');
}

export const apiKey = envVars.API_KEY;
export const apiURL = envVars.API_URL;
