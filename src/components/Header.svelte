<script lang="ts">
  import { Link } from "svelte-navigator";

  export let subtitle: string;
</script>

<header
  class="h-80 flex flex-col items-center justify-center bg-red-500 text-white"
>
  <h1>
    <Link
      to="/"
      class="text-center inline font-extrabold tracking-tighter text-6xl border-b-4 border-black hover:text-red-100 transition-colors"
    >Kana</Link
    >
  </h1>
  <h2
    class="text-center inline font-extrabold tracking-tighter text-7xl mt-2 leading-none"
  >
    {subtitle}
  </h2>
</header>
