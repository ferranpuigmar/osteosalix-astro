import type { FC } from 'react';
import { useContactForm } from './hooks';
import { FormField } from './fields/form-field';
import { TextAreaField } from './fields/text-area-field';
import { CheckboxField } from './fields/checkbox-field';
import { SubmitButton } from './fields/submit-button';
import { FormStatus } from './fields/form-status';
import type { ContactFormConfig, FieldConfig } from './schema';

interface Props {
  formEndpoint: string;
  config?: ContactFormConfig & {
    submitLabel?: string;
    submitLoadingLabel?: string;
    successMessage?: string;
    errorMessage?: string;
    checkboxText?: string;
  };
}

function inputType(type: string): 'text' | 'email' | 'tel' {
  if (type === 'email') return 'email';
  if (type === 'phone') return 'tel';
  return 'text';
}

function renderCheckbox(text: string) {
  return text
    .replace('{aviso_legal}', '<a href="/legal/aviso-legal" target="_blank" class="underline underline-offset-4">Aviso legal</a>')
    .replace('{politicas_privacidad}', '<a href="/legal/politicas-privacidad" target="_blank" class="underline underline-offset-4">las Políticas de privacidad</a>');
}

function renderField(f: FieldConfig, register: any, errors: any) {
  const name = f.field as any;
  const type = f.type || f.field;

  if (type === 'textarea' || type === 'message') {
    return (
      <TextAreaField
        key={f.field}
        label={f.label}
        registration={register(name)}
        placeholder={f.placeholder}
      />
    );
  }

  return (
    <FormField
      key={f.field}
      label={f.label}
      type={inputType(type)}
      registration={register(name)}
      error={errors[name]?.message as string | undefined}
      placeholder={f.placeholder}
    />
  );
}

const ContactForm: FC<Props> = ({ formEndpoint, config }) => {
  const { register, onSubmit, status, formState: { errors } } = useContactForm({ formEndpoint, config });
  const fields = config?.fields ?? [];
  const checkboxText = config?.checkboxText ?? 'He leído, comprendo y acepto el {aviso_legal} y {politicas_privacidad}';

  return (
    <div id="contact-form" className="w-full">
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
        {fields.map((f) => renderField(f, register, errors))}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <CheckboxField
            registration={register('conditions')}
            error={errors.conditions?.message}
          >
            <span dangerouslySetInnerHTML={{ __html: renderCheckbox(checkboxText) }} />
          </CheckboxField>
        </div>
        <div className="flex justify-end">
          <SubmitButton
            loading={status === 'loading'}
            label={config?.submitLabel}
            loadingLabel={config?.submitLoadingLabel}
          />
        </div>
        <FormStatus
          status={status}
          successMessage={config?.successMessage}
          errorMessage={config?.errorMessage}
        />
      </form>
    </div>
  );
};

export default ContactForm;
