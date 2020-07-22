import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Row = props => (
    <View style={styles.text}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View>
)

const styles = StyleSheet.create({
    text:{
        padding: 20,
    },
})

export default Row;