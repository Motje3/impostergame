import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { Button } from "@/components/Button";
import { useGameStore } from "@/store/gameStore";
import { useEffect } from "react";

export default function StartScreen() {
  const router = useRouter();
  const resetGame = useGameStore((state) => state.resetGame);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  const handleStartGame = () => {
    router.push("/player-setup");
  };

  return (
    <View className="flex-1 bg-background justify-center items-center px-8">
      <Animated.View
        entering={FadeInUp.duration(800).delay(200)}
        className="items-center mb-16"
      >
        <Text className="text-6xl font-bold text-white mb-4">Imposter</Text>
        <Text className="text-gray-400 text-lg">Find the spy among you</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(600).delay(600)}>
        <Button title="Start Game" onPress={handleStartGame} />
      </Animated.View>

      <Animated.View
        entering={FadeIn.duration(600).delay(1000)}
        className="absolute bottom-12"
      >
        <Text className="text-gray-600 text-sm">Pass the phone party game</Text>
      </Animated.View>
    </View>
  );
}
