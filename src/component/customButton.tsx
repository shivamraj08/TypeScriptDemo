import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function CustomButton() {
  return (
    <View>
      <TouchableOpacity style={styles.SubmitButtonTouchable}>
        <Text style={styles.SubmitButtonStyle}>{'SUBMIT'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  SubmitButtonStyle: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    color: 'black',
    marginBottom: 30,
    top: 10,
    fontStyle: 'italic',
  },
  SubmitButtonTouchable: {
    backgroundColor: '#44C2E3',
    width: '93%',
    marginLeft: 15,
    borderRadius: 5,
    borderWidth: 1,
  },
});
