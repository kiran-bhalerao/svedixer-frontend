import { apiUrl } from 'src/constants';
import { tsFetch } from 'src/utils/ts-fetch';

const getCookie = (cookies: string, name: string) => {
  const cookie: Record<string, string | undefined> = {};
  cookies.split(';').forEach(function (el) {
    const [k, v] = el.split('=');
    cookie[k.trim()] = v;
  });

  return cookie[name];
};

const getUserInformation = async (cookies: string) => {
  const tokenKey = 'access_token';
  const token = getCookie(cookies, tokenKey);

  const res = await tsFetch<{ user: Record<string, unknown> }>({
    url: `${apiUrl}/me`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const result = await res.json();
  return result.user;
};

export async function handle({ request, resolve }) {
  request.locals.user = await getUserInformation(request.headers.cookie);

  const response = await resolve(request);

  return {
    ...response,
    headers: {
      ...response.headers
    }
  };
}

export function getSession(request) {
  return {
    user: {
      email: request.locals.user && request.locals.user.email,
      userId: request.locals.id && request.locals.user.id
    }
  };
}
