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
      <form onSubmit={onSubmit} noValidate>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
          <FormField
            label="Nombre"
            type="text"
            registration={register('name')}
            error={errors.name?.message}
            value={watch('name')}
          />
          <FormField
            label="Correo electrónico"
            type="email"
            registration={register('email')}
            error={errors.email?.message}
            value={watch('email')}
          />
          <FormField
            label="Teléfono"
            type="tel"
            registration={register('phone')}
            error={errors.phone?.message}
            value={watch('phone')}
          />
          <TextAreaField
            label="Mensaje (opcional)"
            registration={register('message')}
            value={watch('message')}
          />
          <div className="col-span-3 flex flex-col items-center md:flex-row md:justify-between">
            <CheckboxField
              registration={register('conditions')}
              error={errors.conditions?.message}
            >
              He leído, comprendo y acepto el
              {' '}<a href="/legal/aviso-legal" target="_blank" className="underline underline-offset-4">Aviso legal</a>
              {' '}y{' '}
              <a href="/legal/politicas-privacidad" target="_blank" className="underline underline-offset-4">las Políticas de privacidad</a>
            </CheckboxField>
            <SubmitButton loading={status === 'loading'} />
          </div>
          <FormStatus status={status} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
