import * as z from "zod";

export const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().optional(), // Mot de passe optionnel si OAuth est prioritaire
});

export type SignInFormData = z.infer<typeof signInSchema>;

// SUPPRESSION DE signUpSchema et SignUpFormData
// export const signUpSchema = z.object({
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   password: z.string()
//     .min(8, {
//       message: "Password must be at least 8 characters long.",
//     })
//     .max(100)
//     .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
//       {
//         message: "Password must include uppercase, lowercase, number, and special character."
//       }
//     ),
// });
// export type SignUpFormData = z.infer<typeof signUpSchema>;
