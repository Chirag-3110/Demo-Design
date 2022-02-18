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
const Profile=()=>{
    return(
        <View style={Style.Container}>
            <View style={Style.info}>
                <Image
                    style={Style.avatar}
                    source={{uri:"https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"}}
                />
                <Text style={{color:'black',fontWeight:'bold',fontSize:25,fontStyle:'italic'}}>
                    Welcome Mr.Das
                </Text>
                <Text style={{color:'#0037FF',fontWeight:'bold',fontSize:15}}>Admin Mode</Text>
            </View>            
            <View style={Style.detailView}>
                <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Order 10234</Text>
                <Text style={{color:'black',fontWeight:'bold',fontSize:25,fontStyle:'italic'}}>Distribute Medicine</Text>
                <Text style={{color:'black',fontWeight:'bold',fontSize:15,fontStyle:'italic'}}>Task Description</Text>
                <View style={{flexDirection:'row',width:windowWidth-50,justifyContent:'space-between',marginTop:10}}>
                    <Text style={Style.dettxt}>Created By</Text>
                    <Text style={Style.dettxt}>Abhinav Das</Text>
                </View>
                <View style={{flexDirection:'row',width:windowWidth-50,justifyContent:'space-between'}}>
                    <Text style={Style.dettxt}>Due Data</Text>
                    <Text style={Style.dettxt}>DD/MM/YYYY</Text>
                </View>
                <View style={{flexDirection:'row',width:windowWidth-50,justifyContent:'space-between'}}>
                    <Text style={Style.dettxt}>Sent By</Text>
                    <Text style={Style.dettxt}>Abhinav Das</Text>
                </View>
                <View style={{flexDirection:'row',width:windowWidth-50,justifyContent:'space-between'}}>
                    <Text style={Style.dettxt}>Sent to</Text>
                    <Text style={Style.dettxt}>Mr Dev Morya</Text>
                </View>
            </View>
            <View style={Style.select}>
                <TouchableOpacity style={Style.selectbtn}>
                    <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>
                        Files
                    </Text>
                    <Image
                        style={Style.img}
                        source={{uri:"https://i.pinimg.com/736x/c0/4a/f0/c04af0676383aab1872dde2ce2789908.jpg"}}
                    />
                </TouchableOpacity>
                <View style={{width:windowWidth-20,flexDirection:'row',justifyContent:"space-between",marginTop:5}}>
                    <TouchableOpacity style={Style.otherbtn}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>
                            Forward
                        </Text>
                        <Image
                        style={Style.img}
                        source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAC0tLTu7u75+fnv7++7u7vy8vLd3d3r6+v39/dqamp4eHhgYGCrq6vGxsbl5eWkpKQ1NTWIiIgdHR1ZWVksLCyRkZGFhYXW1tY+Pj4MDAzExMQlJSXOzs5KSkoWFhZwcHBHR0dTU1N8fHyXl5eIlws4AAAEr0lEQVR4nO2diWKqMBBFjXXfxa0UbavW///FJ4gKyhI0NwO8ez5A5rSSySST2GgQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEKsse1KR4Cm6X1IhwCmqVRPOgYsZ0P1LR0EFN9QdaSjQBIYqrl0GEAuhmohHQeO0FCNpAOBcTVUK+lIUNwMlTOQjgXD3VAt+9LBQIgYqmUtc3/UsJ65P25Yx9z/YFjD3P9oqDbSEZnmyVANpUMyzLNh3XJ/gqH6qVXdn2So1nVSTDRUaiYdlzlSDGuU+9MM65P7Uw1rk/vTDetS92cY1qTuzzKsR+7PNFRfNaj7sw3Vrvp1f46h8ipf9+cZKuVKh/gm+YZVz/0ahhXP/TqG1a77OzqGlcv9g49+bzuZbDaLz8VYy1CNW9JBa9J3O4vhca1nFeOrAoruZOh4L7iFrMud+3vzn9fdrpQ293eno+X7ej7lrPunQ0N6PuXL/bPFrzk9n5Ll/o6Bd++REuX+wfyVnJDPn7RYyGBu8O2LM5Z2C5ij9HwO8gviTdj/74J03e9+Yf2U8H5/awT385HL/Xq1kAGEcn93b0tQqYmE4NbwBCYbgdz/adPvzN6yXx8/hD5it+6fvlHbvszRYu6HTmLScazl/j8ZQWWr7m9prpdBsJH7u/bHmCj43N/F1IH6oOv+mcQgGge7318CQeyaf9/qRC0VXN0v/g5eQf0XBztpsxDYFFU2Tdw5oQSH0mYhsIxou1pKAdesMZFWu3CATb6/pdUu4NreP6TVLgCnMwdpt4AmTrAUo8wvsHLaSsv5IBf3+9JyPtDeU8DOZ2GgJdNJ2k6Bl7x70nZnpkjBhiOth24ekv+OHrFr3TNpP3ivwlFaEL20ptXw+sjOORyHo9Op09lOp67r9toBwdU7RfdUsWNMozEotPLkjEebptubZW2gFPuT4XfwF5qReMNTZ9bVGREKGeIbTXRSoXecbwucdCliaGFPdJVnt5oXPR1RwBC24HQnu673RtsXru3SN7TRfpFV9u5fHOS0DW3sFKYP7F+vT4Q1De00s6VNSPfvnEzSM7Rzz0JKLIv3psFlOjOTuI/2+e63R8cQuOAUJWkFePT+nYf5hr+2juc9b6QdTDw619BaR8nzQGpmISHPcGWt8ekxF64MDd85hvbO5D9OZ4xVadmGFnss43uFjrkJRqYhuhiMEF8DNtkYkGG4tHmFS2yfwug6QrqhvTHGJ/rkrdFPTjW0ezgmGobhOX6aoeUzXPemi53pdyPF0OIY4+PeHuy0TX92ouHO9pGR2zizNi6YfJuZ7Su+W9dzTEvzgkmG9i/du05JdwDBBEOBgxTXJmfIy/FkKHDepxU+GtMX8GDoSdzVEsYAKrTjho7I6ckj9O2IGcpc7NkOng3rwo0aCh3UDkJYwmbBEUNLC05PjGHDaMDN0JM6F9r2dwyBpfbV0BH7qZIpeAAIDe0WgzHOc1IPOYRfDCUvgVyDK5nAUORQb8gMfQuV+O/MTJSHfUOa5ovqYowNL8s8MZG+3hI+kZK+/Kmn6v6LWpMS3emDoWq3+RWnRlejE0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBDyv/APBrs5rjUS/ucAAAAASUVORK5CYII="}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.otherbtn}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>
                            Send Back
                        </Text>
                        <Image
                        style={Style.img}
                        source={{uri:"https://media.istockphoto.com/vectors/back-icon-vector-illustration-back-button-icon-vector-back-arrow-icon-vector-id953455676?k=20&m=953455676&s=170667a&w=0&h=IZAa6C_ceMI0gVFVqsytgpGmyV8DANEvB0Xf6Mx1wrg="}}
                    />
                    </TouchableOpacity>
                </View>
                <View style={{width:windowWidth-20,flexDirection:'row',justifyContent:"space-between",marginTop:5}}>
                    <TouchableOpacity style={Style.otherbtn}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>
                            Reject
                        </Text>
                        <Image
                        style={Style.img}
                        source={{uri:"data:image/png;base64,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"}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.otherbtn}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:15}}>
                            Next Assessor
                        </Text>
                        <Image
                        style={Style.img}
                        source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAClpaVhYWHc3Nz8/Pz29vbo6Ojw8PCMjIz6+vq0tLRpaWm7u7tHR0dRUVHGxsaUlJSampqsrKx8fHzNzc3h4eE5OTnV1dWFhYUvLy8iIiKfn59ubm7AwMAeHh5jY2MTExNXV1c2NjZBQUEQEBCAgIApKSlVZTOwAAADwklEQVR4nO3ca1PbMBCFYTnBSSCBXLiES2hDgfL//2E7DDW7sWS7gxR11ff5XIY9A0l8VqLOAQAAAAAAAAAAAAAAAAAAAAAAAAD+LzfzzWZ+k3uKdFbb6t3yNvckiSyqxl3uWZJ4rIR97mkSOK+UZe554vuuE1YXuQeK7aQ6tK1zzxTXZSthdT/JPVRUo3bC6qGoiL6E1dM091gRNQl3S5mxoIhNwpH7ISOW83gjErpxkRFlQv14s8o9WiQqobuSEc9zzxaHTujuZMTLzLPFcZDQrWXEUd7Z4jhM6HYy4ibrbHG0EurnuAIKYzuhm8uIVxlni8OT0H2TERf5ZovDl9CtZMRxttni8CZ01zKi8drvT+huZUTbtT+QUHf/57M8w0URSuhuZETLnTiY0E1lxKdZjuGiCCd0M7WGM9uJOxK6yZuMaPVYoyuhq59lRKOduDOhq19kxOtjDxdFd0LnLmREk7V/1Te92k+ZrP0PH594wX+wkBEt1v7p6/vnXceHgVre7I43WTT1bjzedZ7G/JQR18ea66hOZcQCar+H2k/Zr/0+6gDnMfc0SajljfXa76fO+43X/gC1vLFd+0PU8sZ07Q9Sy5u3hLW/Polv2HdWy5unZBHVx28080HfW202XhIFvArNeJSIM/klaZpG+4ZPLMPeOiZiebNNknAdHvGLBtbbycPnlyR5Jd6FR/yiob9zZ5+bjYFvUH9n3jHj1wzepX2+UJIkrFMFHPyUIt4J0uxQE73VDL6uJz/2kwT8/VLfjKPbD96/yEe300QJs1LHw3bPMsLU+9ywZwRbVNMv4rLNgU3pP0H1yG9y+91DPU2ZPMHooW5m2jyF6qZOL8ydJA6o+OoEytpp8PtNvZ5nGnWKaO1E/6Nwdt2z1CfB1p5kpv2DqwsLKVdsaTS3SYOf4OrSicE1ad85vl6vWVx19yVUl79MHlf0JFR92+aRU3dCtcc3elu4M6E6brJ69NuVUB0Zml1ZdCRUhd7uFYxwwlIKfTChKvQWr0L9EUpYTqEPJFRneLYLvT9hSYXem1D13STHL0fkS7gsKaAnYb2VAa0V+rZWwrN7kc/wn1k0DhOqvmuv0HscJJy9ioAGC72HTqj6bqr7MkemEqq+a7LQe8iEqu/uc08Wi0io7h6Wcw+4SbguotB7eP4Xpaqs+/jXvoBmNxY+vhtIFv8upkP7uqrlQu/T+iGaLvReB9fIbBd6PxXReKEPqJtrFvsC2pJfvVovxo8j+3UXAAAAAAAAAAAAAAAAAAAAAAAAAADgH/ILDckel5PMVq4AAAAASUVORK5CYII="}}
                    />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width:windowWidth,flexDirection:'row',justifyContent:"space-evenly"}}>
                <TouchableOpacity style={[Style.btncontainer,{backgroundColor:'#1AB1FD'}]}>
                    <Text style={Style.btnText}>
                        Log Out
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Style.btncontainer,{backgroundColor:'white'}]}>
                    <Text style={Style.btnText}>
                        Settings
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Profile;