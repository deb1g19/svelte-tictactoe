<script lang="ts">
  import type { Writable } from "svelte/types/runtime/store";

  import type { Player } from "../utilities/store";
  import { playerColors, playerCharacters } from "../utilities/store";
  export let player: Writable<Player>;

  function updatePlayerColor(color: string) {
    player.update((player) => {
      player.color = color;
      return player;
    });
  }
</script>

<main>
  <div class="flex justify-between mb-1 ml-1">
    <p>Color:</p>
    <div class="flex justify-end">
      {#each playerColors as color}
        <div
          class="rounded w-5 h-5 mx-1 bg-{color} {color == $player.color &&
            'ring-offset-2 ring-2 ring-gray-400'}"
          on:click={() => updatePlayerColor(color)}
        />
      {/each}
    </div>
  </div>
  <div class="flex justify-between ml-1">
    <p>Character:</p>
    <select bind:value={$player.character} class="rounded p-1">
      {#each playerCharacters as char}
        <option selected={char == $player.character}> {char} </option>
      {/each}
    </select>
  </div>
</main>
