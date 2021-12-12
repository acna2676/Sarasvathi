import React from 'react';
import {View,Text,StyleSheet} from 'reace-native';
import {string, bool} from 'props-types';


function Hello(props){
    const {children, bang} = props;
    return (
        <View>
        <Text style={styles.text}>
        {`Hello ${children}${bang ?'!': ''}`}
            </Text>
        </View>
    );
}

Hello.proptypes = {
    children: string.isRequired,
    bang: bool,
}

Hello.defaultProps = {
    bang:false,
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
