import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { AppLoading } from 'expo';

//packages
import AsyncStorage from '@react-native-community/async-storage';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import { languageData } from '../../languages/i18n';

//components
import LoadingScreen from '../../components/loading/LoadingScreen';

import * as Linking from 'expo-linking';


function Home() {
    i18n.translations = languageData;

    const navigation = useNavigation()

    // if (true) {
    //     return (
    //         <LoadingScreen />
    //     )
    // }

    const link = 'exp://192.168.2.39:19000/Stack/345678'

    console.log(Linking.parse('exp://192.168.2.39:19000','Stack'))

    const { queryParams } = Linking.parse(link);

    console.log(queryParams)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Stack')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        home
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
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
