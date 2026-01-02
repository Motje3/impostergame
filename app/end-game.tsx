import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useGameStore } from "@/store/gameStore";

export default function EndGameScreen() {
  const router = useRouter();
  const players = useGameStore((state) => state.players);
  const imposterIndex = useGameStore((state) => state.imposterIndex);
  const secretWord = useGameStore((state) => state.secretWord);
  const settings = useGameStore((state) => state.settings);
  const resetGame = useGameStore((state) => state.resetGame);

  const [showReveal, setShowReveal] = useState(false);
  const [showGuess, setShowGuess] = useState(false);
  const [guess, setGuess] = useState("");
  const [guessResult, setGuessResult] = useState<"correct" | "wrong" | null>(null);

  const imposterName = players[imposterIndex];

  const handleReveal = () => {
    setShowReveal(true);
  };

  const handleGuess = () => {
    setShowGuess(true);
  };

  const handleSubmitGuess = () => {
    const isCorrect =
      guess.trim().toLowerCase() === secretWord.toLowerCase();
    setGuessResult(isCorrect ? "correct" : "wrong");
  };

  const handleRestart = () => {
    resetGame();
    router.replace("/");
  };

  if (!showReveal) {
    return (
      <View className="flex-1 bg-background justify-center items-center px-8">
        <Animated.View entering={FadeIn.duration(500)} className="items-center">
          <Text className="text-3xl font-bold text-white mb-4 text-center">
            Game Over
          </Text>
          <Text className="text-gray-400 text-lg text-center mb-12">
            Time to reveal the imposter
          </Text>
          <Button title="Reveal Imposter" onPress={handleReveal} />
        </Animated.View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background px-6 pt-16">
      <Animated.View entering={FadeIn.duration(500)} className="items-center">
        <Text className="text-gray-400 mb-2">The imposter was</Text>
        <Text className="text-4xl font-bold text-danger mb-8">
          {imposterName}
        </Text>
        <Text className="text-gray-400 mb-2">The secret word was</Text>
        <Text className="text-3xl font-bold text-success mb-8">{secretWord}</Text>
      </Animated.View>

      {settings.allowGuess && !showGuess && !guessResult && (
        <Animated.View
          entering={FadeInDown.duration(500).delay(300)}
          className="mt-8"
        >
          <Button
            title="Imposter: Guess the Word"
            onPress={handleGuess}
            variant="secondary"
          />
        </Animated.View>
      )}

      {showGuess && !guessResult && (
        <Animated.View
          entering={FadeInDown.duration(300)}
          className="mt-8 bg-surface rounded-2xl p-6"
        >
          <Text className="text-white text-lg mb-4">
            Imposter, what was the secret word?
          </Text>
          <Input
            value={guess}
            onChangeText={setGuess}
            placeholder="Enter your guess"
          />
          <View className="mt-4">
            <Button
              title="Submit Guess"
              onPress={handleSubmitGuess}
              disabled={guess.trim().length === 0}
            />
          </View>
        </Animated.View>
      )}

      {guessResult && (
        <Animated.View
          entering={FadeIn.duration(300)}
          className="mt-8 items-center"
        >
          {guessResult === "correct" ? (
            <>
              <Text className="text-4xl font-bold text-success mb-2">
                Correct!
              </Text>
              <Text className="text-gray-400 text-center">
                The imposter figured out the word!
              </Text>
            </>
          ) : (
            <>
              <Text className="text-4xl font-bold text-danger mb-2">Wrong!</Text>
              <Text className="text-gray-400 text-center">
                The imposter failed to guess the word.
              </Text>
            </>
          )}
        </Animated.View>
      )}

      <View className="flex-1" />

      <View className="mb-8">
        <Button title="Play Again" onPress={handleRestart} />
      </View>
    </View>
  );
}
