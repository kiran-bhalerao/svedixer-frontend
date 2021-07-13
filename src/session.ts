import { getStores } from '$app/stores';

export const useSession = () => {
  const { session } = getStores<{
    user: { email: string; userId: string };
  }>();

  return session;
};
