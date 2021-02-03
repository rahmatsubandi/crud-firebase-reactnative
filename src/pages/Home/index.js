import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import Firebase from '../../config/Firebase';
import CardData from '../../components/CardData';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // contacts adalah data keseluruhan yang ada di database
      contacts: {},
      // sedangkan contactKey hanya key pada datanya atau id
      contactKey: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  // membuat method untuk mengambil data di database
  getData = () => {
    // Menjalankan Firebase
    Firebase.database()
      .ref('Contact')
      .once('value', (querySnapShot) => {
        // mengecek apakah querySnapShot ada atau tidak, jika tidak ada akan diberikan array saja.
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contactItems = {...data};

        this.setState({
          contacts: contactItems,
          contactKey: Object.keys(contactItems),
        });
      });
  };

  // Membuat method baru untuk remove/hapus data dan mengoper parameter id
  removeData = (id) => {
    Alert.alert(
      'Info',
      'Are you sure you want to delete data? Deleted data cannot be recovered.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            Firebase.database()
              .ref('Contact/' + id)
              .remove();

            this.getData();
            Alert.alert('Delete', 'Data deleted successfully!');
          },
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    // console.log('Contact: ', this.state.contacts);
    // console.log('Contact Key: ', this.state.contactKey);
    const {contactKey, contacts} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>List Data Contact</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.listData}>
          {/* 
          menampilkan contactKey, lalu apakah besarnya lebih dari 0,
          jika lebih dari 0 maka menampilkan data contact
          jika kurang dari 0 maka akan menampilkan suatu text.
          */}
          {contactKey.length > 0 ? (
            // jika data contact ada maka contactKey akan melakukan mapping pada keynya
            contactKey.map((key) => (
              // Lalu menampilkan data kontak
              <CardData
                key={key}
                contactItems={contacts[key]}
                id={key}
                {...this.props} // berfungsi untuk mengoper semua props ke dalam CardData
                removeData={this.removeData}
              />
            ))
          ) : (
            <Text>
              Oops .. Looks like the contact data doesn't exist yet ..
            </Text>
          )}
        </View>

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
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    borderWidth: 1,
    marginTop: 10,
  },
  listData: {
    paddingHorizontal: 30,
    marginTop: 20,
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
    backgroundColor: '#0057e7',
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
