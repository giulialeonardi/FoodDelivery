import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ImageBackground,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';

import { responsiveFontSize } from "react-native-responsive-dimensions";
import Drawer from '../components/drawer'
import Item from '../components/item'
import requests from '../Requests'
import Bar from '../components/bar'


var { width, height } = Dimensions.get('window')

class Restaurant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfItems: 0,           //number of items in the cart
            drawerOpen: false,          //flag controlling drawer
            id: 1,                      //id of the restaurant: here hardcoded for simplicity, to be passed as props in navigation
            img: '',                    //img of the restaurant
            name: '',                   //name of the restaurant
            cost: '',                   //price category of the restaurant
            currency: '',               //currency used by the restaurant
            avgDeliveryTime: '',        //average time needed for delivery 
            categories: [],             //categories of food offered by the restaurant
            feedback: '',               //average of the scores received by the restaurant
            address: '',                //address of the restaurant
            menu_sections: [],          //section of the menu offered
            sectionSelected: 0,         //section selected by the user
            menu: {}                     //menu related to the chosen section
        }
    }

    _isMounted = false;

    /*Fetches the restaurant information*/
    fetch() {
        requests.getRestaurantInfo(this.state.id).then(res => {
            if (this._isMounted) {
                this.setState({
                    name: res.name, img: res.img, cost: res.cost, avgDeliveryTime: res.avgDeliveryTime, categories: res.categories,
                    feedback: res.feedback, address: res.address, menu_sections: res.menu_sections, currency: res.currency
                })
            }
        }
        )
        requests.getMenu(this.state.id, this.state.sectionSelected).then((menu) => {
            if (this._isMounted) {
                this.setState({ sectionSelected: this.state.id, menu: menu })
            }
        }
        )

    }

    componentDidMount() {
        this._isMounted = true;
        this.fetch()
    }

    componentWillUnmount() {
        this._isMounted = false;

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Bar numberOfItems={this.state.numberOfItems} />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <ImageBackground source={require('../img/pizzeria_1.jpg')} style={{ width: '100%', height: '100%' }}>
                            <View style={styles.infoBox}>
                                <View style={styles.deliveryTime}>
                                    <Text style={styles.time}>{this.state.avgDeliveryTime}</Text>
                                    <Text style={styles.min}> min</Text>
                                </View>
                                <View style={{ flex: 0.5 }}></View>
                                <View style={styles.nameView}>
                                    <Text style={styles.name}>{this.capitalize(this.state.name)}</Text>
                                    <View style={styles.feedbackBox}>
                                        <Image
                                            source={require('../img/feedback.png')}
                                            style={styles.feedbackImg} />
                                        <Text style={styles.feedbackValue}>{this.state.feedback}</Text>
                                    </View>
                                </View>
                                <Text style={styles.info}>{this.state.categories.map((item, key) => (key < this.state.categories.length - 1 ? this.capitalize(item) + " • " : this.capitalize(item) +"      "+ this.state.cost))}</Text>
                                <Text style={styles.info}>{this.state.address}</Text>
                                <View style={{ flex: 1 }}></View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.body}
                        onStartShouldSetResponder={() => this.state.drawerOpen == true ? this.changeVisibility() : null}>
                        <View style={styles.menu_container}>
                            <Text style={styles.title}>{this.state.menu.name}</Text>
                            <ScrollView style={styles.menu}>
                                {this.state.menu.items != undefined ?
                                    this.state.menu.items.map((item, key) => (
                                        <Item key={key} item={item} currency={this.state.currency} addToCart={this.addToCart} />
                                    )) : null}
                            </ScrollView>
                        </View>
                        {this.state.drawerOpen == false ?
                            <TouchableOpacity
                                style={styles.touchable}
                                onPress={() => this.changeVisibility()}>
                                <Image
                                    source={require('../img/menu.png')}
                                    style={styles.menuIcon} />
                            </TouchableOpacity>
                            :
                            <Drawer items={this.state.menu_sections} select={this.select}></Drawer>}
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    /* Increases the number of items in the cart by 1; in case of real working, it will also 
    add the id of the selected item to an array to be passed as prop to the Bar component */
    addToCart = (itemId) => {
        this.setState({ numberOfItems: this.state.numberOfItems + 1 })
        console.log("Aggiunto al carrello item " + itemId)
    }

    /* Receives the user's selection and shows the chosen menu */
    select = (sectionId) => {
        requests.getMenu(this.state.id, sectionId).then((menu) => {
            this.setState({ sectionSelected: sectionId, menu: menu })
            this.changeVisibility()
        }
        )
    }
    /* Controls the opening and closing of the drawer menu by operating on the drawerOpen flag */
    changeVisibility = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen })
    }

    /* Capitalizes every word */
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: (Platform.OS === 'ios') ? height-100 : height-60,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    body: {
        backgroundColor: 'white',
        flex: 2,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    },
    infoBox: {
        height: '60%',
        width: '80%',
        backgroundColor: 'white',
        margin: 30,
        marginStart: 0,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
    name: {
        flex: 1,
        fontSize: responsiveFontSize(4),
        fontWeight: "bold",
        color: '#ef9183',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    feedbackBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
    },
    feedbackValue: {
        fontSize: responsiveFontSize(1.7),
        marginStart: 5,
        fontWeight: "400",
        color: '#999999',
        textAlign: 'left',
        marginRight: 25,

    },
    feedbackImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 0
    },
    info: {
        flex:1,
        fontSize: responsiveFontSize(1.7),
        marginHorizontal: 10,
        marginStart: 20,
        fontWeight: "300",
        color: '#bfbfbf',
        textAlign: 'left'
    },
    deliveryTime: {
        backgroundColor: '#e96956',
        height: 70,
        width: 70,
        position: 'absolute',
        right: -20,
        top: -20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    time: {
        color: 'white',
        fontSize: responsiveFontSize(2.8),
        fontWeight: "700"
    },
    min: {
        color: 'white',
        fontSize: responsiveFontSize(1.5),
        fontWeight: "500"
    },
    touchable: {
        flex: 1,
        position: 'absolute',
        left: 20,
        top: 20,
        width: 30,
        height: 30,
    },
    menuIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    menu_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    title: {
        position: 'absolute',
        left: 70,
        right: 20,
        top: 20,
        height: 70,
        textAlign: 'right',
        textAlignVertical: 'center',
        fontSize: responsiveFontSize(4.5),
        marginHorizontal: 20,
        fontWeight: "600",
        color: '#ef9183',
    },
    menu: {
        position: 'absolute',
        left: 10,
        right: 10,
        top: 90,
        bottom: 0
    },
    nameView: {
        flex: 3,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    }
}
)


export default Restaurant;