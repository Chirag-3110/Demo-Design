import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Style from '../Styles/Style';
import About from './About';
import Box from './Box'
import Buttons from './Buttons';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const App=({navigation})=>{
  return(
   <ScrollView style={{backgroundColor:'white'}}>
      <View style={Style.Container}>
        <View style={[Style.body,{
              backgroundColor:'#8DD9FF',
              borderBottomRightRadius:30,
              borderBottomLeftRadius:30
            }]}>
          <About/>
        </View>
        <View style={[Style.body,{
              backgroundColor:'white',
            }]}>
          <Box/>
        </View>
        <View style={[Style.body,{
              borderTopLeftRadius:30,
              borderTopRightRadius:30
            }]}>
            <View style={[Style.Container,{flexDirection:'row',justifyContent:'space-evenly'}]}>
            <TouchableOpacity style={[Style.btncontainer,{backgroundColor:'#1AB1FD'}]}
                onPress={() => navigation.navigate('Tasks')}
            >
                <Text style={Style.btnText}>
                    Set New Task
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Style.btncontainer,{backgroundColor:'white'}]}
                 onPress={() => navigation.navigate('Profile')}
            >
                <Text style={Style.btnText}>
                    View Profile
                </Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
   </ScrollView>
  )
}
export default App;