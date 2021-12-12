import React from 'react';
import {View,Text,StyleSheet} from 'reace-native';
import {string, bool, shape} from 'props-types';


function Hello(props){
    const {children, bang, style} = props;
    return (
        <View>
        <Text style={[styles.text], style}>
        {`Hello ${children}${bang ?'!': ''}`}
            </Text>
        </View>
    );
}

Hello.proptypes = {
    children: string.isRequired,
    bang: bool,
    style: shape(),
}

Hello.defaultProps = {
    bang:false,
    style:null,
};

const styles = StyleSheetcreate({
    text:{
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16,
    },
});

export default Hello;
