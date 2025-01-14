import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Alert,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputt from '../navigations/Inputt/inputt';
import ClickButton from '../navigations/Button/clickbutton';
import ClickButton1 from '../navigations/Button/Clickbutton1';
import TextButton from '../navigations/Button/TxButton';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button_white, Background,Button_off,} from '../../assets/images/index';
import {useDispatch, useSelector} from 'react-redux';

import {
  requestOtp,
  signUp,
} from '../../redux/action/authentication.actions';
import {RootState} from '../../redux/store';
import { text } from 'stream/consumers';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const phoneERR =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const signInErr = Yup.object({
  phoneNumber: Yup.string()
    .required('Please enter phone number!')
    .min(7, 'Phone number must have at least 9 digits.')
    .max(14, 'Phone number must have at least 12 digits.')
    .matches(phoneERR, 'invalid phone number!'),
  userName: Yup.string()
    .min(2, 'Name must have at least 2 characters')
    .max(100, 'Name must be up to 100 characters')
    .required('Please enter your name!'),
});

const SignUp: React.FC = (props: any) => {
  const {navigation} = props;
  const [Reader, setReader] = useState(false);
  const dispatch = useDispatch();

  const isSignUpSuccessful = useSelector(
    (state: RootState) => state.authentication.isSignUpSuccessful,
  );
  const otpConfirmation = useSelector(
    (state: RootState) => state.authentication.otpConfirmation,
  );

  const [inputPhoneNumber, setInputPhoneNumber] = useState('');
  const [fixedPhoneNumber, setFixedPhoneNumber] = useState('');

  useEffect(() => {
    let strings = inputPhoneNumber.split('');
    strings[0] = '+84';
    let result = strings.join('');
    setFixedPhoneNumber(result);
  }, [inputPhoneNumber]);

  useEffect(() => {
    if (isSignUpSuccessful === true) {
      handleSignUpSuccess();
    }
  }, [isSignUpSuccessful]);

  useEffect(() => {
    handleRequestOtpComplete();
  }, [otpConfirmation]);

  // const handleSignUp = async (phoneNumber: string, userName: string) => {
  //   if (phoneNumber.charAt(0) === '0') {
  //     dispatch(signUp({name: userName, phone_number: phoneNumber}));
  //   } else {
  //     Alert.alert(
  //       'Số điện thoại không hợp lệ. Số điện thoại tại Việt Nam bắt đầu bằng số 0.',
  //     );
  //   }
  // };

  const handleSignUpSuccess = async () => {
    dispatch(requestOtp(fixedPhoneNumber));
//otp:123456 : +84944011619
  };

  const handleRequestOtpComplete = () => {
    if (otpConfirmation != null) {
      navigation.navigate('VerifyOtp', {phone_number: fixedPhoneNumber});
    }
  };
  const AllTrue = (Readd: boolean, formikValid: boolean) => {
    if (Readd === true || formikValid === true) {
      return true;
    }
    return false;
  };

  const [phoneNumber, addphoneNumber] = useState('+84');
  const GetOTP = () => {
    if(phoneNumber && phoneNumber.length > 8){
    navigation.navigate('VerifyOtp', {phoneNumber});
    }
    else
    Alert.alert("Please enter 10 digit phone number");
}

  return (
    <View style={styles.fullScreenContainer}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.fullScreenContainer}>
        <View style={styles.greetingContainer}>
          <Text style={styles.textTitle}>{'Lovely House'}</Text>
        </View>
        <View style={styles.functionContainer}>
          <Text style={styles.textFunction}>{'Đăng ký'}</Text>
          <Formik
            initialValues={{phoneNumber: '', userName: ''}}
            validationSchema={signInErr}
            onSubmit={values => {
              // Alert.alert(
              //   `You signed up with information: ${values.phoneNumber} and ${values.userName}`,
              // );
              navigation.navigate('');
            }}>
            {formik => (
              <KeyboardAwareScrollView>
                <TextInputt
                  errorLabel={formik.errors.phoneNumber}
                  placeholder="Nhập số điện thoại"
                  numKeyboard={true}
                  value={phoneNumber}
                  onChangeTx={(text) => addphoneNumber(text)}
                  inputProps={{
                    value: formik.values.phoneNumber,
                    onChangeText: (value: string) => {
                      formik.setFieldValue('phoneNumber', value, true);
                      setInputPhoneNumber(value);
                    },
                  }}
                />
                <TextInputt
                  errorLabel={formik.errors.userName}
                  placeholder="Nhập họ tên"
                  inputProps={{
                    value: formik.values.userName,
                    onChangeText: (value: string) => {
                      formik.setFieldValue('userName', value, true);
                    },
                  }}
                  isInputInValid={
                    formik.errors.userName === undefined ? false : true
                  }
                />
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={Reader}
                    onValueChange={() => setReader(!Reader)}
                    boxType={'square'}
                    onFillColor={'white'}
                    tintColor="white"
                  />
                  <Text style={styles.checkboxText}>
                    {'Tôi đã đọc và đồng ý với'}
                  </Text>
                  <TextButton
                    title=" thể lệ chương trình "
                    onPress={() => navigation.navigate('Commit')}
                  />
                  <Text style={styles.checkboxText}>{'Pepsi Tết'}</Text>
                </View>
                
                <ClickButton
                  onPress={GetOTP}
                  title="Lấy mã OTP"
                  activeStyle={styles.buttonSignUp}
                  disabled={AllTrue(!Reader, !formik.isValid)}
                />
                <Text style={styles.textOr}>{'Hoặc'}</Text>
                <View style={styles.btnsgup}>
                  <ImageBackground source={Button_white}
                    style={styles.btnsgup}
                  >
                <ClickButton1
                  title="Đăng nhập"
                  titleStyle={styles.titleSignUp}
                  activeStyle={styles.buttonSignUp}
                  onPress={() => navigation.navigate('Sign_in')}
                />
                </ImageBackground>
                </View>
              </KeyboardAwareScrollView>
            )}
          </Formik>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    // backgroundColor: '#035efc',
    borderRadius: 20,
    flexDirection: 'column',
  },
  greetingContainer: {
    flex: 25,
    // backgroundColor: '#035efc',
    paddingTop: windowHeight * 0.1,
    alignItems: 'center',
  },
  functionContainer: {
    flex: 75,
    // backgroundColor: '#035efc',
    paddingHorizontal: windowWidth * 0.05,
  },
  textWelcome: {
    top:16,
    fontSize: 25,
    fontWeight: '400',
    color: '#3F8EF0',
  },
  textTitle: {
    fontSize: 40,
    top:50,
    fontWeight: '400',
    color: '#000000',
  },
  textFunction: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    alignSelf: 'center',
  },
  textOr: {
    color: '#3F8EF0',
    alignSelf: 'center',
  },
  buttonSignUp: {
    width: '70%',
    height: windowHeight * 0.09,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: windowHeight * 0.01,
  },
  titleSignUp: {
    color: '#3486eb',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    top:8,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: 12,
    color: 'white',
  },
  btnsgup2: {
    flex:1,
    alignSelf: 'center',
    height: 73,
    width:305,
  },
  btnsgup: {
    flex:1,
    alignSelf: 'center',
    height: 60,
    width:265,
  }
});

export default SignUp;
