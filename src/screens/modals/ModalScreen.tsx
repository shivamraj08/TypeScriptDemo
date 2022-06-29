import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const {height} = Dimensions.get('screen');

export default function ModalScreen(props: any) {
  const {openModal, setOpenModal, setSelectedIdentity} = props;

  const handleAthlete = () => {
    setSelectedIdentity('Athelete');
    setOpenModal(!openModal);
  };

  const handleFan = () => {
    setSelectedIdentity('Fan');
    setOpenModal(!openModal);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setOpenModal(!openModal)}
        activeOpacity={0.5}>
        <Image
          source={require('../../assests/images/ic_cancel.png')}
          style={styles.backArrImg}
        />
      </TouchableOpacity>
      <Text style={styles.body}>{'Select your Identity'}</Text>
      <TouchableOpacity onPress={handleFan}>
        <Image
          style={styles.modalimage}
          source={require('../../assests/images/fan.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAthlete}>
        <Image
          style={styles.modalimage}
          source={require('../../assests/images/athl.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'flex-end',
    marginTop:'auto',
    borderTopWidth:2,
    borderColor:'#44C2E3',
    backgroundColor:'black',
    alignItems: 'center',
  },
  body: {
    fontSize: 28,
    fontWeight: '900',
    marginTop: 70,
    color: 'white',
    fontStyle: 'italic',
  },
  modalimage: {
    height: 104,
    width: 357,
    marginTop: 20,
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#44C2E3',
  },
  backArrImg: {
    height: 28,
    width: 28,
    top: 65,
    left: 155,
  },
});
