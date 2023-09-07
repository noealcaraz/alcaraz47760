import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListItems from "./src/ListItems";
import AddItems from "./src/AddItems";

const initialState = [
  { id: 1, text: "Arroz" },
  { id: 2, text: "Queso" },
  { id: 3, text: "Huevos" },
];

export default function App() {
  const [text, setText] = useState("");

  const [list, setList] = useState(initialState);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const addItems = () => {
    list.push({
      id: Math.random(),
      text: text,
    });

    setList(list);
    setText("");
  };

  const clearList = () => {
    setList([]);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}> Listado de productos: </Text>

      <AddItems text={text} setText={setText} addItems={addItems} />

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <ListItems item={item} index={index}/>}
      />
      <Pressable style={styles.button} onPress={() => clearList()}>
        <Ionicons name="trash" size={40} color="grey" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create ({
  
  contenedor: {
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    marginTop: 80,
    fontSize: 20,
    borderBottomColor: "green",
    borderBottomWidth: 5,
  },

  button: {
    marginTop: 520,
    borderColor: "black",
  }

 

});
