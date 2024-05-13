import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BG_COLOR, TXT_BG_COLOR, TXT_COLOR } from "../consts/colors";
import { createBoard } from "../helpers/helpers";
import { useState } from "react";
import ModalAlert from "./ModalAlert";

const numbers = createBoard(200);
const sqrt = Math.sqrt(numbers.length + 1);
const buttonWidth = sqrt < 10 ? 100 / sqrt : 10;
const buttonHeight = buttonWidth * 4;
const fontSize = 6 + buttonWidth;

const createMoneyFaces = (num: number) => {
  let moneyFaces: string[] = [];
  for (let i = 0; i < num; i++) {
    moneyFaces.push("🤑");
  }
  return moneyFaces;
};

const Board = () => {
  const [spots, setSpots] = useState(createMoneyFaces(100));

  const changeSpotContent = (index: number) => {
    const updatedSpots = [...spots];
    updatedSpots[index] = numbers[index].toString();
    setSpots(updatedSpots);
  };

  return (
    <View style={styles.container}>
      <ModalAlert />
      <ScrollView contentContainerStyle={styles.content}>
        {spots.map((spotContent, index) => (
          <View key={index} style={styles.button}>
            <TouchableOpacity onPress={() => changeSpotContent(index)}>
              <Text style={styles.buttonText}>{spotContent}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    width: `${buttonWidth}%`,
    height: buttonHeight,
    backgroundColor: TXT_BG_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderColor: BG_COLOR,
    borderWidth: 1,
  },
  buttonText: {
    color: TXT_COLOR,
    padding: 5,
    fontSize: fontSize,
  },
});

export default Board;
