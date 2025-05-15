import * as z from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export type SignInFormData = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
  // confirmPassword: z.string(), // Vous pouvez décommenter et ajouter une logique de correspondance si nécessaire
  profileImage: z.string().optional(), // URL de l'image de profil (optionnelle)
});
// .refine((data) => data.password === data.confirmPassword, { // Exemple de validation pour confirmPassword
//   message: "Passwords do not match",
//   path: ["confirmPassword"],
// });

export type SignUpFormData = z.infer<typeof signUpSchema>;
