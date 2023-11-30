import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FootIng({data}) {
  return data.map((item)=>
    <View key={item} style={styles.container}>
        <Text style={styles.item}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        //textAlign:"center",
        backgroundColor:"orange",
        marginVertical:5,
        marginHorizontal:12,
        borderRadius:10,
        paddingVertical:10,
    },
    item:{
        textAlign:"center",

    }
})