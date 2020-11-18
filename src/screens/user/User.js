import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import * as Updates from 'expo-updates'

//languages
import { languageData } from '../../languages/i18n';

function User() {
    i18n.translations = languageData;

    const setToEnglish = async () => {
        await AsyncStorage.setItem('language', 'en');
        await Updates.reloadAsync();
    }

    const setToChinese = async () => {
        await AsyncStorage.setItem('language', 'zh');
        await Updates.reloadAsync();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setToEnglish()}>
                <View style={styles.smallButton}>
                    <Text style={styles.buttonText}>
                        Switch To EN
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setToChinese()}>
                <View style={styles.smallButton}>
                    <Text style={styles.buttonText}>
                        Switch To CN
                    </Text>
                </View>
            </TouchableOpacity>

            {/* <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {i18n.t('user')}
                </Text>
            </View> */}
        </View>
    );
}

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    smallButton: {
        borderRadius: 8,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'red',
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
