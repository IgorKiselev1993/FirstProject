import {API_KEY, API_URL} from '@env';
import {z} from 'zod';
import {Locales} from '../constant/locales.ts';

const envSchema = z.object({
  API_KEY: z.string().nonempty(Locales.env.invalidKey),
  API_URL: z.string().nonempty(Locales.env.invalidUrl),
});

const configENV = (() => {
  try {
    return envSchema.parse({
      API_KEY,
      API_URL,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(Locales.env.validationError);
      for (const issue of error.issues) {
        console.error(`- ${issue.message}`);
      }
    } else {
      console.error(Locales.env.errUnknown, error);
    }
    throw error;
  }
})();

export const apiKey = configENV.API_KEY;
export const apiURL = configENV.API_URL;

