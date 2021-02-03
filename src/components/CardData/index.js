import {
  faEdit,
  faTrash,
  faTrashAlt,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CardData = ({id, contactItems, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailData', {id: id})}>
      <View>
        <Text style={styles.name}>Name: {contactItems.name}</Text>
        <Text style={styles.phone}>Phone: {contactItems.phone}</Text>
      </View>

      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faEdit}
          color={'#ffa700'}
          size={20}
          style={{paddingRight: 30}}
          onPress={() => navigation.navigate('EditData', {id: id})}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          color={'#d62d20'}
          size={20}
          onPress={() => removeData(id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardData;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  phone: {
    fontSize: 12,
    marginTop: 5,
    color: 'gray',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
