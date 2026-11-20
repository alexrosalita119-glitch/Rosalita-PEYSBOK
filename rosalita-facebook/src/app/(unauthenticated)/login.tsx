import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 24 }}>
        <View className="mb-8 items-center">
          <Text className="text-4xl font-black tracking-tight text-[#F5F7FF]">Rosalita</Text>
          <Text className="mt-2 text-base text-[#A8B0C0]">Welcome back</Text>
        </View>

        <View className="rounded-3xl border border-white/10 bg-[#121417] p-5 shadow-lg shadow-black/30">
          <Text className="mb-5 text-2xl font-bold text-white">Login</Text>

          <Text className="mb-2 text-sm font-medium text-[#D7DEEA]">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor="#7F8CA3"
            autoCapitalize="none"
            keyboardType="email-address"
            className="mb-4 rounded-2xl border border-white/10 bg-[#1B1F25] px-4 py-3 text-base text-white"
          />

          <Text className="mb-2 text-sm font-medium text-[#D7DEEA]">Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            placeholderTextColor="#7F8CA3"
            secureTextEntry
            className="mb-5 rounded-2xl border border-white/10 bg-[#1B1F25] px-4 py-3 text-base text-white"
          />

          <Pressable
            onPress={() => router.push("/(authenticated)/(tabs)/home")}
            className="mb-4 rounded-2xl bg-[#7C9CFF] px-4 py-3.5"
          >
            <Text className="text-center text-base font-bold text-[#08111A]">Login</Text>
          </Pressable>

          <View className="flex-row items-center justify-center">
            <Text className="text-sm text-[#A8B0C0]">Don’t have an account? </Text>
            <Link href="/(unauthenticated)/register" asChild>
              <Pressable>
                <Text className="text-sm font-semibold text-[#7C9CFF]">Register</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
