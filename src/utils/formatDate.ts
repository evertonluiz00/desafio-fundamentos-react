export default function formatDate(value: string): string {
  const date = new Date(Date.parse(value));
  return Intl.DateTimeFormat('en-GB').format(date);
}
