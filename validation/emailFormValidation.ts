import z from "zod"; //npm i zod;

export const emailSchema = z.object({
  email: z
    .string()
    .nonempty("This field is required.")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email."),
  message: z.string().nonempty("This field is required.").max(200),
});
