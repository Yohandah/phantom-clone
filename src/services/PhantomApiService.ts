import { Phantom } from '../types/Phantom';

export const getPhantoms = async (): Promise<Phantom[]> => {
  const res = await fetch('https://api.jsonbin.io/b/621369321b38ee4b33c52451');

  return res.json();
};
