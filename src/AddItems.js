import { View, StyleSheet, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";

const AddItems = ({ text, setText, addItems }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar producto"
          style={styles.input}
          value={text}
          onChangeText={(value) => setText(value)}
        />
      </View>
      <Pressable style={styles.button} onPress={() => addItems()}>
        <Ionicons name="add-circle-outline" size={40} color="green" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create ({
    input: {
      padding: 8,
      fontSize: 18,
      width: 280,
    },
    inputContainer: {
      marginTop: 20,
      borderColor: "black",
      borderWidth: 1,
    },
    buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
    },
    button: {
      marginTop: 15,
      marginLeft: 15,
    },
});

export default AddItems;