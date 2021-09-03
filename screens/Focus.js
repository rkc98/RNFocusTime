import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import RoundedButton from '../components/RoundedButton'
import { colors } from '../constants/color'
import { fontSizes, spacing } from '../constants/sizes'
// import { TextInput } from 'react-native-paper'

const Focus = ({ addSubject }) => {

    const [tmpItem, settmpItem] = useState(null)
    return (
        <View style={styles.container}>

            {/* <TextInput placeholder="Enter your name" style={{
                textAlignVertical: 'bottom',
                fontSize:25
            }}  /> */}
            <View style={styles.titleContainer}>
                <Text style={{
                    fontSize: fontSizes.lg,
                    fontWeight: 'bold',
                    color: colors.white,


                }}>
                    What would like to focus on?
                </Text>
                <View style={styles.content}>
                    <TextInput style={{ margin: 20, flex: 1 }} onSubmitEditing={({ nativeEvent }) => {
                        settmpItem(nativeEvent.text)
                    }} />
                    <RoundedButton title="+" size={50} onPress={() => {
                        console.log(tmpItem);
                        addSubject(tmpItem)
                    }} style={styles.button} />
                </View>
            </View>

        </View>
    )
}

export default Focus

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: spacing.xxl,

    },
    titleContainer: {
        padding: spacing.sm
    }, content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {


    }

})
