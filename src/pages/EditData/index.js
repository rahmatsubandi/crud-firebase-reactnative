import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert, TouchableOpacity} from 'react-native';
import {InputData} from '../../components';

import Firebase from '../../config/Firebase';

export default class EditData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      address: '',
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
          // mengambil data yang tersedia di database dan menyamakan yang sudah di deklar di atas
          name: contactItems.name,
          phone: contactItems.phone,
          address: contactItems.address,
        });
      });
  }

  // membuat method untuk masing-masing InputData dan mengirimkan dua parameter
  onChangeText = (nameState, value) => {
    // lalu dua parameter akan di masukan di setState
    this.setState({
      // dan memasukan nama statenya
      [nameState]: value,
    });
  };

  // membuat method untuk submit data
  onSubmit = () => {
    // memberikan validasi dan alert ketika field kosong
    if (this.state.name && this.state.phone && this.state.address) {
      // console.log('Data Success!');
      // console.log(this.state);

      const contactReference = Firebase.database().ref(
        'Contact/' + this.props.route.params.id,
      );
      const contact = {
        name: this.state.name,
        phone: this.state.phone,
        address: this.state.address,
      };

      // memangil contactReference
      contactReference
        .update(contact)
        .then((data) => {
          Alert.alert(
            'Success',
            'Yey! Data Contact successfully edit in Firebase database!', // memberikan alert ketika berhasil simpan data
            this.props.navigation.replace('Home'), // Jika data sudah tersimpan maka akan meredirect ke halaman home
          );
        })
        .catch((error) => {
          console.log('Error: ', error);
        });
    } else {
      Alert.alert('Error', 'Please completed field!');
    }
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Name"
          placeholder="Input your name.."
          onChangeText={this.onChangeText}
          value={this.state.name}
          nameState="name"
        />

        <InputData
          label="Phone"
          placeholder="Input your number phone.."
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.phone}
          nameState="phone"
        />

        <InputData
          label="Address"
          placeholder="Input your address.."
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.address}
          nameState="address"
        />

        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.btnText}>Save Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: '#008744',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
