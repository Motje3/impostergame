import { View, Text, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
  FadeIn,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Button } from "@/components/Button";
import { useGameStore } from "@/store/gameStore";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const SWIPE_THRESHOLD = -100;

export default function RevealScreen() {
  const router = useRouter();
  const players = useGameStore((state) => state.players);
  const imposterIndex = useGameStore((state) => state.imposterIndex);
  const secretWord = useGameStore((state) => state.secretWord);
  const secretHint = useGameStore((state) => state.secretHint);
  const settings = useGameStore((state) => state.settings);
  const currentRevealIndex = useGameStore((state) => state.currentRevealIndex);
  const nextReveal = useGameStore((state) => state.nextReveal);
  const finishReveal = useGameStore((state) => state.finishReveal);

  const [isRevealed, setIsRevealed] = useState(false);
  const [showPassMessage, setShowPassMessage] = useState(false);

  const translateY = useSharedValue(0);
  const cardOpacity = useSharedValue(1);

  const currentPlayer = players[currentRevealIndex];
  const isImposter = currentRevealIndex === imposterIndex;
  const isLastPlayer = currentRevealIndex === players.length - 1;

  const revealRole = () => {
    setIsRevealed(true);
    translateY.value = 0;
  };

  const tapGesture = Gesture.Tap().onEnd(() => {
    if (!isRevealed) {
      runOnJS(revealRole)();
    }
  });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (!isRevealed && event.translationY < 0) {
        translateY.value = event.translationY;
      }
    })
    .onEnd((event) => {
      if (!isRevealed && event.translationY < SWIPE_THRESHOLD) {
        runOnJS(revealRole)();
      } else {
        translateY.value = withSpring(0);
      }
    });

  const composedGesture = Gesture.Race(tapGesture, panGesture);

  const animatedCardStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: cardOpacity.value,
  }));

  const handleHideAndPass = () => {
    setIsRevealed(false);
    setShowPassMessage(true);
    translateY.value = 0;
    cardOpacity.value = 1;
  };

  const handleNextPlayer = () => {
    setShowPassMessage(false);
    if (isLastPlayer) {
      finishReveal();
      router.replace("/playing");
    } else {
      nextReveal();
    }
  };

  if (showPassMessage) {
    return (
      <View className="flex-1 bg-background justify-center items-center px-8">
        <Animated.View entering={FadeIn.duration(300)} className="items-center">
          <Text className="text-2xl font-bold text-white mb-4 text-center">
            Pass the phone to
          </Text>
          <Text className="text-4xl font-bold text-primary mb-12">
            {isLastPlayer ? "the host" : players[currentRevealIndex + 1]}
          </Text>
          <Button
            title={isLastPlayer ? "Start Discussion" : "Ready"}
            onPress={handleNextPlayer}
          />
        </Animated.View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <GestureDetector gesture={composedGesture}>
        <Animated.View className="flex-1 justify-center items-center px-6">
          {!isRevealed ? (
            <Animated.View
              style={animatedCardStyle}
              className="bg-surface w-full rounded-3xl p-8 items-center shadow-lg"
            >
              <Text className="text-gray-400 text-sm mb-2">
                Player {currentRevealIndex + 1} of {players.length}
              </Text>
              <Text className="text-3xl font-bold text-white mb-8">
                {currentPlayer}
              </Text>
              <View className="items-center">
                <Text className="text-gray-400 text-center mb-2">
                  Tap or swipe up to see your role
                </Text>
                <Animated.View className="w-1 h-12 bg-gray-600 rounded-full mt-2">
                  <Animated.View
                    className="w-1 h-4 bg-primary rounded-full"
                    style={{
                      position: "absolute",
                      top: 0,
                    }}
                  />
                </Animated.View>
              </View>
            </Animated.View>
          ) : (
            <Animated.View
              entering={FadeIn.duration(300)}
              className="bg-surface w-full rounded-3xl p-8 items-center"
            >
              <Text className="text-gray-400 text-sm mb-2">{currentPlayer}</Text>
              {isImposter ? (
                <>
                  <Text className="text-4xl font-bold text-danger mb-4">
                    You are the
                  </Text>
                  <Text className="text-5xl font-bold text-danger mb-4">
                    IMPOSTER
                  </Text>
                  {settings.showHint && (
                    <View className="bg-card rounded-xl px-4 py-3 mb-4">
                      <Text className="text-gray-400 text-sm text-center mb-1">
                        Hint
                      </Text>
                      <Text className="text-white text-xl font-medium text-center">
                        {secretHint}
                      </Text>
                    </View>
                  )}
                  <Text className="text-gray-400 text-center">
                    Blend in and don't get caught!
                  </Text>
                </>
              ) : (
                <>
                  <Text className="text-gray-400 mb-2">The secret word is</Text>
                  <Text className="text-4xl font-bold text-success mb-8">
                    {secretWord}
                  </Text>
                  <Text className="text-gray-400 text-center">
                    Remember this word
                  </Text>
                </>
              )}
              <View className="mt-8 w-full">
                <Button
                  title="Hide & Pass Phone"
                  onPress={handleHideAndPass}
                  variant="secondary"
                />
              </View>
            </Animated.View>
          )}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
