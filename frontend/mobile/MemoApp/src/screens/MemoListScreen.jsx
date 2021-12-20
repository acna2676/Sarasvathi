import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Alert, Text,
} from 'react-native';
import firebase from 'firebase';

// import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button'
import Loading from '../components/Loading'

export default function MemoListScreen(props){
  const {navigation} = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState([false]);
  useEffect(()=>{
    navigation.setOptions({
      headerRight: ()=> <LogOutButton /> //アロー関数の内容が１行の場合は{}なしでもよい
    });
  });
  // 96. error
  // useEffect(()=>{
  //   const db = firebase.firestore();
  //   const { currentUser } = firebase.auth();
  //   let unsubscribe = () => {};
  //   if(currentUser){
          setLoading(true);
  //     const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
  //     unsubscribe = ref.onSnapshot((snapshot)=>{
  //       // const userMemos = [];
  //       snapshot.forEach((doc)=>{
  //         console.log(doc.id, doc.data());
  //         // const data = doc.data();
  //         // userMemos.push({
  //           // id: doc.id,
  //           // bodyText: data.bodyText,
  //           // updatedAt: data.updatedAt.toDate,
  //         // });
  //       });
            setMemos(userMemos);
            setLoading(false);
    //     }, (error)=>{
  //       console.log(error);
              setLoading(false);
    //       Alert.alert('Failed to read data');
  //     });
  //   }
  //   return unsubscribe;
  // }, []);

  if (MemoListScreen.length===0){
    return (
      <View style={emptyStyles.container}>
      < Loading isLoading/>
        <View style={emptyStyles.inner}>
        <Text style={emptyStyles.title}>Let's create initial memo!</Text>
        <Button 
          style={emptyStyles.button}
          label="Create" 
          onPress={()=>{navigation.navigate('MemoCreate');}} 
        />
        </View>
      </View>
    )
  }

  return (
      <View style={styles.container}>
      {/* <AppBar /> */}
      <MemoList />
      <CircleButton 
      name='plus' 
      onPress={()=>{navigation.navigate('MemoCreate')}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F4F8',
    },
  });

  const emptyStyles = StyleSheet.create({
    container: {
      flex: 1,
      bustifyContent:'center',
      alighItem:'center'
    },
    inner: {
      bustifyContent:'center',
      alighItem:'center'
    },
    title: {
      fontSize:18,
      marginBottom:24,

    },
    button: {
      alignSelf: 'center,'
    },
  });
