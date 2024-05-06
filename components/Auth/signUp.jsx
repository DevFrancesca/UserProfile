import React from 'react'
import { Text, StyleSheet, View, Image} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MainContainer, { MainWrapper } from '../mainContainer'
import { TextInput } from 'react-native-gesture-handler';

const SignUp = () => {
  return (
  <MainContainer>
    <MainWrapper es={{ justifyContent: 'center' }}>
      <View style={styles.signupContainer}>
        <Image
            source={require('../images/logo.png')}
            style={{ width: 100, height: 100, marginBottom: '20%' }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Francesca'
          />
          <TextInput
            style={styles.input}
            placeholder='agbanzofrancesca@gmail.com'
          />
          <TextInput
            style={styles.input}
            placeholder='08155665763'
          />
          <TextInput
            style={styles.input}
            placeholder='**********'
          />
        </View>
      </View>
    </MainWrapper>
  </MainContainer>
  )
}

const styles= StyleSheet.create({
  signupContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  inputContainer:{
    width: wp('90%'),
    height: hp("50%"),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "blue",
    gap: 5
  },
  input:{
    flex: 1,
    height: '10%',
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  }
})
export default SignUp
