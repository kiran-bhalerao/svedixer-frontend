import { writable } from 'svelte/store';

const initialState = {
  accessToken: ''
};

const { subscribe, set, update } = writable(initialState);


const addAccessToken = (token: string) => {
  update((state) => {
    return {
      ...state,
      accessToken: token
    };
  });
};

const reset = () => set(initialState);

export default {
  subscribe,
  addAccessToken,
  reset
};
