import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={style.container}>
            <Text style={style.title}>StyleSheet API</Text>
        </View>
    )
}


const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: "green", padding: 30 },
    title: { color: "white", lineHeight: 30 }
}) // we can export the style and use it in another component
