import React from 'react'
import {View,Pressable,Text} from 'react-native'
import styles from './style'

const ButtomComponent = (props) => {
    const type=props.type;
    const content=props.content;
    const onPress=props.onPress;
const backgroundColor=type==='primary'?'black':'white';
const fontColor=type==='primary'?'white':'black';
    return (
        <View style={styles.container}>
            <Pressable style={[styles.buttons,{backgroundColor:backgroundColor}]} onPress={()=>onPress()}>
<Text style={[styles.content,{color:fontColor}]}> {content}</Text>
            </Pressable>
        </View>
    )
}

export default ButtomComponent;
