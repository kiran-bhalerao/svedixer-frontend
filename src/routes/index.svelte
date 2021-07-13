<script>
  import { useSession } from 'src/session';

  const session = useSession();
</script>

<div class="m-4">
  <h1 class="font-bold">Welcome to SvelteKit | {$session.user.email}</h1>
  <p class="text-gray-700">
    Visit <a href="https://kit.svelte.dev" class="text-blue-500"
      >kit.svelte.dev</a
    > to read the documentation
  </p>
</div>
