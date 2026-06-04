import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Este campo es requerido'),
  email: z
    .string()
    .min(1, 'Este campo es requerido')
    .email('El email no es correcto'),
  phone: z
    .string()
    .min(1, 'Este campo es requerido')
    .regex(/^[+\d\s()-]{6,20}$/, 'El teléfono de contacto no es válido'),
  message: z.string().optional(),
  conditions: z.literal(true, {
    errorMap: () => ({ message: 'Este campo es requerido' }),
  }),
});

export type ContactData = z.infer<typeof contactSchema>;
