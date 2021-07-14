/* eslint-disable @typescript-eslint/no-explicit-any */

type methods = 'post' | 'get' | 'delete' | 'put';

interface tsFetchArgs extends RequestInit {
  url: string;
  method: methods | `${Uppercase<methods>}`;
  body?: any;
}

export async function tsFetch<R extends any = any>(args: tsFetchArgs) {
  const { url, method, body, headers = {}, ...rest } = args;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    ...(body && { body: JSON.stringify({ ...body }) }),
    ...rest
  });

  return {
    ...response,
    async json() {
      const result: R = await response.json();

      return result;
    }
  };
}
