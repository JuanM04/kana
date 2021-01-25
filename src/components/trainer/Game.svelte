<script lang="ts">
  import type { SymbolType } from "./types";

  export let symbols: SymbolType[];
  let shuffled = shuffle(symbols);

  let audio: HTMLAudioElement;
  let inputValue: string;

  function shuffle<T>(array: T[]) {
    const initial: T[] = Object.assign([], array);
    let final: T[] = [];

    for (const _ of array) {
      let i = Math.round(Math.random() * (initial.length - 1));
      final = final.concat(initial.splice(i, 1));
    }

    return final;
  }

  $: currentSymbol = shuffled.length > 0 ? shuffled[0] : null;

  $: {
    if (
      shuffled.length > 0 &&
      inputValue &&
      inputValue.trim() === shuffled[0].romaji
    ) {
      inputValue = "";
      shuffled = shuffled.slice(1);
    }
  }
</script>

<div
  class="border-2 border-red-500 rounded-lg overflow-hidden max-w-lg mx-auto"
>
  <div
    class="p-2 border-b border-black flex items-center justify-between text-sm"
  >
    <p>{symbols.length - shuffled.length} seen</p>
    <p>{symbols.length} total</p>
  </div>

  {#if currentSymbol}
    <p
      class="mx-auto my-24 text-center text-7xl font-black cursor-pointer"
      on:click={() => audio?.play()}
    >
      {currentSymbol.char}
    </p>

    <!-- svelte-ignore a11y-media-has-caption -->
    <audio bind:this={audio} preload="none" class="hidden">
      <source src="/sounds/{currentSymbol.romaji}.mp3" type="audio/mpeg" />
    </audio>
  {:else}
    <button
      class="block mx-auto my-24 text-center text-5xl font-extrabold text-red-500 hover:text-red-700 transition-colors"
      on:click={() => (shuffled = shuffle(symbols))}>Replay</button
    >
  {/if}

  <input
    class="bg-red-500 w-full h-30 focus:outline-none text-center text-white text-lg py-1"
    bind:value={inputValue}
  />
</div>
