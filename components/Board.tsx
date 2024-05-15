import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BG_BOARD, TXT_BG_COLOR, TXT_COLOR } from "../consts/colors";
import { createBoard } from "../helpers/helpers";
import { useState } from "react";
import ModalAlert from "./ModalAlert";
import BuyersList from "./BuyersList";

const numbers = createBoard(100);
const sqrt = Math.sqrt(numbers.length + 1);
const buttonWidth = sqrt < 7 ? 100 / sqrt : 100 / 7;
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
    <>
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
        <BuyersList />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_BOARD,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingTop: 50,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  button: {
    width: `${buttonWidth}%`,
    height: buttonHeight,
    backgroundColor: TXT_BG_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderColor: BG_BOARD,
    borderWidth: 2,
    borderRadius: 16,
  },
  buttonText: {
    color: TXT_COLOR,
    padding: 5,
    fontSize: fontSize,
  },
});

export default Board;
