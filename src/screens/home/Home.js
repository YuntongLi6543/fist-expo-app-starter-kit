import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { AppLoading } from 'expo';

//packages
import AsyncStorage from '@react-native-community/async-storage';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { Video } from 'expo-av';

//components
import { languageData } from '../../languages/i18n';
import LoadingSpinner from '../../components/loading/LoadingSpinner';
import LoadingLottie from '../../components/loading/LoadingLottie';

//config
import { screenWidth, screenHeight } from '../../configs/AppConfig';

function Home() {
    i18n.translations = languageData;

    // if (true) {
    //     return (
    //         <LoadingLottie />
    //     )
    // }

    return (
        <View style={styles.container}>
            <Video
                source={{ uri: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay
                isLooping
                style={{ width: screenWidth, height: screenHeight }}
            />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        backgroundColor: 'yellow'
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
