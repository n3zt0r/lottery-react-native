import { StyleSheet, Text, View } from "react-native";
import { PRIZE, TXT_BG_COLOR, TXT_COLOR } from "../consts/colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loteria</Text>
      <Text style={[styles.title, { fontSize: 30 }]}>
        GANA <Text style={styles.titlePrize}>$1,000</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: TXT_BG_COLOR,
    padding: 20,
    borderBottomStartRadius: 60,
    borderBottomEndRadius: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: TXT_COLOR,
    textAlign: "center",
    textTransform: "uppercase",
  },
  titlePrize: {
    fontSize: 40,
    color: PRIZE,
  },
});

export default Header;
