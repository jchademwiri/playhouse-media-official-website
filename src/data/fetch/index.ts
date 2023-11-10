import { server } from '@/config';

export async function getMessages() {
  const res = await fetch(`${server}/api/messages`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
