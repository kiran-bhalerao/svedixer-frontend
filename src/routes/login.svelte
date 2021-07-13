<script lang="ts">
  import { apiPrefix } from 'src/constants';
  import store from 'src/store';
  import { tsFetch } from 'src/utils/ts-fetch';

  let email = '';
  let password = '';

  async function onSubmit() {
    const response = await tsFetch<{ access_token: string }>({
      url: `${apiPrefix}/sign_up`,
      method: 'POST',
      body: {
        user: {
          email,
          password,
          password_confirmation: password
        }
      }
    });

    const result = await response.json();
    store.addAccessToken(result.access_token);
  }
</script>

<div class="h-full flex flex-col justify-center">
  <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
    Sign in to your account
  </h2>

  <form
    on:submit|preventDefault={onSubmit}
    class="mt-8 space-y-6 w-4/12 mx-auto mb-32"
  >
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input
          bind:value={email}
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="login-input"
          placeholder="Email address"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input
          bind:value={password}
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          class="login-input"
          placeholder="Password"
        />
      </div>
    </div>

    <div>
      <button type="submit" class="submit-button"> Sign in </button>
    </div>
  </form>
</div>

<style lang="scss">
  .submit-button {
    @apply relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
  }

  .login-input {
    @apply appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none my-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm;
  }
</style>
