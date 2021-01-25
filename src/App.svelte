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
