# Formularios con react-hook-form + Zod

## Esquema

```tsx
// schema.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Este campo es requerido'),
  email: z.string().min(1, 'Este campo es requerido').email('El email no es correcto'),
  phone: z.string().min(1, 'Este campo es requerido').regex(/^[+\d\s()-]{6,20}$/, 'Teléfono inválido'),
  message: z.string().optional(),
  conditions: z.literal(true, { errorMap: () => ({ message: 'Este campo es requerido' }) }),
});

export type ContactData = z.infer<typeof contactSchema>;
```

## Hook del formulario

```tsx
// hooks.ts
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function useContactForm({ formEndpoint }: { formEndpoint: string }) {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const form = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = form.handleSubmit(async (data) => {
    setStatus('loading');
    try {
      const res = await fetch(formEndpoint || '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  });

  return { ...form, onSubmit, status };
}
```

## Componentes de campo

- Crear en `islands/ContactForm/fields/`
- Cada campo recibe `registration: UseFormRegisterReturn` y `error?: string`
- El botón recibe `loading?: boolean` y se deshabilita durante el envío
