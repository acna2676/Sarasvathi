import React from 'react';
import {View, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen(){
    return (
        // <KeyboardAvoidingView style={styles.container} behavior='height'>
        <KeyboardSafeView style={styles.container} behavior='height'>
        <AppBar />
        <View style={styles.inputContainer}>
        <TextInput value='Shopping List' multiline style={styles.input} />
        </View>
        <CircleButton name='check' />
      {/* </KeyboardAvoidingView> */}
      </KeyboardSafeView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F4F8',
    },
    inputContainer:{
        paddingHorizontal: 27,
        paddingVertical: 32,
        flex:1,
    },
    input:{
        flex:1,
        textAlignVertical:'top',
        fontSize: 16,
        lineHeight:24,
    }
  });

  