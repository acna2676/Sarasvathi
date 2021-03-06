import React from "react";
import {
  View, Text, StyleSheet, TouchableOpacity, Alert
} from 'react-native';
// import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import {shape, string, instanceOf, arrayOf} from 'prop-types';

import Icon from './Icon'
import { instanceOf, string } from "prop-types";
import MemoEditScreen from "../screens/MemoEditScreen";

export default function MemoList(){
  // const {memos} = props;
  const navigation = useNavigation();
    return (
      <View>
        {/* {MemoEditScreen.map((memo)=>{
          return (
            <TouchableOpacity 
            key={memo.id}
            style={styles.memoListItem}
            onPress = {()=> {navigation.navigate('MemoDetail');}}
            >
            <View>
              <Text style={styles.memoListItemTitle}>{memo.bodyText}</Text>
              <Text style={styles.memoListItemDate}>string({memo.updatedAt})</Text>
            </View>
            <TouchableOpacity 
            style={styles.memoDelete}
            onPress={()=>{Alert.alert('Are you sure?')}}>
              <Icon name="delete" size={24} color='#B0B0B0' />
            </TouchableOpacity>
          </TouchableOpacity>
          )
        })} */}
        <TouchableOpacity 
          style={styles.memoListItem}
          onPress = {()=> {navigation.navigate('MemoDetail');}}
          >
          <View>
            <Text style={styles.memoListItemTitle}>Shopping List</Text>
            <Text style={styles.memoListItemDate}>2021/12/13 12:00:00</Text>
          </View>
          <TouchableOpacity 
          style={styles.memoDelete}
          onPress={()=>{Alert.alert('Are you sure?')}}>
            <Icon name="delete" size={24} color='#B0B0B0' />
            {/* <Feather name="x" size={16} color='#B0B0B0' /> */}
            {/* <Text>X</Text> */}
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
);
}

// MemoList.prototype={
//   memos: arrayOf(shape({
//     id: string,
//     bodyText: string,
//     updatedAt: instanceOf(Date),
//   })).isRequired,
// }

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,0.15)'
      },
      memoListItemTitle: {
    fontSize:16,
    lineHeight: 32,
      },
      memoListItemDate: {
        fontSize:12,
        lineHeight: 16,
        color: '#848484'
          },
          memoDelete: {
            padding: 8,
              },
        });
