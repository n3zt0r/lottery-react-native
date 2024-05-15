import { SafeAreaView, StyleSheet } from "react-native";

import Header from "./components/Header";
import Board from "./components/Board";
import LotteryInfo from "./components/LotteryInfo";

import { BG_COLOR } from "./consts/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LotteryInfo /> */}
      <Header />
      <Board />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: BG_COLOR,
    alignItems: "center",
  },
});
