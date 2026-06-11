export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '');
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim();
}

export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  const match = digits.match(/.{1,3}/g);
  return match ? match.join(' ') : phone;
}
