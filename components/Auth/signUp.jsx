import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MainContainer, { MainWrapper } from '../mainContainer'
import { TextInput } from 'react-native-gesture-handler';
import Button from '../button';
import Typography from '../typography';

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
        <Button>
          <Typography type='text3' es={{color: "white"}}>Signup</Typography>
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Typography type="text4" es={{marginTop: 30, color: 'grey'}}>Already have an account? <Typography type="text4" es={{color: 'rgb(80, 80, 80)'}}>Login here</Typography></Typography>
        </TouchableOpacity>
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
  },
  inputContainer:{
    width: wp('90%'),
    height: hp("40%"),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  input:{
    height: '17%',
    width: '99%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  }
})
export default SignUp
