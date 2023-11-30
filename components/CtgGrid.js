import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

export default function CtgGrid({title,color,pressFood}) {
  return (
    <View style={styles.gridItem}>
      <Pressable 
        style={({pressed}) => [
            styles.press ,
            pressed ? styles.buttonPressed : null,  //pressed özellği true ise ...... basıldığı an pressed true döner
        ]}
        onPress={pressFood}   //press edildiği an pressFood propertisini yolla(callback)     
        >
        <View style={[styles.content , { backgroundColor: color}]}>
            <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,  //grid ile 2 ye bölünce ikiside olduğu alanı kaplasın
        height: 150,
        margin:15,
        elevation:4,
        shadowColor:"#171717",
        shadowOffset: {width:-2,height:4},
        shadowOpacity:0.2,
        shadowRadius:3,
        borderRadius:20,
        backgroundColor:"white"

    },
    press:{
        flex:1,   //olduğu alanı kaplaması için
    },
    buttonPressed:{
        opacity:0.6,
    },
    content:{
        flex:1,  
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
    },
    title:{
        fontSize:18,
        fontWeight:"bold"
    }

})