import { Image, Pressable, ScrollView, Text, View } from "react-native";

const profileImage = require("../../../../assets/images/715eb3e4-a35d-4bb1-90db-0a24c4a202b5.jpg");

export default function ProfileTab() {
  return (
    <View className="flex-1 bg-[#050505]">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="bg-[#0A0A0D] px-5 pb-8 pt-12">
          <View className="items-center">
            <Image
              source={profileImage}
              style={{ width: 120, height: 120, borderRadius: 60 }}
              resizeMode="cover"
            />

            <Text className="mt-4 text-3xl font-black text-white">Alex</Text>
            <Text className="mt-1 text-base text-[#A9B4C7]">@alexrosalita</Text>

            <View className="mt-5 w-full rounded-2xl border border-[#1D1F24] bg-[#111317] p-4">
              <Text className="text-base text-[#E6EBF4] leading-7">
                ako palautog permi gahi pas cabilya
              </Text>
            </View>

            <View className="mt-5 flex-row gap-3">
              <Pressable className="rounded-xl bg-[#F4C95D] px-5 py-3">
                <Text className="text-base font-bold text-[#111111]">Edit Profile</Text>
              </Pressable>
              <Pressable className="rounded-xl bg-[#7C9CFF] px-5 py-3">
                <Text className="text-base font-bold text-white">Message</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View className="px-5 pb-5 pt-6">
          <View className="mb-4 flex-row justify-between rounded-2xl border border-[#1B1F25] bg-[#111317] p-4">
            <View>
              <Text className="text-xs uppercase tracking-[0.18em] text-[#8A93A6]">Followers</Text>
              <Text className="mt-2 text-2xl font-bold text-white">24.8K</Text>
            </View>
            <View>
              <Text className="text-xs uppercase tracking-[0.18em] text-[#8A93A6]">Following</Text>
              <Text className="mt-2 text-2xl font-bold text-white">342</Text>
            </View>
            <View>
              <Text className="text-xs uppercase tracking-[0.18em] text-[#8A93A6]">Posts</Text>
              <Text className="mt-2 text-2xl font-bold text-white">198</Text>
            </View>
          </View>

          <View className="rounded-2xl border border-[#1B1F25] bg-[#111317] p-4">
            <Text className="text-lg font-bold text-white">Personal details</Text>
            <View className="mt-3 space-y-2">
              <Text className="text-base text-[#D9E1F0]">📍 Misamis Oriental</Text>
              <Text className="text-base text-[#D9E1F0]">✉️ alexrosalita119@gmail.com</Text>
              <Text className="text-base text-[#D9E1F0]">🎨 Visual storytelling</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
