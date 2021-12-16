import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

// import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView'

export default function MemoCreateScreen(props){
  const {navigation} = props;
    return (
        <KeyboardSafeView style={styles.container} behavior='height'>
        {/* <AppBar /> */}
        <View style={styles.inputContainer}>
        <TextInput value='' multiline style={styles.input} />
        </View>
        <CircleButton 
        name='check' 
        onPress={()=>{navigation.goBack();}}
        />
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

  