import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';
import HorizontalImageSwipeButton from '../navigations/Button/swipe_button';
import {Head_icon, Game_background} from '../../assets/images';
import Header from './head';
import LogoutPopup from '../navigations/popups/exit_popup';
import {
  decrementExchange,
  decrementFree,
} from '../../redux/slices/authorized';
import {useSelector, useDispatch} from 'react-redux';
import {getReward} from '../../redux/action/authorized.actions';
import {RootState} from '../../redux/store';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const gamePlay: React.FC = (props: any) => {
  const {navigation} = props;
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const playType = useSelector(
    (state: RootState) => state.authorized.current_play_type,
  );
  const playTimesExchange = useSelector(
    (state: RootState) => state.authorized.user.play_time_exchange,
  );
  const playTimesFree = useSelector(
    (state: RootState) => state.authorized.user.play_time_free,
  );


  const dispatch = useDispatch();

  const onFinish = () => {
    if (playType === 'exchange') {
      dispatch(decrementExchange());
      navigation.navigate('Congratulation');
    } else if (playType === 'free') {
      dispatch(decrementFree());
      navigation.navigate('Congratulation');
    } else {
      navigation.navigate('Congratulation');
    }
  };
  
  const onFinish = () => {
    dispatch(getReward());
  };
  

  return (
    <View style={styles.container}>
      <ImageBackground source={Game_background}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            leftButtonAvailable={true}
            onPressLeftButton={() => {
              navigation.goBack();
            }}
            title={'Vuốt lên để chơi'}
            rightButtonAvailable={true}
            onPressRightButton={() => {
              setLogoutModalVisible(!logoutModalVisible);
            }}
          />  
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.informationContainer}>
            <Text style={styles.text}>{'Bạn còn '}</Text>
            {/* <Text style={styles.textHightlight}>
            {playTimesExchange + ' ' + playTimesFree}
          </Text> */}
            <Text style={styles.textHightlight}>
              {playType === 'free' ? playTimesFree : playTimesExchange}
            </Text>
            <Text style={styles.text}>{' lượt chơi '}</Text>
            <Text style={styles.text}>
              {playType === 'free' ? 'miễn phí' : 'quy đổi'}
            </Text>
          </View>
          <View style={styles.gameContainer}>
            <HorizontalImageSwipeButton
              imageSource={Head_icon}
              onFinish={onFinish}
            />
          </View>
        </View>
        <LogoutPopup
          visible={logoutModalVisible}
          onPressConfirm={() => {
            setLogoutModalVisible(!logoutModalVisible);
          }}
          onPressCanel={() => setLogoutModalVisible(!logoutModalVisible)}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 9,
  },
  informationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    textAlign: 'center',
  },
  gameContainer: {
    flex: 9,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 13,
  },
  textHightlight: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default gamePlay;
