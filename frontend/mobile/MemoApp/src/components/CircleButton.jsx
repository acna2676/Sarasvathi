import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {string} from 'prop-types'

export default function CircleButton(props){
    const {children} = props;
    return (
        <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>{children}</Text>
      </View>
    )
    };

CircleButton.prototype = {
    children: string.isRequired
}

const styles = StyleSheet.create({
    circleButton:{
        backgroundColor: '#467FD3',
        width: 64,
        height:64,
        borderRadius:32,
    justifyContent:'center',
    alignItems:'center',
        position: 'absolute',
        right:40,
        bottom:40,
        shadowColor: '#000000', //shadowプロパティはiosにしか対応していない
        shadowOffset:{width:0, height:8},
        shadowOpacity:0.25,
        shadowRadius:8,
        elevation:8, //要素z軸の高さを指定android用のMaterial Design
      },
      circleButtonLabel:{
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 40,
      }
})