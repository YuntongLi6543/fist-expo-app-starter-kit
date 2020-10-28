import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { getData } from '../../actions/data';
import { AppLoading } from 'expo';

function Stack() {

    useEffect(() => {
        dispatch(getData())
    }, [dispatch]);

    const dispatch = useDispatch();

    const term = useSelector(state => state.pageData);

    if (term === undefined) {
        return <AppLoading />
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Stack on Home
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Stack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 8,
        marginLeft: 25,
        marginRight: 25,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
});
