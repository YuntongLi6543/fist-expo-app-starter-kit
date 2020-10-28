import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//packages

//components

//config

//style

export default function Example() {
    return (
        <View style={styles.container}>
            <Text>
                Blank Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});
