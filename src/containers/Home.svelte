<script lang="ts">
  import type { Writable } from "svelte/types/runtime/store";

  import Board from "../components/Board.svelte";
  import Dropdown from "../components/Dropdown.svelte";
  import PlayerSettings from "../components/PlayerSettings.svelte";
  import type { Player } from "../utilities/store";
  import { player1, player2 } from "../utilities/store";

  let grid: Writable<Player>[] = new Array(9).fill(null);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let currentPlayer: Writable<Player> = player1;
  let winner: Writable<Player> | null;

  function calculateWinner(): Writable<Player> | null {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (grid[a] && grid[a] == grid[b] && grid[a] == grid[c]) {
        return grid[a];
      }
    }
    return null;
  }

  function handleTurn(index: number) {
    if (!grid[index] && !winner) {
      grid[index] = currentPlayer;
      updateCurrentPlayer();
      winner = calculateWinner();
    }
  }

  function updateCurrentPlayer() {
    currentPlayer = currentPlayer == player1 ? player2 : player1;
  }

  function restart() {
    grid = new Array(9).fill(null);
    winner = null;
  }
</script>

<main>
  <div class="flex justify-end pt-3 pr-3">
    <Dropdown title="⚙" alignment="right">
      <p class="font-bold mb-2">Player 1</p>
      <PlayerSettings player={player1} />
      <br />
      <p class="font-bold mb-2">Player 2</p>
      <PlayerSettings player={player2} />
    </Dropdown>
  </div>
  <div
    class="text-center mx-auto pb-12 p-5 md:p-12 rounded flex flex-col h-screen justify-between"
  >
    <h1 class="text-5xl">Tic Tac Toe</h1>
    {#if winner != null}
      <p class="text-lg text-{$winner.color} mt-3">
        {$winner?.character} wins!
      </p>
    {:else}
      <p class="text-lg text-{$currentPlayer.color} mt-3">
        It's {$currentPlayer.character}'s turn
      </p>
    {/if}

    <div class="my-10">
      <Board {grid} {handleTurn} />
    </div>
    <div class="mb-auto md:mb-auto h-10">
      <button
        class="{winner != null
          ? `border-${$winner.color} hover:bg-${$winner.color} hover:text-white border-2 text-${$winner.color}`
          : 'bg-gray-400 text-white'} rounded w-28 p-2 font-medium"
        on:click={restart}>{!winner ? "Restart" : "Play again!"}</button
      >
    </div>
    <div class="h-10">
      <h3 class="sm text-gray-500">
        Made with <a
          href="https://svelte.dev/"
          class="no-underline text-red-400">Svelte</a
        >
        by
        <a href="https://www.linkedin.com/in/deb1g19/" class="text-blue-400"
          >Dan Berry</a
        >
      </h3>
    </div>
  </div>
</main>
