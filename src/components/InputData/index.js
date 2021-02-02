import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

const InputData = ({
  label,
  placeholder,
  keyboardType,
  isTextArea,
  onChangeText,
  nameState,
  value,
}) => {
  // memberikan perulangan untuk isTextArea
  if (isTextArea) {
    return (
      <>
        <Text style={styles.label}>{label} :</Text>
        <TextInput
          multiline={true}
          numberOfLines={5}
          placeholder={placeholder}
          style={styles.textInputArea}
          keyboardType={keyboardType}
          value={value}
          // memberikan arrow functions dengan mengirimkan text sama dengan onChangeText
          onChangeText={(text) => onChangeText(nameState, text)}
        />
      </>
    );
  }

  return (
    <>
      <Text style={styles.label}>{label} :</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        value={value}
        // memberikan arrow functions dengan mengirimkan text sama dengan onChangeText
        onChangeText={(text) => onChangeText(nameState, text)}
      />
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
