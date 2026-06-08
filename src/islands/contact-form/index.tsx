import type { FC } from 'react';
import { useContactForm } from './hooks';
import { FormField } from './fields/form-field';
import { TextAreaField } from './fields/text-area-field';
import { CheckboxField } from './fields/checkbox-field';
import { SubmitButton } from './fields/submit-button';
import { FormStatus } from './fields/form-status';

interface Props {
  formEndpoint: string;
}

const ContactForm: FC<Props> = ({ formEndpoint }) => {
  const { register, watch, onSubmit, status, formState: { errors } } = useContactForm({ formEndpoint });

  return (
    <div id="contact-form" className="w-full">
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-5">
          <FormField
            label="Nombre"
            type="text"
            registration={register('name')}
            error={errors.name?.message}
            placeholder="Tu nombre"
          />
          <FormField
            label="Teléfono"
            type="tel"
            registration={register('phone')}
            error={errors.phone?.message}
            placeholder="Tu teléfono"
          />
        </div>
        <FormField
          label="Email"
          type="email"
          registration={register('email')}
          error={errors.email?.message}
          placeholder="tu@email.com"
        />
        <TextAreaField
          label="Mensaje"
          registration={register('message')}
          placeholder="Cuéntanos cómo podemos ayudarte..."
        />
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <CheckboxField
            registration={register('conditions')}
            error={errors.conditions?.message}
          >
            He leído, comprendo y acepto el
            {' '}<a href="/legal/aviso-legal" target="_blank" className="underline underline-offset-4">Aviso legal</a>
            {' '}y{' '}
            <a href="/legal/politicas-privacidad" target="_blank" className="underline underline-offset-4">las Políticas de privacidad</a>
          </CheckboxField>
        </div>
        <div className="flex justify-end">
          <SubmitButton loading={status === 'loading'} />
        </div>
        <FormStatus status={status} />
      </form>
    </div>
  );
};

export default ContactForm;
