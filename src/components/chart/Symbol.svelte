<script lang="ts">
  import type { ScriptSymbol } from "@kana";
  export let symbol: ScriptSymbol;

  let showRomaji = false;
  let audio: HTMLAudioElement;

  function play() {
    if (audio) {
      audio.play();
    }
  }

  function copy() {
    if (symbol !== null) {
      navigator.clipboard.writeText(symbol.char);
      alert(`"${symbol.char}" copied to clipboard!`);
    }
  }
</script>

<div
  class="select-none grid justify-center items-center {symbol !== null
    ? 'cursor-pointer'
    : ''}"
  on:mouseenter={() => (showRomaji = true)}
  on:mouseleave={() => (showRomaji = false)}
  on:click={play}
  on:dblclick={copy}
>
  {#if symbol !== null}
    <p
      class="text-xl transition-opacity {showRomaji
        ? 'opacity-0'
        : 'opacity-100'}"
    >
      {symbol.char}
    </p>
    <p
      class="text-base font-medium transition-opacity {showRomaji
        ? 'opacity-100'
        : 'opacity-0'}"
    >
      {symbol.romaji}
    </p>
    <!-- svelte-ignore a11y-media-has-caption -->
    <audio bind:this={audio} preload="none" class="hidden">
      <source src="/sounds/{symbol.romaji}.mp3" type="audio/mpeg" />
    </audio>
  {/if}
</div>

<style>
  p {
    grid-column: 1;
    grid-row: 1;
  }
</style>
