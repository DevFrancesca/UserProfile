import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Button = ({onPress, children}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(243, 89, 72)',
    width: '100%',
    height: hp('5.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
})

export default Button
