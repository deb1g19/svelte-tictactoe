<script lang="ts">
  import type { Writable } from "svelte/types/runtime/store";

  import type { Player } from "../utilities/store";
  export let player: Writable<Player> | null;
</script>

<main>
  <div
    class="h-16 md:h-24 text-center flex justify-center align-middle rounded {player
      ? `bg-${$player.color}`
      : 'bg-gray-200 hover:bg-gray-400'}"
  >
    <span
      class="font-bold flex items-center justify-center  text-xl md:text-3xl"
    >
      {!player ? "" : $player.character}
    </span>
  </div>
</main>
