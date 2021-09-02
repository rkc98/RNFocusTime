import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const RoundedButton = (
    {
        onPress,
    style={},
    textStyle={},
    size=125,
    ...props}
) => {
    return (
       <TouchableOpacity style={[styles(size).radius,style]} onPress={onPress} >
           <Text style={[styles(size).text,textStyle]}>
               {props.title}</Text>          
       </TouchableOpacity>
    )
}

export default RoundedButton
const styles =(size)=> StyleSheet.create({
    radius:{
        borderRadius:size/2,
        width:size,
        height:size,
        alignItems:'center',
        backgroundColor:"#fff",
        borderWidth:2,
        justifyContent:'center',
    },
    text:{
        color:"black",
        fontSize:size/3,
        
        

    }
})

