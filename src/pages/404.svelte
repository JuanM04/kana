<script lang="ts">
  import { Link } from "svelte-navigator";
  import Header from "@components/Header.svelte";
</script>

<div>
  <Header subtitle="404" />
  <main class="max-w-xl mx-auto p-4 lg:px-0">
    <p>
      Page not found. <Link to="/" class="link">Go back to home</Link>
    </p>
  </main>
</div>
