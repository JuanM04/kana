<script lang="ts">
  import Header from "@components/Header.svelte";
  import Chart from "@components/chart/Chart.svelte";

  import { Hiragana } from "@kana";
</script>

<div>
  <Header subtitle="Hiragana Chart" />
  <main class="max-w-xl mx-auto p-4 lg:px-0">
    <Chart script={Hiragana} />

    <div class="mt-4">
      <span class="font-bold border-b-2 border-red-500">How to use</span>
      <ul>
        <li>Hover to see the romaji</li>
        <li>Click to listen</li>
        <li>Double-click to copy</li>
      </ul>
    </div>
  </main>
</div>
