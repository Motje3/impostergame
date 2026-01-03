import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect, useRef } from "react";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useGameStore } from "@/store/gameStore";

export default function PlayerSetupScreen() {
  const router = useRouter();
  const setPlayers = useGameStore((state) => state.setPlayers);
  const lastPlayers = useGameStore((state) => state.lastPlayers);

  const [playerCount, setPlayerCount] = useState("");
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [showNameInputs, setShowNameInputs] = useState(false);
  const prevCountRef = useRef<number>(0);

  const loadLastPlayers = () => {
    setPlayerCount(lastPlayers.length.toString());
    setPlayerNames(lastPlayers);
    prevCountRef.current = lastPlayers.length;
    setShowNameInputs(true);
  };

  useEffect(() => {
    const count = parseInt(playerCount);
    if (count >= 3 && count <= 12) {
      if (count !== prevCountRef.current) {
        setPlayerNames((prev) =>
          Array(count)
            .fill("")
            .map((_, i) => prev[i] || "")
        );
        prevCountRef.current = count;
      }
      setShowNameInputs(true);
    } else {
      setShowNameInputs(false);
    }
  }, [playerCount]);

  const handleNameChange = (index: number, name: string) => {
    const newNames = [...playerNames];
    newNames[index] = name;
    setPlayerNames(newNames);
  };

  const isValid = () => {
    if (!showNameInputs) return false;
    return playerNames.every((name) => name.trim().length > 0);
  };

  const handleContinue = () => {
    if (isValid()) {
      setPlayers(playerNames.map((n) => n.trim()));
      router.push("/game-settings");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-background"
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="px-6 pt-16">
          <Animated.View entering={FadeIn.duration(500)}>
            <Text className="text-3xl font-bold text-white mb-2">
              Player Setup
            </Text>
            <Text className="text-gray-400 mb-8">
              Enter the number of players (3-12)
            </Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(500).delay(200)}>
            <Input
              value={playerCount}
              onChangeText={setPlayerCount}
              placeholder="Number of players"
              keyboardType="numeric"
              maxLength={2}
              label="How many players?"
            />
          </Animated.View>

          {lastPlayers.length >= 3 && !showNameInputs && (
            <Animated.View entering={FadeInDown.duration(400).delay(300)}>
              <View
                className="mt-4 bg-surface rounded-xl p-4"
                onTouchEnd={loadLastPlayers}
              >
                <Text className="text-gray-400 text-sm mb-1">Quick start</Text>
                <Text className="text-white font-medium">
                  Load last {lastPlayers.length} players
                </Text>
                <Text className="text-gray-500 text-sm mt-1">
                  {lastPlayers.join(", ")}
                </Text>
              </View>
            </Animated.View>
          )}

          {showNameInputs && (
            <Animated.View
              entering={FadeInDown.duration(400)}
              className="mt-8"
            >
              <Text className="text-gray-400 text-sm mb-4">
                Enter player names
              </Text>
              {playerNames.map((name, index) => (
                <Animated.View
                  key={index}
                  entering={FadeInDown.duration(300).delay(index * 50)}
                  className="mb-3"
                >
                  <Input
                    value={name}
                    onChangeText={(text) => handleNameChange(index, text)}
                    placeholder={`Player ${index + 1}`}
                    label={`Player ${index + 1}`}
                  />
                </Animated.View>
              ))}
            </Animated.View>
          )}
        </View>
      </ScrollView>

      <View className="absolute bottom-8 left-6 right-6">
        <Button
          title="Continue"
          onPress={handleContinue}
          disabled={!isValid()}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
