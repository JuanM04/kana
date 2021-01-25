<script lang="ts">
  import type { SetType } from "./types";

  export let name: string;
  export let set: SetType;

  $: setSelected =
    Object.values(set).findIndex(
      (symbols) => symbols.findIndex((s) => s.selected === false) !== -1
    ) === -1;
</script>

<div class="bg-white text-black py-2 px-4 rounded-md my-4">
  <div class="flex justify-between items-center mb-2">
    <h4 class="text-lg">{name}</h4>
    <span
      class="text-xs uppercase font-bold cursor-pointer"
      on:click={() => {
        for (const group in set) {
          set[group] = set[group].map((s) => {
            s.selected = !setSelected;
            return s;
          });
        }
      }}>
      {#if setSelected}
        Unselect all
      {:else}
        Select all
      {/if}
    </span>
  </div>
  <div class="grid grid-cols-4 gap-4">
    {#each Object.entries(set) as [group, symbols] (group)}
      <div
        class="border-2 p-2 rounded-md cursor-pointer transition-colors"
        class:selected={symbols[0].selected}
        class:not-selected={!symbols[0].selected}
        on:click={() => {
          set[group] = set[group].map((s) => {
            s.selected = !s.selected;
            return s;
          });
        }}
      >
        <p class="text-xs uppercase font-bold tracking-wide">
          {symbols[0].group}
        </p>
        <p class="font-medium">
          {#each symbols as { char } (char)}
            {char}
          {/each}
        </p>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .selected {
    @apply border-transparent bg-red-500 text-white;
  }

  .not-selected {
    @apply border-red-400 bg-white text-black;
  }
</style>
