import React from 'react'
import { View,Text,ImageBackground} from 'react-native'
import styles from './style'
import ButtonComponent from '../buttoncomponent/index'

const CarItem = () => {
    
    return (
      <View style={styles.container}>
          
              <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image}/>
              <View style={styles.header}>
                  <Text style={styles.carName}> MODEL S</Text>
                  <Text style={styles.carPrice}> Starting at $69,990</Text>
              
              </View>
              <ButtonComponent type='primary' content={"Hello"} onPress={()=>{
                console.warn('Button Pressed')
              }}/>
          
      </View>  
      
    )
}

export default CarItem;
