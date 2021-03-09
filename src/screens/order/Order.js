import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//packages
import AsyncStorage from '@react-native-community/async-storage';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

//components
import RequestSpinner from '../../components/loading/RequestSpinner';

//languages
import { languageData } from '../../languages/i18n';

function Order() {
    i18n.translations = languageData;

    if (true) {
        return (
            <RequestSpinner />
        )
    }

    // return (
    //     <View style={styles.container}>
    //         <View style={styles.button}>
    //             <Text style={styles.buttonText}>
    //                 {i18n.t('order')}
    //             </Text>
    //         </View>
    //     </View>
    // );
}

export default Order;

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
