import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faMugHot, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

library.add(faCheckSquare, faMugHot, faHome);

function Menu_4() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>4번 메뉴</Text>
      <Text style={styles.text}>Menu_4</Text>
      <Text style={styles.text}>😥</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize:25,
    fontWeight:'bold'
  }
})

export default Menu_4;
