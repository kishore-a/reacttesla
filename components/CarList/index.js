import React from 'react'
import { View ,FlatList,Dimensions} from 'react-native'
import Caritem from '../Caritem'
import car from './cars'
import styles from './styles'

const CarList = () => {
    return (
       <View style={styles.container}>
           <FlatList 
           data={car} 
           key={car.id}
           renderItem={({item})=> <Caritem car={item}/> 
           } 
            snapToAlignment={'center'}
           decelerationRate={'normal'}
        //    showsVerticalScrollIndicator={'false'}
           snapToInterval={Dimensions.get('window').height}/>
       </View>
    )
}

export default CarList;
