import { gqlSdk } from '@/server/infrastructure/graphql/client';
import type { ContactFormConfig, ContactFieldConfig } from '@/server/domain/models';
import type { IContactRepository } from '../../../application/ports/contact-repository';

const DEFAULT_CONFIG: ContactFormConfig = {
  subtitle: 'Contacto',
  heading: '¿Hablamos?',
  description: 'Cuéntanos tu caso y te asesoraremos sobre el mejor tratamiento para ti.',
  phone: '615026425',
  phoneLabel: 'Teléfono',
  email: 'osteosalix@gmail.com',
  emailLabel: 'Email',
  fields: [
    { field: 'name', type: 'text', label: 'Nombre', placeholder: 'Tu nombre', requiredError: 'Este campo es requerido' },
    { field: 'email', type: 'email', label: 'Email', placeholder: 'tu@email.com', requiredError: 'Este campo es requerido', formatError: 'El email no es correcto' },
    { field: 'phone', type: 'phone', label: 'Teléfono', placeholder: 'Tu teléfono', requiredError: 'Este campo es requerido', formatError: 'El teléfono de contacto no es válido' },
    { field: 'message', type: 'textarea', label: 'Mensaje', placeholder: 'Cuéntanos cómo podemos ayudarte...', requiredError: '' },
  ],
  checkboxText: 'He leído, comprendo y acepto el {aviso_legal} y {politicas_privacidad}',
  checkboxError: 'Este campo es requerido',
  submitLabel: 'Enviar mensaje',
  submitLoadingLabel: 'Enviando...',
  successMessage: 'El mensaje se ha enviado correctamente, en breve nos pondremos en contacto contigo',
  errorMessage: 'Ha ocurrido un error, por favor, vuelve a intentarlo',
  formEndpoint: '',
};

export class StrapiContactRepository implements IContactRepository {
  async get(): Promise<ContactFormConfig> {
    const data = await gqlSdk.Contact();
    const c = data.contact;
    if (!c) return DEFAULT_CONFIG;

    return {
      subtitle: c.subtitle,
      heading: c.heading,
      description: c.description,
      phone: c.phone,
      phoneLabel: c.phoneLabel,
      email: c.email,
      emailLabel: c.emailLabel,
      fields: (c.fields ?? [])
        .filter((f): f is NonNullable<typeof f> => f !== null)
        .map((f) => ({
          field: f.field,
          type: f.type ?? undefined,
          label: f.label,
          placeholder: f.placeholder,
          requiredError: f.requiredError,
          formatError: f.formatError ?? undefined,
        })),
      checkboxText: c.checkboxText,
      checkboxError: c.checkboxError,
      submitLabel: c.submitLabel,
      submitLoadingLabel: c.submitLoadingLabel,
      successMessage: c.successMessage,
      errorMessage: c.errorMessage,
      formEndpoint: c.formEndpoint ?? '',
    };
  }
}
