import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import Style from '../Styles/Style';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const NewTask=()=>{
    const [Data,setData]=useState([
        {
            id: '1',
            order: '10243',
            Task_name:'Distribute Medicine',
        },
        {
            id: '2',
            order: 'Order Number',
            Task_name:'Task Name',
        },
        {
            id: '3',
            order: 'Order Number',
            Task_name:'Task Name',
        },
        {
            id: '4',
            order: 'Order Number',
            Task_name:'Task Name',
        },
        {
            id: '5',
            order: 'Order Number',
            Task_name:'Task Name',
        },
        {
            id: '6',
            order: 'Order Number',
            Task_name:'Task Name',
        },
        {
            id: '7',
            order: 'Order Number',
            Task_name:'Task Name',
        },
        {
            id: '8',
            order: 'Order Number',
            Task_name:'Task Name',
        },
        {
            id: '9',
            order: 'Order Number',
            Task_name:'Task Name',
        },
    ])
    return(
        <View style={[Style.Container,{backgroundColor:"#8DD9FF"}]}>
            <View style={Style.ipview}>
                <TextInput style={Style.input} 
                            placeholder="Collapse Inbox"
                            placeholderTextColor="black"
                />
                 <TextInput style={Style.input} 
                            placeholder="Create Task"
                            placeholderTextColor="black"
                />
                <View style={{flexDirection:'row',
                              alignItems: 'center',
                              justifyContent:'space-between'
                        }}>
                    <TextInput style={Style.search} 
                                placeholder="Search for Task"
                                placeholderTextColor="black"
                    />
                    <TouchableOpacity style={Style.searchBtn}>
                        <Text style={Style.btnText}>
                            Search
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                keyExtractor={item=>item.id}
                data={Data}            
                renderItem={({item})=>(
                    <View style={Style.taskView}>
                        <View style={Style.leftView}>
                            <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>{item.order}</Text>
                            <Text style={{fontWeight:'bold',fontSize:25,color:'black'}}>{item.Task_name}</Text>
                            <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Task Description</Text>
                        </View>
                        <View style={Style.rightView}>
                            <Text style={{fontWeight:'bold',fontSize:17,color:'black'}}>Time</Text>
                            <Image 
                                style={Style.starSize}
                                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-Exss1tkWQJEROnmm87fNlzx45ZdVe3JUQ&usqp=CAU"}}
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    )
}
export default NewTask;