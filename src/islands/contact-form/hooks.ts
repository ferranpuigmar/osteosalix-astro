import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createContactSchema, type ContactData, type ContactFormConfig } from './schema';
import type { SubmitStatus } from './types';

interface UseContactFormOptions {
  formEndpoint: string;
  config?: ContactFormConfig;
}

export function useContactForm({ formEndpoint, config }: UseContactFormOptions) {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const form = useForm<ContactData>({
    resolver: zodResolver(createContactSchema(config)),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setStatus('loading');
    const endpoint = formEndpoint || '/api/contact';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message || '',
        }),
      });

      const result = await response.json();

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
