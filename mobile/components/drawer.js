import React from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';

const drawer = ({items, select}) => {
    return (
        <ScrollView
            scrollEnabled={true}
            contentContainerStyle={{
                width:'60%',
                flex: 1,
                flexDirection: 'column',
                borderColor:'#bfbfbf',
                borderLeftWidth:1,
                borderRightWidth:1,
                backgroundColor: '#f1f1f1',
                zIndex:30
                }}>
                    {
                  items.map((item, index) => (
                         <TouchableOpacity
                            key = {index} 
                            style = {styles.item}
                            onPress={() => select(item.id)}>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                  ))
               }
                </ScrollView>
    )
}


const styles = StyleSheet.create({
    item: {
       height: 60,
       width:'100%',
       borderColor: '#bfbfbf',
       borderBottomWidth:1,
       justifyContent:'center',
    },
    text: {
        marginStart: 20 
    }
   
})
export default drawer;