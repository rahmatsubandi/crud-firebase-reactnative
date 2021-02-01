import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Add extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <Text> Add Contact </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
});
