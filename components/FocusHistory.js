import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { colors } from '../constants/color'
import { fontSizes, spacing } from '../constants/sizes'
import RoundedButton from './RoundedButton'


const HistoryItem = ({ item, index }) => {
    return (
        <Text style={styles.historyItem(item.status)}>
            {item.subject}
        </Text>
    )
}

const FocusHistory = ({
    FocusHistory, onClear
}) => {
    const clearHistory = () => {
        onClear()
    }
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={{
                    color: colors.white
                }}>
                    Thing's we have focused on
                </Text>
                {!!FocusHistory.length &&
                    <FlatList style={{
                        flex: 1
                    }} contentContainerStyle={{
                        flex: 1,
                        alignItems: 'center'
                    }} data={FocusHistory} renderItem={HistoryItem} />}

            </SafeAreaView>
            <View style={styles.clearContainer}>
                <RoundedButton size={75} title="clear" onPress={() => {
                    onClear()
                }} />

            </View>
        </>
    )
}

export default FocusHistory

const styles = StyleSheet.create({
    historyItem: (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md
    }),
    title: {
        color: colors.white,
        fontSize: fontSizes.lg

    },
    clearContainer: {
        alignItems: 'center',
        padding: spacing.md
    }
})
