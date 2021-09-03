
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FocusHistory from './components/FocusHistory';
import { colors } from './constants/color';
import { spacing } from './constants/sizes';
import Focus from './screens/Focus';
import Timer from './screens/Timer';

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2
}

export default function App() {

  const [focusSubject, setfocusSubject] = useState(null)
  const [focusHistory, setfocusHistory] = useState([])
  const addFocusHistorySubjectWithState = (focusSubject, status) => {
    setfocusHistory([...focusHistory, { subject: focusSubject, status: status }])
  }
  useEffect(() => {
    if (focusSubject) {
      setfocusHistory([...focusHistory, focusSubject])
    }

  }, [focusSubject])

  const onClear = () => {
    setfocusHistory([])

  }
  const saveFocusHistory=async()=>{
    try{
     await AsyncStorage.setItem("focusHistory",JSON.stringify(focusHistory))
    }
    catch(e){
      console.log(e);
    }
  }
  const loadFocusHistory=async()=>{
    try{
      const history = await AsyncStorage.getItem('focusHistory')
      if(history&&JSON.parse(history.length)){
        setfocusHistory(JSON.parse(history))
      }
    }catch(e){
      console.log(e);
    }
  }
  useEffect(() => {
    loadFocusHistory()
    
  }, [])
  useEffect(() => {
    saveFocusHistory()
    
  }, [focusHistory])
  return (
    <View style={styles.container}>
      {console.log(focusSubject)}
      {focusSubject ?
        (<Timer focusSubject={focusSubject} onTimerEnd={() => {
          addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE)
          setfocusSubject(null);

        }} clearSubject={() => {
          addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED)
          setfocusSubject(null)
        }} />) : (
          <>
            <Focus addSubject={setfocusSubject}

            />
            <FocusHistory FocusHistory={focusHistory} onClear={onClear} />
          </>
        )}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding: Platform.OS === "ios" ? spacing.md : spacing.lg
  },
});
