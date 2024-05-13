import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { PRIZE, TXT_BG_COLOR } from "../consts/colors";

const LotteryInfo = () => {
  const [prize, setPrize] = useState<string>("");
  const [ticketsNumber, setTicketsNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Información de la Loteria</Text>
        <View style={styles.infoConetnt}>
          <View>
            <Text style={styles.infoText}>Premio:</Text>
            <TextInput
              style={styles.infoInput}
              placeholder="Ej: $1000 pesos, Un Iphone, etc."
              value={prize}
              onChangeText={(text) => setPrize(text)}
            />
          </View>
          <View>
            <Text style={styles.infoText}>Numero de Boletos:</Text>
            <TextInput
              style={styles.infoInput}
              placeholder="Ej: 100, 200, etc."
              keyboardType="numeric"
              value={ticketsNumber}
              onChangeText={(text) => setTicketsNumber(text)}
            />
          </View>
          <View>
            <Text style={styles.infoText}>Fecha de la Rifa:</Text>
            <TextInput
              style={styles.infoInput}
              placeholder="Ej: 10 de mayo"
              value={date}
              onChangeText={(text) => setDate(text)}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Crear Rifa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TXT_BG_COLOR,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
  },
  content: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    textTransform: "uppercase",
    color: TXT_BG_COLOR,
  },

  infoConetnt: {
    marginTop: 18,
    gap: 30,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoInput: {
    marginTop: 5,
    backgroundColor: "#FAF7FA",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderColor: "#DDD",
    borderWidth: 1,
  },
  button: {
    width: "100%",
    backgroundColor: TXT_BG_COLOR,
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: PRIZE,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default LotteryInfo;
