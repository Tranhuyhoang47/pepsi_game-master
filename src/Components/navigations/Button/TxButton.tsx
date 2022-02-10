import React from 'react';
import {Text, TouchableOpacity, StyleSheet, TextStyle} from 'react-native';

export interface TxButton {
  title: string;
  titleStyle?: TextStyle;
  onPress?: () => void;
}

const TxButton: React.FC<TxButton> = props => {
  const {title, titleStyle, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#426AFA",
    fontStyle: 'italic',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default TxButton;
