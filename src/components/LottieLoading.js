import React from 'react';

import { View } from 'react-native';

//lottie animation library
import LottieView from 'lottie-react-native';

function LottieLoading() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <LottieView
                autoPlay
                loop
                style={{ height: 150, width: 150 }}
                source={require('../assets/loading/lottieLoading.json')}
            />
        </View>
    )
}

export default LottieLoading;