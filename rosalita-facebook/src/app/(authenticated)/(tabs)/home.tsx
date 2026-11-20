import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const localImages = {
  one: require("../../../../assets/images/4c7a7755-0a2a-41b0-a384-48453748ab9b.jpg"),
  two: require("../../../../assets/images/61c8c8da-c49d-4d1a-ae06-b94e3bacca3b.jpg"),
  three: require("../../../../assets/images/9091c25e-0e87-42a6-9ba1-e012d66ebbcc.jpg"),
  four: require("../../../../assets/images/bb6c3c71-c273-4ae9-b169-8d50c80ee606.jpg"),
  avatar: require("../../../../assets/images/6f09fdde-9bf4-48d4-a2cf-ddba576bdc0a.jpg"),
};

const posts = [
  {
    id: "1",
    user: "Alex",
    handle: "@alex",
    avatar: localImages.avatar,
    time: "2h ago",
    text: "Sunset stroll with the team. Nothing beats a calm evening after a productive day.",
    image: localImages.one,
  },
  {
    id: "2",
    user: "Alex",
    handle: "@alex",
    avatar: localImages.avatar,
    time: "5h ago",
    text: "Weekend coffee run. Trying to keep things simple and intentional.",
    image: localImages.two,
  },
  {
    id: "3",
    user: "Alex",
    handle: "@alex",
    avatar: localImages.avatar,
    time: "1d ago",
    text: "New creative work is finally taking shape. Looking forward to sharing more soon.",
    image: localImages.three,
  },
  {
    id: "4",
    user: "Alex",
    handle: "@alex",
    avatar: localImages.avatar,
    time: "2d ago",
    text: "A little travel, a lot of joy, and a camera full of memories.",
    image: localImages.four,
  },
];

export default function HomeTab() {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View className="flex-1 bg-[#050505]">
      <View className="border-b border-white/10 bg-[#0D0F13] px-5 pb-3 pt-12">
        <Text className="text-3xl font-black text-white">Rosalita</Text>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 32 }}>
        {posts.map((post) => {
          const isLiked = !!likedPosts[post.id];
          const likeCount = 1200 + (isLiked ? 1 : 0);

          return (
            <View key={post.id} className="mb-4 border-b border-white/10 bg-[#0E1015] px-4 pb-4 pt-3">
              <View className="mb-3 flex-row items-center">
                <Image
                  source={post.avatar}
                  style={{ width: 42, height: 42, borderRadius: 21 }}
                  resizeMode="cover"
                />
                <View className="ml-3 flex-1">
                  <Text className="text-sm font-bold text-white">{post.user}</Text>
                  <Text className="text-xs text-[#8A93A6]">{post.handle} • {post.time}</Text>
                </View>
              </View>

              <Text className="mb-3 text-[15px] leading-6 text-[#EDF2F7]">{post.text}</Text>

              <Image
                source={post.image}
                style={{ width: "100%", height: 240, borderRadius: 18 }}
                resizeMode="cover"
              />

              <View className="mt-3 flex-row items-center justify-between">
                <Pressable onPress={() => toggleLike(post.id)} className="flex-row items-center">
                  <Text className={`text-sm ${isLiked ? "text-[#FF5C8A]" : "text-[#8A93A6]"}`}>
                    {isLiked ? "❤" : "♡"} {likeCount.toLocaleString()}
                  </Text>
                </Pressable>
                <Text className="text-sm text-[#8A93A6]">💬 96</Text>
                <Text className="text-sm text-[#8A93A6]">↻ Share</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
