import React from 'react';

import { StyleSheet, View } from 'react-native';

//package
import LottieView from 'lottie-react-native';

//等待数据加载时的loading view，用户可以进行操作（如后退，切换tab等）。
//样式为lottie库中的动画图，可替换文件切换加载样式。
export default function LoadingLottie() {
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                loop
                style={styles.lottieStyle}
                source={require('../assets/loading/lottieLoading.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lottieStyle: {
        height: 150,
        width: 150
    }
});
