import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { Button } from "@/components/Button";
import { Toggle } from "@/components/Toggle";
import { useGameStore } from "@/store/gameStore";
import { getRandomWord, getAvailableLanguages } from "@/data/words";

export default function GameSettingsScreen() {
  const router = useRouter();
  const settings = useGameStore((state) => state.settings);
  const setSettings = useGameStore((state) => state.setSettings);
  const startGame = useGameStore((state) => state.startGame);

  const languages = getAvailableLanguages();

  const handleStartGame = () => {
    const word = getRandomWord(settings.language);
    startGame(word);
    router.push("/reveal");
  };

  return (
    <View className="flex-1 bg-background px-6 pt-16">
      <Animated.View entering={FadeIn.duration(500)}>
        <Text className="text-3xl font-bold text-white mb-2">Settings</Text>
        <Text className="text-gray-400 mb-8">Configure game options</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(500).delay(200)}>
        <View className="bg-surface rounded-2xl p-4 mb-6">
          <Text className="text-gray-400 text-sm mb-3">Language</Text>
          <View className="flex-row flex-wrap gap-2">
            {languages.map((lang) => (
              <View
                key={lang}
                className={`px-4 py-2 rounded-xl ${
                  settings.language === lang ? "bg-primary" : "bg-card"
                }`}
                onTouchEnd={() => setSettings({ language: lang })}
              >
                <Text className="text-white font-medium">
                  {lang === "en" ? "English" : lang.toUpperCase()}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.duration(500).delay(400)}>
        <View className="bg-surface rounded-2xl p-4">
          <Toggle
            value={settings.allowGuess}
            onValueChange={(value) => setSettings({ allowGuess: value })}
            label="Allow imposter to guess the word at the end"
          />
        </View>
      </Animated.View>

      <View className="flex-1" />

      <View className="mb-8">
        <Button title="Start Game" onPress={handleStartGame} />
      </View>
    </View>
  );
}
