import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native';

//packages
import { Overlay } from "react-native-elements";
import { screenHeight, screenWidth } from '../configs/AppConfig';

export default function OpenAds(props) {
    const { image } = props;

    console.log(33333)

    const [visiable, setVisiable] = useState(true);

    return (
        <Modal
            visible={visiable}
            style={{ height: screenHeight, width: screenWidth }}
        >
            <View style={{ height: screenHeight, width: screenWidth }}>
                <Image source={{ uri: image }} style={{ height: screenHeight - 150, width: screenWidth }} />
                <View
                    style={{
                        height: 150,
                        paddingHorizontal: 35,
                        width: screenWidth,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../assets/img/openLogo.png')}
                            style={{ height: 50, width: 50, borderRadius: 50 }}
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 15 }}>Fine Studio</Text>
                    </View>


                    <TouchableOpacity onPress={() => setVisiable(false)}>
                        <View style={{ borderWidth: 1, paddingVertical: 4, paddingHorizontal: 8, borderRadius: 20 }}>
                            <Text style={{ fontSize: 16 }}>
                                Skip
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});
