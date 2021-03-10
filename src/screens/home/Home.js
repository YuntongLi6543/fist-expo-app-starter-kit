import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    SafeAreaView
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { screenHeight, screenWidth } from '../../configs/AppConfig';

//redux
import { useDispatch, useSelector } from "react-redux";
import { getOpenAds } from "../../redux/actions";

//packages
import { Overlay } from "react-native-elements";
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

//components
import OpenAds from '../../components/openAds';

const data = [
    {
        title: "FOOD",
        text: "Text 1",
        img: require('../../assets/img/food1.png')
    },
    {
        title: "Item 2",
        text: "Text 2",
        img: require('../../assets/img/food2.png')
    },
    {
        title: "Item 3",
        text: "Text 3",
        img: require('../../assets/img/food3.png')
    },
    {
        title: "Item 4",
        text: "Text 4",
        img: require('../../assets/img/food4.png')
    },
    {
        title: "Item 5",
        text: "Text 5",
        img: require('../../assets/img/food5.png')
    },
]

function Home() {
    const dispatch = useDispatch();

    const [activeIndex, setActiveIndex] = useState(0);

    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        async function getLocalOpenAds() {
            const restoredArray = await AsyncStorage.getItem('localOpenAds');
            const localOpenAds = JSON.parse(restoredArray)

            if (localOpenAds !== null) {
                setImageUri(localOpenAds[Math.floor(Math.random() * localOpenAds.length)])
            }

            //通过api获取开屏广告
            await dispatch(getOpenAds());
        }

        getLocalOpenAds();
    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <View
                key={index}
                style={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    height: 300,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,
                    elevation: 4,
                }}>
                <Image
                    style={{
                        width: '100%',
                        height: '75%',
                        borderRadius: 5,
                    }}
                    source={item.img}
                />

                <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                    <Text
                        style={{ fontSize: 14, color: 'grey' }}
                    >
                        {item.text}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 50, backgroundColor: 'white' }}>
            {imageUri === null ? null : <OpenAds image={imageUri} />}
            <View style={{ backgroundColor: 'white', justifyContent: 'center' }}>
                <Carousel
                    layout={"default"}
                    inactiveSlideScale={0.90}
                    data={data}
                    sliderWidth={screenWidth}
                    itemWidth={0.8 * screenWidth}
                    renderItem={renderItem}
                    activeAnimationType='spring'
                    slideStyle={{ paddingVertical: 10, justifyContent: 'center' }}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />

                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        backgroundColor: 'grey'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;