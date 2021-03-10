import {
    SAVE_FILE_SUCCESS,
    GET_OPEN_ADS_SUCCESS
} from '../constants/ActionTypes';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';

export const saveFile = () => {
    return dispatch => {
        dispatch({ type: SAVE_FILE_SUCCESS, payload: res.data });
    };
};

export const getOpenAds = () => {
    return dispatch => {
        axios
            //example api - get an array of image url
            .get('http://pawpus.finestudiotest.com/api/item/getItem.php')
            .then(res => {
                let array = saveFiles(res.data.data[0].itemImage);
                console.log(array)
            });
    };
};

function saveFiles(data) {
    let localOpenAds = [];
    data.forEach((image, index) => {
        FileSystem.downloadAsync(
            image, FileSystem.documentDirectory + `${index}.png`
        )
            .then(({ uri }) => {
                localOpenAds.push(uri)
                console.log(111)
                const stringifiedArray = JSON.stringify(localOpenAds)
                AsyncStorage.setItem('localOpenAds', stringifiedArray);
            })
            .catch(error => {
                console.error(error);
            });
    });

    return localOpenAds
}