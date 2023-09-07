import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListItem = ({ item, index }) => {

  return (
    <View>
      <Text style={styles.list}>{index + 1}. {item.text} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    fontSize: 20,
    marginVertical: 2,
    marginRight: 220,
  },
});

export default ListItem;
