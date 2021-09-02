import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/color'
import { fontSizes, spacing } from '../constants/sizes'

const formatTime=(time)=>time<10?`0${time}`:time

const minutesToMilliSeconds=(minutes)=>{
    return minutes*60*1000
}
const Countdown = ({
    minutes=20,
    isPaused,
    onProgress,
    onEnd
}) => {
    const [millis, setmillis] = useState(minutesToMilliSeconds(minutes))
    const minute=Math.floor(millis/1000/60)%60;
    const seconds=Math.floor(millis/1000)%60;
    const interval = useRef(null)
    const countDown=()=>{
        setmillis((time)=>{
            if(time===0){
                clearInterval(interval.current)
                onEnd()
                return time
            }
        const timeLeft=time-1000;
        onProgress(timeLeft/minutesToMilliSeconds(minutes))

        return timeLeft

        })
    }
    useEffect(() => {
        setmillis(minutesToMilliSeconds(minutes))
       
    }, [minutes])
    useEffect(() => {
        if(isPaused){
            return
        }
        interval.current=setInterval(countDown,1000)
        return () => {
            clearInterval(interval.current)
        }
    }, [isPaused])

    return (
        <View>
            <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
        </View>
    )
}

export default Countdown

const styles = StyleSheet.create({
    text:{
        fontSize:fontSizes.extraLarge,
        fontWeight:'bold',
        color:colors.white,
        padding:spacing.lg,
        backgroundColor: "red"
    }
})
