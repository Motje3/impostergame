import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type GamePhase = "setup" | "reveal" | "playing" | "finished";

export interface GameSettings {
  language: string;
  allowGuess: boolean;
}

export interface GameState {
  players: string[];
  imposterIndex: number;
  secretWord: string;
  currentRevealIndex: number;
  settings: GameSettings;
  gamePhase: GamePhase;
}

interface GameActions {
  setPlayers: (players: string[]) => void;
  setSettings: (settings: Partial<GameSettings>) => void;
  startGame: (secretWord: string) => void;
  nextReveal: () => void;
  finishReveal: () => void;
  endGame: () => void;
  resetGame: () => void;
}

const initialState: GameState = {
  players: [],
  imposterIndex: -1,
  secretWord: "",
  currentRevealIndex: 0,
  settings: {
    language: "en",
    allowGuess: true,
  },
  gamePhase: "setup",
};

export const useGameStore = create<GameState & GameActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      setPlayers: (players) => set({ players }),

      setSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      startGame: (secretWord) => {
        const { players } = get();
        const imposterIndex = Math.floor(Math.random() * players.length);
        set({
          secretWord,
          imposterIndex,
          currentRevealIndex: 0,
          gamePhase: "reveal",
        });
      },

      nextReveal: () =>
        set((state) => ({
          currentRevealIndex: state.currentRevealIndex + 1,
        })),

      finishReveal: () => set({ gamePhase: "playing" }),

      endGame: () => set({ gamePhase: "finished" }),

      resetGame: () => set(initialState),
    }),
    {
      name: "imposter-game-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
