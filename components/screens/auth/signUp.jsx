import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MainContainer, { MainWrapper } from '../../mainContainer'
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../button';
import Typography from '../../typography';

export default function SignUP({ navigation, route }) {
  return (
  <MainContainer>
    <MainWrapper es={{ justifyContent: 'center' }}>
      <View style={styles.signupContainer}>
        <Image
            source={require('../images/logo.png')}
            style={{ width: 100, height: 100, marginBottom: '20%' }}
        />
        <View style={styles.inputContainer}>
         <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder='Francesca'
            />
            <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={require('../images/cancel.png')}
                  style={styles.icon}
                />
            </TouchableOpacity>
         </View>

          <View  style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder='agbanzofrancesca@gmail.com'
            />
             <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={require('../images/cancel.png')}
                  style={styles.icon}
                />
            </TouchableOpacity>
          </View>

          <View  style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder='08155665763'
            />
            <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={require('../images/cancel.png')}
                  style={styles.icon}
                />
            </TouchableOpacity>
          </View>

          <View  style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder='**********'
            />
            <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={require('../images/hide.png')}
                  style={styles.icon}
                />
            </TouchableOpacity>
          </View>
        </View>
        <Button  onPress={() => navigation.navigate('profile')}>
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
    justifyContent: 'space-around',
    marginBottom: 20
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input:{
    flex: 1,
    height: 40,
    // width: '99%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
// export default SignUp
