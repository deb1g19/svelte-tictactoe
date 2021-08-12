import { derived, Writable, writable } from "svelte/store";

/**
 * Options for player colors
 */
export const playerColors: string[] = [
  "red-400",
  "blue-400",
  "green-400",
  "yellow-400",
  "indigo-400",
];

/**
 * Options for player characters
 */
export const playerCharacters: string[] = ["X", "O", "🛶", "⚽"];
/**
 * The color and character for a player
 */
export type Player = {
  color: string;
  character: string;
};

/**
 * The first player
 */
export const player1: Writable<Player> = writable({
  color: "red-400",
  character: "X",
});

/**
 * The second player
 */
export const player2: Writable<Player> = writable({
  color: "blue-400",
  character: "O",
});

/**
 * The winning player, or undefined if the game has not finished
 */
export const winner: Writable<Player | null> = writable();
