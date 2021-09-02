import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RoundedButton from './RoundedButton'

const Timming = ({
    changeTime
}) => {
    return (
        <>
            <View style={styles.timmingButton}>
                <RoundedButton size={75} title="10" onPress={() => changeTime(10)} />
            </View>
            <View style={styles.timmingButton}>
                <RoundedButton size={75} title="15" onPress={() => changeTime(15)} />
            </View>
            <View style={styles.timmingButton}>
                <RoundedButton size={75} title="20" onPress={() => changeTime(20)} />
            </View>
        </>
    )
}

export default Timming

const styles = StyleSheet.create({
    timmingButton: {
        flex: 1,
        alignItems: 'center'
    }
})
