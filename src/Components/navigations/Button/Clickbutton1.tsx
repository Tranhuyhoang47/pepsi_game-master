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

const ClickButton1: React.FC<CLButton> = props => {
  const {activeStyle,inactiveStyle,disabled,onPress,title,titleStyle,subComponent,backgroundImage} = props;

  return (
      
    <TouchableOpacity onPress={onPress} disabled={disabled}>
          <Text style={titleStyle ? titleStyle : styles.title}>{title}</Text>
          {subComponent}
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    
  activeButton: {
    width: '70%',
    height: windowHeight * 0.08,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: windowHeight * 0.01,
    borderRadius: 5,
  },
  inactiveButton: {
    width: '70%',
    height: windowHeight * 0.08,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: windowHeight * 0.01,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
});

export default ClickButton1;
