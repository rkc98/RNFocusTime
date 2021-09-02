import { useKeepAwake } from 'expo-keep-awake'
import React, { useState } from 'react'
import { Platform, StyleSheet, Text, Vibration, View } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import Countdown from '../components/Countdown'
import RoundedButton from '../components/RoundedButton'
import Timming from '../components/Timming'
import { colors } from '../constants/color'
import { spacing } from '../constants/sizes'

const Timer = (
    {focusSubject,onTimerEnd}
) => {
    useKeepAwake();
    const [isStarted, setisStarted] = useState(false);
    const [progress, setprogress] = useState(1)
    const [minutes, setminutes] = useState(1)

    const onProgress=(progress)=>{
        setprogress(progress)
    }
    const vibrate=()=>{
        if(Platform.OS==="ios"){
            const interval=setInterval(() => 
                Vibration.vibrate()
            , 1000);
            setTimeout(()=>clearInterval(interval),10000)
        }
        else{
            Vibration.vibrate(10000)

        }
    }


    const onEnd=()=>{
        vibrate()
        setminutes(1)
        setprogress(1)
        setisStarted(false)
        onTimerEnd();

    }
    const changeTime=(time)=>{
        setminutes(time)
        setprogress(1)
        setisStarted(false)
    }

    return (
        
        <View style={styles.container}>
           <View style={styles.countdown}>
            
            <Countdown minutes={minutes} isPaused={!isStarted} onProgress={onProgress} onEnd={onEnd}  />

           </View>
            
            <View style={{paddingTop:spacing.xxl}}>
                <Text style={styles.title}>
                    Focusing On : 
                </Text>
            <Text style={styles.task}>{focusSubject}</Text>

            </View>
            <View style={{
                marginTop:spacing.md
            }}>
                <ProgressBar color="red" style={{height:10}} progress={progress} />
            </View>

                <View style={styles.buttonContainer}>
                    <Timming changeTime={changeTime} />
                    

                </View>
            <View style={styles.buttonContainer}>
           {!isStarted ? <RoundedButton title="start"  onPress={()=>{
                return setisStarted(true)
            }} /> :<RoundedButton title="stop"  onPress={()=>{
                return setisStarted(false)
            }} /> } 
            


            </View>


        </View>
    )
}

export default Timer

const styles = StyleSheet.create({
    container:{
        flex:1,       
    },
    title:{
        color:colors.white,
        textAlign:'center'
    },
    task:{
        color:colors.white,
        fontWeight:'bold',
        textAlign:'center'
    },
    countdown:{
        flex:0.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonContainer:{
        flex:0.3,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})
