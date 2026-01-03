import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type GamePhase = "setup" | "reveal" | "playing" | "finished";

export interface GameSettings {
  language: string;
  allowGuess: boolean;
  showHint: boolean;
}

export interface GameState {
  players: string[];
  lastPlayers: string[];
  imposterIndex: number;
  firstPlayerIndex: number;
  secretWord: string;
  secretHint: string;
  currentRevealIndex: number;
  settings: GameSettings;
  gamePhase: GamePhase;
}

interface GameActions {
  setPlayers: (players: string[]) => void;
  setSettings: (settings: Partial<GameSettings>) => void;
  startGame: (secretWord: string, secretHint: string) => void;
  nextReveal: () => void;
  finishReveal: () => void;
  endGame: () => void;
  resetGame: () => void;
}

const initialState: GameState = {
  players: [],
  lastPlayers: [],
  imposterIndex: -1,
  firstPlayerIndex: 0,
  secretWord: "",
  secretHint: "",
  currentRevealIndex: 0,
  settings: {
    language: "en",
    allowGuess: true,
    showHint: true,
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

      startGame: (secretWord, secretHint) => {
        const { players } = get();
        const imposterIndex = Math.floor(Math.random() * players.length);
        const firstPlayerIndex = Math.floor(Math.random() * players.length);
        set({
          secretWord,
          secretHint,
          imposterIndex,
          firstPlayerIndex,
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

      resetGame: () => {
        const { players, settings } = get();
        set({
          ...initialState,
          lastPlayers: players.length > 0 ? players : get().lastPlayers,
          settings,
        });
      },
    }),
    {
      name: "imposter-game-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
