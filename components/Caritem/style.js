import { StyleSheet ,Dimensions} from 'react-native'



const styles = StyleSheet.create({
 container: {},
 header: {
     alignItems:'center',
     marginTop:'30%',
     
},
carName:{
    fontWeight:'bold',
    fontSize:40,
    fontFamily:'Roboto',
    alignItems:'center'

},
carPrice:{
fontSize:15,
fontFamily:'Roboto',
alignItems:'center',
color:'black'
},
image:{
    width:'100%',
    height:'100%',
    position:'absolute',
    

},
container:{
height:Dimensions.get('window').height,
width:'100%',
},
buttons:{
    position:'absolute',
    bottom:10,
    width:'100%',
}

})
export default styles;