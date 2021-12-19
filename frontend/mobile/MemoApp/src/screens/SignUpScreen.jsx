import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase';

// import AppBar from '../components/AppBar';

import Button from '../components/Button';
import { translateErrors } from '../utils';

export default function SignUpScreen(props){
  const {navigation} = props;
  const [email, setEmail] = useState('');//あくまでuseStateの書き方. ''はemailの初期値
  const [password, setPassword] = useState('');

  function handlePress(){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential)=>{
        const {user} = userCredential;
        console.log(user.uid);
        navigation.reset({
          index:0,
          routes:[{name:'MemoList'}],
        });
      })
      .catch((error)=>{
        // console.log(error.code, error.message);
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
  }
    return (
        <View style={styles.container} behavior='height'>
          {/* <AppBar /> */}
          <View style={styles.inner}>
            <Text>Sign Up</Text>
            <TextInput 
              value={email} 
              style={styles.input} 
              onChangeText={(text)=>{setEmail(text);}}
              autoCapitalize= 'none' 
              keyboardType='email-address'
              placeholder='Email Address'
              textContentType='emailAddress'//keyChainを参照
            />
            <TextInput 
              value={password} 
              style={styles.input} 
              onChangeText={(text)=>{setPassword(text);}} 
              autoCapitalize= 'none' 
              placeholder='Password'
              secureTextEntry
              textContentType='password'
            />
            <Button 
            label='Submit' 
            onPress={handlePress}
            />
            <View  style={styles.footer}>
              <Text style={styles.footerText}>Already registered?</Text>
              <TouchableOpacity onPress={()=>{navigation.reset({
                  index:0,
                  routes:[{name:'LogIn'}],
                });
              }}>
                <Text 
                style={styles.footerLink}
              >
                Log In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F4F8',
    },
    inner:{
        paddingHorizontal: 27,
        paddingVertical: 24,
        // flex:1,
    },
    title:{
        fontSize: 24,
        lineHeight:32,
        fontWeight:'bold',
        marginBottom: 24,
    },
    input:{
        fontSize: 16,
        // lineHeight:32,
        fontWeight:'bold',
        height: 48,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footerText:{
      fontSize:14,
      lineHeight:24,
      marginRight: 8,
    },
    footerLink:{
      fontSize:14,
      lineHeight:24,
      color:'#467FD3'
    },
    footer:{
      flexDirection: 'row',
    }
  });

  