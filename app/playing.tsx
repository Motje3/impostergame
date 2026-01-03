import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { Button } from "@/components/Button";
import { useGameStore } from "@/store/gameStore";

export default function PlayingScreen() {
  const router = useRouter();
  const players = useGameStore((state) => state.players);
  const firstPlayerIndex = useGameStore((state) => state.firstPlayerIndex);
  const endGame = useGameStore((state) => state.endGame);

  const firstPlayer = players[firstPlayerIndex];

  const handleEndGame = () => {
    endGame();
    router.replace("/end-game");
  };

  return (
    <View className="flex-1 bg-background justify-center items-center px-8">
      <Animated.View
        entering={FadeIn.duration(500)}
        className="items-center mb-8"
      >
        <Text className="text-gray-400 text-lg mb-2">First turn goes to</Text>
        <Text className="text-4xl font-bold text-primary mb-4 text-center">
          {firstPlayer}
        </Text>
        <Text className="text-gray-500 text-center">
          Ask a question or give a hint about the word
        </Text>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.duration(500).delay(300)}
        className="bg-surface rounded-2xl p-6 w-full mb-12"
      >
        <Text className="text-gray-400 text-sm mb-4">Players</Text>
        <View className="flex-row flex-wrap gap-2">
          {players.map((player, index) => (
            <View key={index} className="bg-card px-4 py-2 rounded-xl">
              <Text className="text-white">{player}</Text>
            </View>
          ))}
        </View>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.duration(500).delay(500)}
        className="bg-surface rounded-2xl p-6 w-full mb-12"
      >
        <Text className="text-gray-400 text-center">
          Take turns asking questions and giving hints about the secret word.
          The imposter must blend in without knowing the word.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(500).delay(700)}>
        <Button title="End Game / Vote" onPress={handleEndGame} variant="danger" />
      </Animated.View>
    </View>
  );
}
