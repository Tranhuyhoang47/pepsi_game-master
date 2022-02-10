import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
  ImageBackground,
} from 'react-native';
import { Button_red, Button_off } from '../../../assets/images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface CLButton {
  activeStyle?: StyleProp<ViewStyle>;
  inactiveStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: () => void;
  title: string;
  titleStyle?: TextStyle;
  subComponent?: any;
  backgroundImage?: any;
}

const ClickButton: React.FC<CLButton> = props => {
  const {activeStyle,inactiveStyle,disabled,onPress,title,titleStyle,subComponent,backgroundImage,} = props;

  return (
    <View style={styles.container}>
      <ImageBackground source={disabled ? Button_off : backgroundImage ? backgroundImage : Button_red}
         style={
          disabled
            ? [styles.inactiveButton, inactiveStyle]
            : [styles.activeButton, activeStyle]}
      >
    <TouchableOpacity onPress={onPress} disabled={disabled}>
          <Text style={titleStyle ? titleStyle : styles.title}>{title}</Text>
          {subComponent}
        </TouchableOpacity>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  activeButton: {
    width: '100%',
    height: windowHeight * 0.09,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: windowHeight * 0.01,
    borderRadius: 5,
    top:-6,
  },
  inactiveButton: {
    width: '70%',
    height: windowHeight * 0.09,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: windowHeight * 0.01,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 25,
    top:-4,
    alignSelf: 'center',
  },
});

export default ClickButton;
