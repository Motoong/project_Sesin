import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
function Menu_3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>3번 메뉴</Text>
      <Text style={styles.text}>Menu_3</Text>
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

export default Menu_3;
