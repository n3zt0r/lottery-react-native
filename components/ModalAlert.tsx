import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ModalAlert = () => {
  return (
    <Modal transparent={true} visible={false}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.questionText}>
            ¿Estas seguro de escoger este boleto?
          </Text>
          <View style={styles.pressablesContainer}>
            <TouchableOpacity>
              <View style={[styles.pressable, { backgroundColor: "#166534" }]}>
                <Text style={styles.pressableText}>Si</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.pressable, { backgroundColor: "#991b1b" }]}>
                <Text style={styles.pressableText}>No</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03071290",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#fffbeb",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  pressablesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pressable: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  pressableText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ModalAlert;
