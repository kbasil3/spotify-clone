import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Header = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handlePress = (button) => {
    setActiveButton(button);
  };

  const categories = ["All", "Music", "Podcasts", "Audiobooks"];

  return (
    <View style={styles.header}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollContent}
      >
        <Icon name="person-circle" size={30} color="#fff" style={styles.icon} />
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              {
                backgroundColor:
                  activeButton === category ? "#1DB954" : "#535353",
              },
            ]}
            onPress={() => handlePress(category)}
          >
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 120,
    paddingTop: 40,
    backgroundColor: "#000",
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    paddingHorizontal: 15,
    height: 30,
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
