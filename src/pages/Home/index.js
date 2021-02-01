import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Text> Home Page </Text>
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.btnAdd}
            // Ketika mengklik button maka akan pindah ke halaman Tambah
            onPress={() => this.props.navigation.navigate('Add')}>
            <FontAwesomeIcon icon={faPlus} size={20} style={{color: 'white'}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnAdd: {
    padding: 20,
    backgroundColor: '#008744', // Green
    // backgroundColor: '#0057e7', // Blue
    // backgroundColor: '#d62d20', // Red
    // backgroundColor: '#ffa700', // Yellow
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
