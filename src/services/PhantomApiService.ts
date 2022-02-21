import { Phantom } from '../types/Phantom';

export const getPhantoms = async (): Promise<Phantom[]> => {
  const res = await fetch(
    'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/af31835e-3032-481f-8d2c-c6a3b3549397/phantoms.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220219T230718Z&X-Amz-Expires=86400&X-Amz-Signature=c5ccf2e6bbd93ab5f8ec39d0a9c1b32901e57b90ee9324dde14d9f07b0a10510&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22phantoms.json%22&x-id=GetObject',
  );

  return res.json();
};
