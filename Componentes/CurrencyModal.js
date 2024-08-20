import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CurrencyModal = ({ modalVisible, setModalVisible, handleCurrencyChange }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.buttonclose} onPress={() => setModalVisible(false)}>
                <AntDesign name="close" size={24} color="white" />
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button} onPress={() => handleCurrencyChange('eur')}>
                  <Text style={styles.text}>EUR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleCurrencyChange('usd')}>
                  <Text style={styles.text}>USD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleCurrencyChange('brl')}>
                  <Text style={styles.text}>BRL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
  },
  button: {
    margin: 10,
    backgroundColor: '#ffcb31',
    padding: 10,
    borderRadius: 10,
  },
  buttonclose: {
    margin: 10,
    backgroundColor: 'rgba(178, 12, 0, 1)',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  text: {
    borderRadius: 20,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default CurrencyModal;
