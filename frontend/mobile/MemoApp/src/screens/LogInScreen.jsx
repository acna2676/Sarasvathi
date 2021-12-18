import React,{useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase';

// import AppBar from '../components/AppBar';

import Button from '../components/Button';
import Loading from '../components/Loading';

export default function LogInScreen(props){
  const {navigation} = props;
  const [email, setEmail] = useState('');//あくまでuseStateの書き方. ''はemailの初期値
  const [password, setPassword] = useState('');
  const [isLoadig, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        navigation.reset({
          index:0,
          routes:[{name:'MemoList'}],
        });
      }else{ //ログインしていない場合
        setLoading(false);
      }
    });
    return unsubscribe;//画面遷移の際にログイン状態の監視を解除する
  },[]); 

  function handlePress(){
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential)=>{
        const {user} = userCredential;
        console.log(user.uid);
        navigation.reset({
          index:0,
          routes:[{name:'MemoList'}],
        });
      })
      .catch((error)=>{
        console.log(error.code, error.message);
        Alert.alert(error.code);
      })
      .then(()=>{
        setLoading(false);
      });
  } 
    return (
        <View style={styles.container} behavior='height'>
          <Loading isLoading={isLoading} />
          {/* <AppBar /> */}
          <View style={styles.inner}>
            <Text>Log In</Text>
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
              <Text style={styles.footerText}>Not registered?</Text>
              <TouchableOpacity
              onPress={()=>{navigation.reset({
                index:0,
                routes:[{name:'SignUp'}],
              });
            }}
              >
                <Text style={styles.footerLink}>Sign up here!</Text>
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

  