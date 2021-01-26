<script lang="ts">
  import { Router, Route } from "svelte-navigator";

  import Home from "@pages/Home.svelte";
  import NotFound from "@pages/404.svelte";

  import HiraganaChart from "@pages/HiraganaChart.svelte";
  import KatakanaChart from "@pages/KatakanaChart.svelte";
  import Trainer from "@pages/Trainer.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/hiragana-chart" component={HiraganaChart} />
  <Route path="/katakana-chart" component={KatakanaChart} />
  <Route path="/trainer" component={Trainer} />

  <Route component={NotFound} />
</Router>

<style global lang="postcss">
  @import url("https://rsms.me/inter/inter.css");

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .link {
    @apply text-red-500 font-bold transition-colors;
  }

  .link:hover {
    @apply text-red-700;
  }
</style>
