import React from 'react';
import { Text, StyleSheet } from 'react-native';


// To handle one plus issue, we are adding two spaces at the end of text. This will cause center alignment issue
// so in such places use Text from react-native
const CustomText: React.FC = (props: any)=> {
  return (
    <Text {...props} style={[styles.style, props.style]}>
      {props.children}
      {`  `}
    </Text>
  );
};

const styles = StyleSheet.create({
  style: {
    color: 'black',
  }
});

export default CustomText;