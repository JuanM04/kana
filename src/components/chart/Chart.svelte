<script lang="ts">
  import type { Script } from "@kana";
  import Symbol from "./Symbol.svelte";

  export let script: Script;

  let allSymbols = script.chart.map((col) => ({
    consonant: col.consonant,
    symbols: col.chars.map((char) =>
      char === null ? null : script.symbols.find((s) => s.char === char)
    ),
  }));
</script>

<div
  class="grid sm:grid-flow-col text-center space-y-0.5 sm:space-y-1 items-center max-w-xs sm:max-w-xl font-bold mx-auto"
>
  <p />
  <p class="opacity-50">a</p>
  <p class="opacity-50">i</p>
  <p class="opacity-50">u</p>
  <p class="opacity-50">e</p>
  <p class="opacity-50">o</p>
  {#each allSymbols as { consonant, symbols }}
    <p class="opacity-50">{consonant ?? ""}</p>
    {#each symbols as symbol}
      <Symbol {symbol} />
    {/each}
  {/each}
</div>

<style lang="postcss">
  .grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: repeat(17, minmax(0, 1fr));

    @screen sm {
      grid-template-columns: repeat(17, minmax(0, 1fr));
      grid-template-rows: repeat(6, minmax(0, 1fr));
    }
  }
</style>
