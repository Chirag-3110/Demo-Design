import React from 'react';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const Style=StyleSheet.create({
    Container:{
        flex:1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    txt:{
        color:'black',
        fontWeight:'bold',
        width:windowWidth
    },
    body:{
        width:windowWidth,
    },
    newView:{
        flexDirection:"row",
        margin:10,
        width:windowWidth
    },
    options:{
        backgroundColor:'#AFAFAF',
        width:windowWidth/7,
        height:windowWidth/7,
        borderRadius:windowWidth/14,
        borderColor:'black',
        borderWidth:2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        elevation:20,
        shadowColor:'black',
        shadowOpacity:1.5
    },
    image:{
        width:windowWidth/12,
        height:windowHeight/12,
        resizeMode:'contain'
    },
    btncontainer:{
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        width:windowWidth/2.5,
        borderRadius:50,
        borderWidth:2,
        borderColor:'black',
        marginVertical:30,
        elevation:10
    },
    btnText:{
        color:'black',
        fontWeight:'bold',
    },
    taskView:{
        width:windowWidth-20,
        flexDirection:'row',
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        padding:5,
        backgroundColor:'white',
        elevation:20,
        marginTop:10,
        justifyContent:"space-between"
    },
    leftView:{
        width:windowWidth/1.5,
    },
    rightView:{
    },
    starSize:{
        width:windowWidth/14,
        height:windowHeight/14,
        resizeMode:'contain'
    },
    input:{
        width:windowWidth-20,
        height:45,
        backgroundColor:'#E4E4E4',
        borderWidth:2,
        borderColor:'black',
        marginVertical:2,
        borderRadius:5,
        elevation:20,
        shadowColor: 'white',
        shadowOpacity: 1.5,
        color:'black',
        fontSize:13,
        fontWeight:'bold'
    },
    search:{
        width:windowWidth/1.5,
        height:45,
        backgroundColor:'#E4E4E4',
        borderWidth:2,
        borderColor:'black',
        borderRadius:10,
        elevation:20,
        shadowColor: 'white',
        shadowOpacity: 1.5,
        color:'black',
        fontSize:13,
        fontWeight:'bold'
    },
    searchBtn:{
        backgroundColor:'#00FF2A',
        width:windowWidth/4,
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        marginVertical:30,
        elevation:10,
        height:40,
        alignItems:'center',
        justifyContent: 'center',
        elevation:20
    },
    avatar:{
        width:windowWidth/3,
        height:windowWidth/3,
        borderRadius:windowWidth/6
    },
    info:{
        marginTop:5,
        alignItems:'center'
    },
    detailView:{
        marginTop:10,
        backgroundColor:'#DBDBDB',
        width:windowWidth-20,
        borderRadius:5,
        borderColor:'black',
        elevation:10,
        padding:10
    },
    dettxt:{
        color:'black',
        fontWeight:'bold',
        fontSize:15
    },
    select:{
        width:windowWidth-20,
        marginTop:10,
        padding:5,
        alignItems: 'center',
    },
    selectbtn:{
        width:windowWidth-20,
        alignItems: 'center',
        justifyContent:'center',
        height:50,
        borderRadius:10,
        borderColor:'black',
        backgroundColor:'white',
        borderWidth:2,
        elevation:20,
        flexDirection:'row',
        justifyContent:"center"
    },
    otherbtn:{
        width:windowWidth/2.5,
        alignItems: 'center',
        justifyContent:'center',
        height:50,
        borderRadius:10,
        borderColor:'black',
        backgroundColor:'white',
        borderWidth:2,
        elevation:10,
        flexDirection:'row',
        justifyContent:"center"
    },
    img:{
        width:windowWidth/10,
        height:windowWidth/10,
    }
})
export default Style;