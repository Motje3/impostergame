import { Pressable, View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

interface ToggleProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label: string;
}

export function Toggle({ value, onValueChange, label }: ToggleProps) {
  const translateX = useSharedValue(value ? 24 : 0);

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handlePress = () => {
    const newValue = !value;
    translateX.value = withSpring(newValue ? 24 : 0, {
      damping: 15,
      stiffness: 200,
    });
    onValueChange(newValue);
  };

  return (
    <Pressable
      onPress={handlePress}
      className="flex-row items-center justify-between py-3"
    >
      <Text className="text-white text-base flex-1 mr-4">{label}</Text>
      <View
        className={`w-14 h-8 rounded-full justify-center px-1 ${value ? "bg-primary" : "bg-gray-600"}`}
      >
        <Animated.View
          style={thumbStyle}
          className="w-6 h-6 rounded-full bg-white"
        />
      </View>
    </Pressable>
  );
}
