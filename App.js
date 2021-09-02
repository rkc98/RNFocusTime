
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { colors } from './constants/color';
import { spacing } from './constants/sizes';
import Focus from './screens/Focus';
import Timer from './screens/Timer';

export default function App() {

  const [focusSubject, setfocusSubject] = useState(null)
  return (
    <View style={styles.container}>
    {console.log(focusSubject)}
    {focusSubject?
    (<Timer focusSubject={focusSubject} onTimerEnd={()=>{
      setfocusSubject(null)
    }} />):(
      
      <Focus addSubject={setfocusSubject} />
      
    )}
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.darkBlue,
    padding:Platform.OS==="ios"? spacing.md : spacing.lg
  },
});
