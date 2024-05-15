import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BG_LIST } from "../consts/colors";
import { FontAwesome6, AntDesign } from "@expo/vector-icons";

const BuyersList = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(position, {
      toValue: isExpanded ? -540 : 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  }, [isExpanded]);

  return (
    <>
      {isExpanded && (
        <Pressable
          style={styles.curtain}
          onPress={() => setIsExpanded(false)}
        />
      )}
      <Animated.View style={[styles.container, { translateY: position }]}>
        {/********** Up-Down Button **********/}
        <View style={styles.upDownButton}>
          <TouchableOpacity
            onPress={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? (
              <AntDesign name="close" size={24} color="rgb(100 116 139)" />
            ) : (
              <FontAwesome6 name="list-ul" size={24} color="rgb(100 116 139)" />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text>Lista de compradores</Text>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: 600,
    bottom: -540,
  },
  curtain: {
    backgroundColor: "#00000080",
    position: "absolute",
    top: -500,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  upDownButton: {
    zIndex: 4,
    backgroundColor: BG_LIST,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 48,
    alignSelf: "center",
  },
  content: {
    zIndex: 3,
    borderWidth: 1,
    borderColor: "#ddd",
    position: "relative",
    top: -24,
    padding: 20,
    paddingTop: 40,
    width: "100%",
    height: "100%",
    backgroundColor: BG_LIST,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
});

export default BuyersList;
