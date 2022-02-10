import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {RootState} from '../../redux/synthetic';
import {useSelector, useDispatch} from 'react-redux';
import ClickButton from '../navigations/Button/clickbutton';
import {
  Button_white,
  Head_icon,
  Home_background,
  Button_play,
} from '../../assets/images';
import LogoutPopup from '../navigations/popups/exit_popup';
import ChoosePlayTime from '../navigations/popups/two_button_popup';
import Header from './head';
import {setPlay} from '../../redux/play';
import EndOfPlay from '../navigations/popups/one_button_popup';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home_Screens: React.FC = (props: any) => {
  const {navigation} = props;
  const playTimesExchange = useSelector(
    (state: RootState) => state.timeplay.timeplay_exchange,
  );
  const playTimesFree = useSelector(
    (state: RootState) => state.timeplay.timeplay_free,
  );
  const dispatch = useDispatch();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [ptsModalVisible, setPtsModalVisible] = useState(false);
  const [optModalVisible, setOptModalVisible] = useState(false);

  const renderPlayTimesLeft = (times: number) => {
    return (
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>{'Bạn có tổng cộng '}</Text>
        <Text style={styles.subTextHighlight}>{times}</Text>
        <Text style={styles.subText}>{' lượt chơi'}</Text>
      </View>
    );
  };

  const navigateToGame = (playType: string) => {
    dispatch(setPlay(playType));
    navigation.navigate('');
    setPtsModalVisible(!ptsModalVisible);
  };

  const navigateToScanCode = () => {
    navigation.navigate('');
    setOptModalVisible(!optModalVisible);
  };

  const selectModal = () => {
    if (playTimesExchange > 0 || playTimesFree > 0) {
      setPtsModalVisible(!ptsModalVisible);
    } else {
      setOptModalVisible(!optModalVisible);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Home_background}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            leftButtonAvailable={false}
            rightButtonAvailable={true}
            onPressRightButton={() => {
              setLogoutModalVisible(!logoutModalVisible);
            }}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.topContainer}>
            <Image style={styles.headImage} source={Head_icon} />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.textInstruction}>{'Hướng dẫn'}</Text>
            <ClickButton
              title={'Chơi ngay'}
              activeStyle={styles.buttonRed}
              subComponent={renderPlayTimesLeft(
                playTimesExchange + playTimesFree,
              )}
              onPress={selectModal}
              backgroundImage={Button_play}
            />
            <ClickButton
              title={'Quét mã'}
              activeStyle={styles.buttonWhite}
              titleStyle={styles.textButton}
              onPress={() => navigation.navigate('')}
              backgroundImage={Button_white}
            />
            <ClickButton
              title={'Bộ sưu tập'}
              activeStyle={styles.buttonWhite}
              titleStyle={styles.textButton}
              backgroundImage={Button_white}
            />
            <ClickButton
              title={'Chi tiết quà tặng'}
              activeStyle={styles.buttonWhite}
              titleStyle={styles.textButton}
              backgroundImage={Button_white}
            />
          </View>
          <LogoutPopup
            visible={logoutModalVisible}
            onPressConfirm={() => {
              setLogoutModalVisible(!logoutModalVisible);
              navigation.popToTop();
            }}
            onPressCanel={() => setLogoutModalVisible(!logoutModalVisible)}
          />
          <ChoosePlayTime
            visible={ptsModalVisible}
            onClose={() => setPtsModalVisible(!ptsModalVisible)}
            data={{playTimesFree, playTimesExchange}}
            onPressFirst={() => navigateToGame('')}
            onPressSecond={() => navigateToGame('')}
          />
          <EndOfPlay
            visible={optModalVisible}
            onClose={() => setOptModalVisible(!optModalVisible)}
            onPress={navigateToScanCode}
          />
        </View>
      </ImageBackground>
    </View>
  );
};


export default Home_Screens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1e76e3',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 9,
    justifyContent: 'center',
  },
  topContainer: {
    flex: 4,
  },
  bottomContainer: {
    flex: 6,
  },
  textInstruction: {
    color: '#e3c91e',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  logoutButton: {
    alignSelf: 'flex-end',
    marginTop: windowHeight * 0.05,
    marginRight: windowWidth * 0.02,
    width: '6%',
  },
  textLogout: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-end',
    marginRight: windowWidth * 0.02,
    marginTop: windowHeight * 0.01,
  },
  buttonRed: {
    height: windowHeight * 0.1,
    width: '70%',
    borderRadius: 5,
    // borderColor: 'white',
    // borderWidth: 1,
  },
  buttonWhite: {
    marginTop: -windowHeight * 0.01,
    height: windowHeight * 0.08,
    width: '70%',
    borderRadius: 5,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  headImage: {
    alignSelf: 'center',
    marginTop: windowHeight * 0.035,
  },
  textButton: {
    fontSize: 18,
    color: '#0063A7',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subText: {
    fontSize: 12,
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
