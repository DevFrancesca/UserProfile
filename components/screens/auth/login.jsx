import React from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Typography from '../../typography';
import MainContainer, { MainWrapper } from '../../mainContainer';
import Button from '../../button';

export default function Login({ navigation}){
  return (
    <MainContainer>
      <MainWrapper es={{ justifyContent: 'center' }}>
        <View style={styles.loginContainer}>
          <Image
            source={require('../images/Finsworth1.png')}
            style={{ width: 100, height: 100, marginBottom: '30%' }}
          />
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Username"
              />
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={require('../images/cancel.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}  
                placeholder="*******"
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
            <Typography type="text3" es={{color: 'white'}}>
              Login
            </Typography>
          </Button>

          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Typography type="text4" es={{marginTop: 30, color: 'grey'}}>Don't have an account? <Typography type="text4" es={{color: 'rgb(80, 80, 80)'}}>Sign up here</Typography></Typography>
          </TouchableOpacity>
        </View>
      </MainWrapper>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90%'),
    height: hp('100%'),
  },
  inputContainer: {
    width: wp('90%'),
    height: hp("20%"),
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
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

