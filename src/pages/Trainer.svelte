<script lang="ts">
  import Header from "@components/Header.svelte";
  import Script from "@components/trainer/Script.svelte";
  import Game from "@components/trainer/Game.svelte";

  import { Hiragana, Katakana } from "@kana";

  let hiraganaSymbols = Hiragana.symbols.map((s) => ({
    ...s,
    selected: false,
  }));
  let katakanaSymbols = Katakana.symbols.map((s) => ({
    ...s,
    selected: false,
  }));

  let playing = false;

  $: selectedSymbols = hiraganaSymbols
    .concat(katakanaSymbols)
    .filter((s) => s.selected);

  function play() {
    if (selectedSymbols.length === 0) {
      alert("There are none symbols selected");
      return;
    }

    playing = true;
  }
</script>

<div>
  <Header subtitle="Trainer" />
  <main class="mx-auto p-4 lg:px-0">
    {#if playing}
      <Game symbols={selectedSymbols} />
    {:else}
      <button
        class="text-4xl font-extrabold text-red-500 hover:text-red-700 transition-colors mb-10 mx-auto block"
        on:click={play}>Play</button
      >
      <div class="flex flex-wrap justify-center gap-4">
        <Script name="Hiragana" bind:symbols={hiraganaSymbols} />
        <Script name="Katakana" bind:symbols={katakanaSymbols} />
      </div>
    {/if}
  </main>
</div>
