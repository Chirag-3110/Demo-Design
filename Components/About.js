import React from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';
import Style from '../Styles/Style';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const About=()=>{
    return(
        <View style={[Style.Container,{padding:50}]}>
            <Text style={[Style.txt,{fontSize:35,fontStyle:'italic',paddingHorizontal: 10}]}>
                Morgan Stanley
            </Text>
            <Text style={[Style.txt,{fontSize:20,fontStyle:'italic',paddingHorizontal: 10}]}>
                INVESTMENT MANAGER
            </Text>
            <Text style={[Style.txt,{fontSize:22,fontStyle:'italic',paddingHorizontal: 10,marginTop:50}]}>
                CounterPoint Global Insight
            </Text>
            <Text style={[Style.txt,{fontSize:30,fontStyle:'italic',paddingHorizontal: 10,marginTop:20,color:'#111111'
                            ,borderBottomColor:'black',borderBottomWidth:3,width:windowWidth-10,}]}>
                Myth Busting,Popular Delusions and the Variant Perceptions
            </Text>
            <View style={Style.newView}>
                <Text style={{color:'#0B01FF',
                            fontWeight:'bold',
                            fontSize:15,
                            borderRightWidth:2,
                            borderColor:'black',
                            paddingHorizontal: 10,
                        }}>
                    Consilient Observer
                </Text>
                <Text style={{color:'black',
                            fontWeight:'bold',
                            fontSize:15,
                            paddingHorizontal: 10,
                        }}>
                    Feb 16 2022
                </Text>
            </View>
            <View style={{flexDirection: 'row',marginTop:10,width:windowWidth}}>
                <Text style={{color:'red',fontWeight:'bold',fontSize:15,paddingHorizontal:20}}>
                    Data_Files.xls
                </Text>
                <Text style={{color:'red',fontWeight:'bold',fontSize:15}}>
                    Report_1.pdf
                </Text>
            </View>
        </View>
    )
}
export default About;