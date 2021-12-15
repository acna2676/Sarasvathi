import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

// import AppBar from '../components/AppBar';

import Button from '../components/Button';

export default function SignUpScreen(props){
  const {navigation} = props;
    return (
        <View style={styles.container} behavior='height'>
          {/* <AppBar /> */}
          <View style={styles.inner}>
            <Text>Sign Up</Text>
            <TextInput value='Email Address' style={styles.input} />
            <TextInput value='Password' style={styles.input} />
            <Button 
            label='Submit' 
            onPress={()=>{navigation.reset({
              index:0,
              routes:[{name:'MemoList'}],
            });
          }}
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

  