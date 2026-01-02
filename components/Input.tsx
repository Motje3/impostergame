import { TextInput, View, Text } from "react-native";

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  keyboardType?: "default" | "numeric";
  maxLength?: number;
}

export function Input({
  value,
  onChangeText,
  placeholder,
  label,
  keyboardType = "default",
  maxLength,
}: InputProps) {
  return (
    <View className="w-full">
      {label && (
        <Text className="text-gray-400 text-sm mb-2 ml-1">{label}</Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#6b7280"
        keyboardType={keyboardType}
        maxLength={maxLength}
        className="bg-card border border-gray-700 rounded-xl px-4 py-3 text-white text-base"
      />
    </View>
  );
}
