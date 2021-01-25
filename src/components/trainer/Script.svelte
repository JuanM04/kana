<script lang="ts">
  import type { SetType, SymbolType } from "./types";
  import type { ScriptSymbol } from "@kana";

  import Set from "./Set.svelte";

  export let name: string;
  export let symbols: SymbolType[];

  $: sets = symbols.reduce<
    {
      [key in ScriptSymbol["set"]]: SetType;
    }
  >(
    (accum, symbol) => {
      if (symbol.group === "Others") {
        if (accum.base.Others) {
          accum.base.Others.push(symbol);
        } else {
          accum.base.Others = [symbol];
        }
        return accum;
      }

      if (accum[symbol.set][symbol.group]) {
        accum[symbol.set][symbol.group].push(symbol);
      } else {
        accum[symbol.set][symbol.group] = [symbol];
      }

      return accum;
    },
    {
      base: {},
      dakuten: {},
      double: {},
    }
  );

  $: allSelected = symbols.findIndex((s) => s.selected === false) === -1;
</script>

<div class="bg-red-500 text-white py-2 px-4 rounded-md">
  <div class="flex justify-between items-center">
    <h3 class="text-2xl font-medium tracking-tight">{name}</h3>
    <span
      class="text-xs uppercase font-bold cursor-pointer"
      on:click={() => {
        symbols = symbols.map((s) => {
          s.selected = !allSelected;
          return s;
        });
      }}>
      {#if allSelected}
        Unselect all
      {:else}
        Select all
      {/if}
    </span>
  </div>
  <Set name="Base" bind:set={sets.base} />
  <Set name="Dakuten" bind:set={sets.dakuten} />
  <Set name="Double" bind:set={sets.double} />
</div>
