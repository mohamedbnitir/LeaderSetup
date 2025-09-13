import { Linking, Pressable, Text } from "react-native";

export default function ExternalLink({ href, children, style }) {
  return (
    <Pressable onPress={() => Linking.openURL(href)}>
      <Text style={style}>{children}</Text>
    </Pressable>
  );
}
