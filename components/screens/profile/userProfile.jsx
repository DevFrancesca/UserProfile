import React from 'react'
import MainContainer, { MainWrapper } from '../../mainContainer'
import { View, StyleSheet } from 'react-native'
import Typography from '../../typography'

const UserProfile = () => {
  return (
   <MainContainer>
    <MainWrapper es={{justifyContent: 'center' }}>
      <View style={styles.profileContainer}>
        <Typography type='text5'>User Profile</Typography>
      </View>
    </MainWrapper>
   </MainContainer>
  )
}
const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default UserProfile
