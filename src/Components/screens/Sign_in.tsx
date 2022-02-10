import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert, ImageBackground,StatusBar,Dimensions} from 'react-native';
import {Button_white, Background, Button_off} from '../../assets/images';
import ClickButton from '../navigations/Button/clickbutton.signin';
import ClickButton1 from '../navigations/Button/Clickbutton1';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignIn: React.FC = (props: any) => {
  const [text, onChangeText] = React.useState('');
  const {navigation} = props;
  return (
    <ImageBackground
           source={Background}
           resizeMode="cover"
           style={styles.imgbg}
           >
      <View style={styles.container}>
        <Text style={styles.tx1}>Hey, mừng bạn đến với thể lệ chương trình</Text>
        <Text style={styles.tx2}> Pepsi Tet</Text>
      </View>

      <Text style={styles.tx3}>Đăng nhập</Text>
      <Text style={styles.tx4}>Số điện thoại</Text>

      <TextInput
        style={styles.txIp}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập số điện thoại"
      />
      
      <Text style={styles.tx5}>Hoặc</Text>
      <View style={styles.Btn1}>
        <ImageBackground
          source={Button_off}
          style={styles.btnsgup}
        >
        <ClickButton
          title="Lấy mã OTP"
          onPress={() => navigation.navigate('Home_screen')}
        />
        </ImageBackground>
        </View>
      <View style={styles.Btn2}>
        <ImageBackground
          source={Button_white}
          style={styles.Btn2}
        >
        <ClickButton1
          title="Đăng ký"
          titleStyle={styles.titleSignUp}
          onPress={() => navigation.navigate('Sign_up')}
                />
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  imgbg: {
    flex:1
  },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  tx1: {
    position: 'absolute',
    width: 179,
    height: 24,
    left: 110,
    top: 112,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
  },
  tx2: {
    color: '#fff',
    position: 'absolute',
    width: 163,
    height: 48,
    left: 106,
    top: 136,
    fontSize: 36,
    lineHeight: 48,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  tx3: {
    top: 214,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 26,
    textAlign: 'center',
    color: '#fff',
  },
  tx4: {
    position: 'absolute',
    width: 90,
    height: 16,
    left: 17,
    top: 280,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.3,
    color: '#fff',
  },
  tx5: {
    position: 'absolute',
    width: 24,
    height: 14,
    left: 175,
    top: 550,
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 14,
  },
  txIp: {
    position: 'absolute',
    width: 340,
    height: 44,
    left: 17,
    top: 310,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  Btn1: {
    borderRadius: 20,
    position: 'absolute',
    alignSelf: 'center',
    width: 365,
    height: 60,
    top: 480,
  },
  Btn2: {
    borderRadius: 20,
    position: 'absolute',
    alignSelf: 'center',
    width: 265,
    height: 60,
    top: 290,
  },
  
  titleSignUp: {
    color: '#3486eb',
    fontSize: 25,
    top:8,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  btnsgup: {
    flex:1,
    alignSelf: 'center',
    height: 60,
    width:265,
  },
});
