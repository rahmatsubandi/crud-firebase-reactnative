import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Firebase from '../../config/Firebase';

export default class DetailData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {},
    };
  }

  componentDidMount() {
    // Menjalankan Firebase
    Firebase.database()
      .ref('Contact/' + this.props.route.params.id)
      .once('value', (querySnapShot) => {
        // mengecek apakah querySnapShot ada atau tidak, jika tidak ada akan diberikan array saja.
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contactItems = {...data};

        this.setState({
          contact: contactItems,
        });
      });
  }

  render() {
    const {contact} = this.state;
    return (
      <View style={styles.pages}>
        <Text style={styles.title}>Nama: </Text>
        <Text style={styles.text}>{contact.name}</Text>

        <Text style={styles.title}>Phone: </Text>
        <Text style={styles.text}>{contact.phone}</Text>

        <Text style={styles.title}>Address: </Text>
        <Text style={styles.text}>{contact.address}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    padding: 20,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
  title: {
    marginBottom: 3,
    fontSize: 14,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
});
