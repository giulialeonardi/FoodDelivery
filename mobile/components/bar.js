import React from 'react';
import { StyleSheet, Image, View, Text, ImageBackground } from 'react-native';
import { responsiveFontSize } from "react-native-responsive-dimensions";

const bar = ({ numberOfItems }) => {
    return (
        <View style={styles.bar}>
            <Image source={require('../img/logo.png')}
                style={styles.logo} />
            {numberOfItems > 0 ?
                <ImageBackground source={require('../img/cart.png')}
                    style={styles.cart}>
                    <View style={styles.numberOfItems}>
                        <Text style={styles.number}>{numberOfItems}</Text>
                    </View>
                </ImageBackground> :
                <Image source={require('../img/cart.png')}
                    style={styles.cart}>
                </Image>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    bar: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 60,
        width: '100%',
        backgroundColor: '#faded9'
    },
    logo: {
        position: 'absolute',
        left: 15,
        top: 8,
        height: 40,
        width: 130,
        resizeMode: 'contain'
    },
    cart: {
        position: 'absolute',
        right: 15,
        top: 15,
        height: 30,
        width: 30,
    },
    numberOfItems: {
        backgroundColor: '#e96956',
        height: 15,
        width: 15,
        position: 'absolute',
        right: -7,
        bottom: -7,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    number: {
        color: 'white',
        fontSize: responsiveFontSize(1),
        fontWeight: "700"
    },
})
export default bar;