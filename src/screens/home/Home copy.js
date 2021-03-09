// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigation } from '@react-navigation/native';
// import { Overlay } from 'react-native-elements';

// import { Modal, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

// import { AppLoading } from 'expo';

// //packages
// import AsyncStorage from '@react-native-community/async-storage';
// import * as Localization from 'expo-localization';
// import i18n from 'i18n-js';

// import { languageData } from '../../languages/i18n';

// import { screenHeight, screenWidth } from '../../configs/AppConfig'
// //components
// import LoadingScreen from '../../components/loading/LoadingScreen';

// import * as Linking from 'expo-linking';
// import { useKeyboard } from '@react-native-community/hooks'

// function Home() {
//     const [value, onChangeText] = useState('Useless Placeholder');
//     const [show, setShow] = useState(false);
//     const keyboard = useKeyboard()

//     i18n.translations = languageData;

//     const navigation = useNavigation()

//     const link = 'exp://192.168.2.39:19000/Stack/345678'

//     const showTextInput = () => {
//         //setShow(false)
//         setVisible(!visible);
//     }

//     const [visible, setVisible] = useState(false);

//     const toggleOverlay = () => {
//         setVisible(!visible);
//     };

//     const [modalVisible, setModalVisible] = useState(false);

//     // if(keyboard.keyboardHeight === 0)

//     const overlayHeight = screenHeight - keyboard.keyboardHeight * 2;

//     return (
//         <View style={styles.container}>
//             <Button title="open" onPress={() => setModalVisible(true)} />
//             <Overlay
//                 onBackdropPress={() => setModalVisible(!modalVisible)}
//                 animationType="slide"
//                 visible={modalVisible}
//                 overlayStyle={styles.overlay}
//             >
//                 <KeyboardAvoidingView
//                     behavior="position"
//                     enabled
//                 >
//                     <View style={[styles.textInputContainer, { height: overlayHeight }]}>
//                         <TextInput
//                             style={styles.textInput}
//                             autoFocus
//                             placeholder="Username"
//                             style={styles.textInput}
//                         />
//                         <Text>发送</Text>
//                     </View>
//                 </KeyboardAvoidingView>
//             </Overlay>
//         </View >
//     );
// }

// export default Home;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         justifyContent: 'flex-end',
//         alignItems: 'center'
//     },
//     button: {
//         borderRadius: 8,
//         marginLeft: 25,
//         marginRight: 25,
//         paddingVertical: 14,
//         paddingHorizontal: 10,
//         backgroundColor: '#f01d71',
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//         textTransform: 'uppercase',
//         fontSize: 16,
//         textAlign: 'center',
//     },
//     textInputContainer: {
//         flexDirection: 'row',
//         width: screenWidth
//     },
//     textInput: {
//         backgroundColor: 'red',
//         color: 'red'
//     },
//     inner: {
//         padding: 24,
//         flex: 1,
//         justifyContent: "space-around"
//     },
//     header: {
//         fontSize: 36,
//         marginBottom: 48
//     },
//     textInput: {
//         height: 40,
//         borderColor: "#000000",
//         borderBottomWidth: 1,
//         marginBottom: 36
//     },
//     btnContainer: {
//         backgroundColor: "white",
//         marginTop: 12
//     }
// });
