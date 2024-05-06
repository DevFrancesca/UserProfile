import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Typography = ({es, type, children}) => {
    const styles = StyleSheet.create({
        text1:{
            fontSize: hp("1.4%")
        },
        text2:{
            fontSize: hp("1.5%")
        },
        text3:{
            fontSize: hp("2%")
        },
        text4:{
            fontSize: hp("2.2%")
        },
        text5:{
            fontSize: hp("3%")
        },
    })
    switch (type) {
        case "text1":
            return <Text style={{...styles.text1, ...es}}>{children}</Text>
        case "text2": 
            return <Text style={{...styles.text2, ...es}}>{children}</Text>
        case "text3":
            return <Text style={{...styles.text3, ...es}}>{children}</Text>
        case "text4":
            return<Text style={{...styles.text4, ...es}}>{children}</Text>
        case "text5":
            return <Text style={{...styles.text5, ...es}}>{children}</Text>
    }
  return <></>
}

export default Typography
