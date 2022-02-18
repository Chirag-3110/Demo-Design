import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Style from '../Styles/Style';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const Buttons=({navigation})=>{
    return(
        <View style={[Style.Container,{flexDirection:'row',justifyContent:'space-evenly'}]}>
            <TouchableOpacity style={[Style.btncontainer,{backgroundColor:'#1AB1FD'}]}
                onPress={()=>navigation.navigate('Tasks')}
            >
                <Text style={Style.btnText}>
                    Set New Task
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Style.btncontainer,{backgroundColor:'white'}]}>
                <Text style={Style.btnText}>
                    View Profile
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Buttons;