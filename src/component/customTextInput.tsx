import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import { normalize, vh } from '../utils/dimensions';
import COLOR from '../utils/color';

interface PROPS {
  right?: any;
  mode?: any;
  label?: string;
  placeholder?: string;
  value?: any;
  securetextentry?: boolean;
  error?: any;
  keyboardType?: any;
  multiline?:boolean;
  onChangeText?:any;
  left?:any;
  ref?:any;
  maxLength?:any;
  autoCapitalize?:any;
}

export default function CustomTextInput(props: PROPS) {
  let {right, error, keyboardType = 'default', securetextentry,placeholder,label, left,ref,maxLength,autoCapitalize} = props;
  return (
    <View>
      <TextInput
        {...props}
        right={null}
        label={label}
        maxLength={maxLength}
        secureTextEntry={securetextentry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        activeOutlineColor={COLOR.WHITE}
        outlineColor={COLOR.WHITE}
        placeholder={placeholder}
        mode='outlined'
        ref={ref}
        left={null}
        theme={{
          colors: {
            primary: COLOR.WHITE,
            text: COLOR.BLUE,
            placeholder: COLOR.WHITE,
          },
        }}
        style={styles.textInputStyle}
      />
      {right != undefined ? right() : null}
      {left != undefined ? left() : null}
      {error && <Text style={styles.errMsg}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: vh(48),
    width: '100%',
    backgroundColor: COLOR.BLACK,
    marginBottom: vh(10),
    fontWeight:'800'
  },
  errMsg: {
    fontSize: 12,
    color: COLOR.RED,
    fontWeight: '400',
  },
});
