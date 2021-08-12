<script lang="ts">
  import Square from "./Square.svelte";
  import type { Player } from "../utilities/store";
  import type { Writable } from "svelte/types/runtime/store";

  export let grid: Writable<Player>[];
  export let handleTurn: (index: number) => void;
</script>

<main>
  <div class="grid grid-cols-3 mx-auto w-48 md:w-72 gap-2">
    {#each grid as player, i}
      <div
        on:click={() => {
          handleTurn(i);
        }}
      >
        <Square {player} />
      </div>
    {/each}
  </div>
</main>
