import React from 'react'
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StyleSheet, View, SafeAreaView} from 'react-native';

export default function MainContainer({children}) {
    const styles = StyleSheet.create({
        mainContainerBody: {
            width: wp("100%"),
            height: hp("100%"),
            alignItems: "center",
            justifyContent: "center"
        }
    })
    return <SafeAreaView style={styles.mainContainerBody}>{children}</SafeAreaView>;
}

export function MainWrapper({children, es}){
    const styles= StyleSheet.create({
        mainWrapperBody: {
            width: wp("90%"),
            height: hp("100%"),
        }
    })
    return <View style={{...styles.mainWrapperBody, ...es}}>{children}</View>;
}