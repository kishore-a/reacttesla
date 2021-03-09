import React from 'react'
import { View,Text,ImageBackground} from 'react-native'
import styles from './style'
import ButtonComponent from '../buttoncomponent/index'

const CarItem = (props) => {
    const { name,tagline,image}=props.car;
    return (
      <View style={styles.container}>
          
              <ImageBackground source={image} style={styles.image}/>
              <View style={styles.header}>
                  <Text style={styles.carName}>{name}</Text>
                  <Text style={styles.carPrice}> {tagline}</Text>
              
              </View>
              <View style={styles.buttons}>
                <ButtonComponent type='primary' content={"Custom Color"} onPress={()=>{
                console.warn('Button Pressed ')
              }}/>
              <ButtonComponent type='secondary' content={"Existing Inventory"} onPress={()=>{
                console.warn('Button Pressed ')
              }}/>
              </View>
              
          
      </View>  
      
    )
}

export default CarItem;
