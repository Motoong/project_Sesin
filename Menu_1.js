import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Menu_1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>1번 메뉴</Text>
      <Text style={styles.text}>Menu_1</Text>
      <Text style={styles.text}>😥</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize:25,
    fontWeight:'bold'
  }
});

export default Menu_1;
