import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';
import Style from '../Styles/Style';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const Box=()=>{
    return(
        <View >
            <View style={{flexDirection:'row',padding:20,justifyContent:'center'}}>
                <View style={Style.options}>
                    <Text style={{fontWeight:'bold',fontSize:25,color:'black'}}>B</Text>
                </View>
                <View style={Style.options}>
                    <Text style={{fontWeight:'bold',fontSize:25,color:'black'}}>I</Text>
                </View>
                <View style={Style.options}>
                    <Text style={{fontWeight:'bold',fontSize:25,color:'black'}}>U</Text>
                </View>
                <View style={Style.options}>
                    <Text style={{fontWeight:'bold',fontSize:25,color:'black'}}>Aa</Text>
                </View>
                <View style={Style.options}>
                    <Text style={{fontWeight:'bold',fontSize:25,color:'black'}}>A^</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'flex-end',marginRight:10}}>
                <Image
                    style={Style.image}
                    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5RG5_cWHKEAXct1N7IfHS3ZXJ1iJOPouAVrVZcGAaNgFe9LXlDHH_40qSYPGDgWkgbo&usqp=CAU"}}
                />
                <Text style={{color:'#0B01FF',fontWeight:'bold',fontSize:20}}>Comment</Text>
            </View>
        </View>
    )
}
export default Box;