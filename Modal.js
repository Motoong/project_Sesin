import React, { useState } from 'react';
import { View, Modal, Text, Button, StyleSheet, TextInput, Keyboard } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock,faBell,faMapLocation,faLocation,faTag,faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const CustomModal = ({ modalVisible, toggleModal }) => {
  const [inputValuesArray, setInputValuesArray] = useState([]);

  const [inputValues, setInputValues] = useState({ task: "", hour: "", minute: "", alarm: "", place: "", tag: "", importance: ""});

  const handleSave = () => {
    const newInputValuesArray = [...inputValuesArray, inputValues];
    setInputValuesArray(newInputValuesArray);
    setInputValues({ task: "", hour: "", minute: "", alarm: "", place: "", tag: "", importance: ""});
    console.log(newInputValuesArray);
    toggleModal();
  };

  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>

          <View style={styles.cotain1}>
            <TextInput
              placeholder="할일을 입력하세요"
              style={styles.textinput}
              onChangeText={(text) =>
                setInputValues({ ...inputValues, task: text })
              }
              value={inputValues.task}
            />
          </View>

          <View style={styles.cotain1}>
            <FontAwesomeIcon
              icon={faClock}
              size={25}
              style={{ color: "#9A9A9A" }}
              marginRight="50px"
            />
            <Text style={styles.modaltext}>시간</Text>
            <TextInput
              placeholder="00"
              style={styles.textinput2}
              onChangeText={(text) =>
                setInputValues({ ...inputValues, hour: text })
              }
              value={inputValues.hour}
            />
            <TextInput
              placeholder="00"
              style={styles.textinput2}
              onChangeText={(text) =>
                setInputValues({ ...inputValues, minute: text })
              }
              value={inputValues.minute}
            />
          </View>

          <View style={styles.cotain1}>
            <FontAwesomeIcon
                  icon={faBell}
                  size={25}
                  style={{ color:"#9A9A9A" }}
                  marginRight="50px"
                />
            <Text style={styles.modaltext}>알람</Text>
            <TextInput 
              placeholder="00"
              style={styles.textinput2}
              onChangeText={(text) =>
                setInputValues({ ...inputValues, alarm: text })
              }
              value={inputValues.alarm}
            />
            <Text style={styles.modaltext}>분전</Text>
          </View>

          <View style={styles.cotain1}>
            <FontAwesomeIcon
                  icon={faClock}
                  size={25}
                  style={{ color:"#9A9A9A" }}
                  marginRight="50px"
                />
            <Text style={styles.modaltext}>장소</Text>
            <TextInput 
              placeholder="장소를 검색하세요"
              style={styles.textinput2}
              onChangeText={(text) =>
                setInputValues({ ...inputValues, place: text })
              }
              value={inputValues.place}
            />
          </View>
          <View style={styles.cotain1}>
            <FontAwesomeIcon
                  icon={faTag}
                  size={25}
                  style={{ color:"#9A9A9A" }}
                  marginRight="50px"
                />
            <Text style={styles.modaltext}>태그</Text>
            <TextInput 
              placeholder="00"
              style={styles.textinput2}
              onChangeText={(text) =>
                setInputValues({ ...inputValues, tag: text })
              }
              value={inputValues.tag}
            />
          </View>
          <View style={styles.cotain1}>
            <FontAwesomeIcon
                    icon={faExclamationCircle}
                    size={25}
                    style={{ color:"#9A9A9A" }}
                    marginRight="50px"
                  />
            <Text style={styles.modaltext}>중요</Text>
            <TextInput 
              placeholder="00"
              style={styles.textinput2}
              onChangeText={(text) =>
                setInputValues({ ...inputValues, importance: text })
              }
              value={inputValues.importance}
            />
          </View>

          <View style={styles.cotain1}>
            <Button title="저장" onPress={handleSave} />
            <Button title="취소" onPress={toggleModal} />
          </View>

        </View>
      </View>
    </Modal>
  );
};




const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명한 회색 배경
  },
  cotain1:{
    flexDirection: 'row',
    alignItems: 'center'    
  },
  modaltext:{
    fontSize:20,
    marginRight:10,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginLeft: 40, // 좌우 여백
    marginRight: 40,
    marginTop: 50, // 상하 여백
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    flex:1,
    fontSize: 15,
    fontWeight: 'bold',
    height:40,
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  textinput2: {
    marginRight:10,
    flex:1,
    fontSize: 15,
    fontWeight: 'bold',
    height: 40,
    width: 70,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  }
});

export default CustomModal;