import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { responsiveFontSize } from "react-native-responsive-dimensions";



const item = ({ item, currency, addToCart }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.addCartButton}
                onPress={() => addToCart(item.id)}>
                <Image
                    source={require('../img/add_cart.png')}
                    style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={[styles.description, { fontSize: responsiveFontSize(2), color: '#999999' }]}>{currency + " " + item.price.toFixed(2)}</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderColor: "#faded9",
        borderWidth: 1,
        borderRadius: 10
    },
    name: {
        flex: 3,
        fontSize: responsiveFontSize(2),
        marginHorizontal: 20,
        fontWeight: "500",
        color: '#ef9183',
        textAlignVertical: 'center',
        marginTop: 15,
    },
    description:
    {
        flex: 2,
        fontSize: responsiveFontSize(1.7),
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: "300",
        color: '#bfbfbf',
        textAlign: 'left'
    },
    addCartButton: {
        backgroundColor: '#faded9',
        height: 60,
        width: 60,
        position: 'absolute',
        right: -20,
        top: -20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
})
export default item;