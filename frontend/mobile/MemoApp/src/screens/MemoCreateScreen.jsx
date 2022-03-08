import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import firebase from 'firebase';

// import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView'

export default function MemoCreateScreen(props){
  const {navigation} = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress(){
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText, //== bodyText:bodyText
      updatedAt: new Date()
    })
    .then((docRef)=>{
      console.log('Created!', docRef.id);
      navigation.goBack();
    })
    .catch((error)=>{
      console.log('Error!', error);
    });
  }
    return (
        <KeyboardSafeView style={styles.container} behavior='height'>
        {/* <AppBar /> */}
        <View style={styles.inputContainer}>
        <TextInput 
          value={bodyText} 
          multiline 
          style={styles.input}
          onChangeText={(text)=>{setBodyText(text)}} 
          autoFocus
        />
        </View>
        <CircleButton 
        name='check' 
        // onPress={()=>{navigation.goBack();}}
        onPress={handlePress}
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

  