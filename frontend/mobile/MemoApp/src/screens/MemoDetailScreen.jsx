import React, {useEffect, useState} from 'react'
import {shape, string} from 'prop-types';
import {View, ScrollView,Text, StyleSheet} from 'react-native'

// import AppBar from '../components/AppBar'
import CircleButton from '../components/CircleButton'
import { dateToString } from '../utils';
export default function MemoDetailScreen(props){
    const {navigation, routes} = props;
    const {id} = routes.params;
    console.log(id);
    const [memo, setMemo] = useState(null);

    useEffect(()=>{
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        let unsubscribe = () => {};
        if(currentUser){
            unsubscribe = ref.onSnapshot((doc)=>{
            console.log(doc.id, doc.data());
            const data = doc.data();
            setMemo({
                bodyText:data.bodyText,
                updatedAt:data.updatedAt.toDate(),
            });
        }, (error)=>{
            console.log(error);
            Alert.alert('Failed to read data');
        });
        }
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            {/* <AppBar /> */}
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
                <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                {memo && memo.bodyText}
                </Text>
            </ScrollView>
            <CircleButton 
            style={{top:60, bottom:'auto'}} 
            name='pencil' 
            onPress={()=>{navigation.navigate('MemoEdit')}}
            />

        </View>
    )
}

MemoDetailScreen.prototype={
    route:shape({
      route: shape({
          params: shape({id:string})
      })
    }).isRequired,
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffffff'
    },
    memoHeader:{
        backgroundColor: '#467FD3',
        height:96,
        justifyContent:'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle:{
        color: '#ffffff',
        fontSize:20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate:{
        color: '#ffffff',
        fontSize:12,
        lineHeight: 16,
    },
    memoBody:{
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoText:{
        fontSize:16,
        lineHeight: 24,
    },
})
