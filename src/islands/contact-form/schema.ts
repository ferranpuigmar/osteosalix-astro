import { z } from 'zod';

const VALIDATION_TYPE = {
  TEXT: 'text',
  EMAIL: 'email',
  PHONE: 'phone',
  TEXTAREA: 'textarea',
} as const;

export interface FieldConfig {
  field: string;
  label: string;
  placeholder: string;
  requiredError: string;
  formatError?: string;
  type?: string;
}

export interface ContactFormConfig {
  fields: FieldConfig[];
  checkboxError: string;
}

function buildFieldValidator(f: FieldConfig): z.ZodTypeAny {
  const req = f.requiredError || 'Este campo es requerido';
  const type = f.type || f.field;

  switch (type) {
    case VALIDATION_TYPE.TEXTAREA:
    case 'message':
      return z.string().optional();
    case VALIDATION_TYPE.EMAIL:
      return z
        .string()
        .min(1, req)
        .email(f.formatError || 'El email no es correcto');
    case VALIDATION_TYPE.PHONE:
      return z
        .string()
        .min(1, req)
        .regex(/^[+\d\s()-]{6,20}$/, f.formatError || 'El teléfono de contacto no es válido');
    default:
      return z.string().min(1, req);
  }
}

export function createContactSchema(config?: ContactFormConfig) {
  const shape: Record<string, z.ZodTypeAny> = {};

  for (const f of config?.fields ?? []) {
    shape[f.field] = buildFieldValidator(f);
  }

  shape.conditions = z.literal(true, {
    errorMap: () => ({ message: config?.checkboxError || 'Este campo es requerido' }),
  });

  return z.object(shape);
}

export const contactSchema = createContactSchema();

export type ContactData = z.infer<ReturnType<typeof createContactSchema>>;
