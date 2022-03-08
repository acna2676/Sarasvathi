import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton(){
    const navigation = useNavigation(); //Hooksはコンポーネントの直下で宣言する必要がある

    function handlePress(){
        firebase.auth().signOut()
                .then(()=>{
                    navigation.reset({
                        index:0,
                        routes:[{name:'LogIn'}],
                    });
                })
                .catch((error)=>{
                    Alert.alert('Failed to LogOut')
                });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text style={styles.label}>Log Out</Text>
      </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container:{
        paddingVertical: 4,
        paddingHorizontal: 12,
     
      },
      buttonLabel:{
        fontSize:14,
        color:'rgba(255,255,255,0.7)',
      },
})
