import React from 'react';
import {View, StyleSheet, Text, Modal, Dimensions, Image} from 'react-native';
import Clickbutton from '../Button/clickbutton';
import ImageButton from './image_button';
import {X_icon, Cry_icon} from '../../../assets/images/index';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface OneButtonPopupProps { 
  onPress?: () => void;
  onClose?: () => void;
  visible: boolean;
}

const EndOfPlay: React.FC<OneButtonPopupProps> = props => {
  const {onPress, onClose, visible} = props;
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <View style={styles.textContainer}>
            <ImageButton
              onPress={onClose}
              imageSource={X_icon}
              buttonContainerStyle={styles.closeButon}
            />
            <Text style={styles.textTitle}>{'BẠN ĐÃ HẾT LƯỢT!'}</Text>
            <Text style={styles.textContent}>
              {
                'Hãy scan thêm mã trên bill mua nước hoặc combo Pepsi rạp để nhận thêm lượt chơi'
              }
            </Text>
            <Image source={Cry_icon} style={styles.cryfaceImage} />
          </View>
          <View style={styles.buttonsContainer}>
            <Clickbutton
              title="Scan ngay"
              titleStyle={styles.textButton}
              activeStyle={styles.activeButton}
              inactiveStyle={styles.inactiveButton}
              onPress={onPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '70%',
    height: '45%',
    backgroundColor: '#0682c9',
    borderColor: '#debc14',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: windowHeight * 0.01,
    alignItems: 'center',
  },
  textContent: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: windowHeight * 0.02,
    textAlign: 'center',
    marginHorizontal: windowWidth * 0.05,
  },
  textTitle: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginTop: windowHeight * 0.02,
  },
  closeButon: {
    alignSelf: 'flex-end',
  },
  activeButton: {
    backgroundColor: 'red',
    width: windowWidth * 0.5,
    height: windowWidth * 0.1,
    borderWidth: 2,
    borderColor: 'yellow',
  },
  cryfaceImage: {
    marginTop: windowHeight * 0.03,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  inactiveButton: {
    width: windowWidth * 0.5,
    backgroundColor: 'grey',
    height: windowWidth * 0.1,
    borderWidth: 2,
    borderColor: 'yellow',
  },
  subText: {
    fontSize: 11,
    color: 'white',
  },
  subTextHighlight: {
    fontSize: 13,
    color: 'yellow',
    fontWeight: 'bold',
  },
  subTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default EndOfPlay;