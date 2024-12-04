import { z } from "zod";

const requiredString = z
    .string()
    .trim()
    .min(1, "Required")
    .max(5000, "Your prompt must not be more than 5000 characters");

export const promptSchema = z.object({
    userInput: requiredString,
});
