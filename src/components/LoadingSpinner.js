import React from 'react';

import { StyleSheet, View, ActivityIndicator } from 'react-native';

//等待数据加载或提交时的 loading overlay, 用户无法进行任何操作。
//样式： ios为菊花，android为圆圈
export default function LoadingSpinner() {
    return (
        <View style={styles.container}>
            <View style={styles.spinnerContainer}>
                <ActivityIndicator
                    size="large"
                    color='white'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinnerContainer: {
        width: 90,
        height: 90,
        backgroundColor: 'grey',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
