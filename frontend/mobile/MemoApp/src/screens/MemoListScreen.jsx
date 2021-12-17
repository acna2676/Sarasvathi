import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import firebase from 'firebase';

// import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props){
  const {navigation} = props;
  // const [mamos, setMemos] = useState([]);
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
  //     }, (error)=>{
  //       console.log(error);
  //       Alert.alert('Failed to read data');
  //     });
  //   }
  //   return unsubscribe;
  // }, []);

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
