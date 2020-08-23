import DropDownPicker from 'react-native-dropdown-picker';

import React ,{Component} from 'react' 
import {View,Image} from'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {ArrowIcon } from '../utils/Icon'

class Picker extends Component {

    state = {
        country: 'uk'
    }
    
    render (){
        return(            
            <DropDownPicker
                items={[
                    {label: 'UK', value: 'uk',},
                    {label: 'France', value: 'france'},
                    {label: 'Pankaj', value: 'Indian'},
                    {label: 'Sunder', value: 'Patna'},
                    {label: 'Hasmukh', value: 'GZB'},
                    
                ]}
                
                // searchable={true}

                defaultValue={this.state.country}
                containerStyle={{
                    top:20,
                    height: hp('8%'),
                    width:wp('75%'),                   
                    alignSelf:'center',                 
                }}                
                style={{
                    paddingLeft:  hp('4%'), 
                    backgroundColor:"#fff",
                    borderTopLeftRadius: 30, borderTopRightRadius: 30,
                    borderBottomLeftRadius: 30, borderBottomRightRadius: 30
                }}
                activeLabelStyle={{
                    color: 'red'
                }} 
                
                customArrowUp={ ()=>
                                 <Image 
                                source ={ ArrowIcon}
                                style={{height:20,width:20,
                                        transform: [{ rotate: "180deg" }]}}
                                /> }

                customArrowDown={ ()=> 
                                <Image 
                                    source ={ ArrowIcon}
                                    style={{height:20,width:20}}
                                    /> 
                                }

                searchablePlaceholderTextColor="#000000"
                
                seachableStyle={{ 
                    fontSize: 20,
                    paddingLeft:  hp('4%'), 
                    backgroundColor:'red'
                }}

                arrowStyle={{
                    marginRight: 10,                   
                }}
               
                labelStyle={{
                    fontSize: 20,
                    textAlign: 'left',
                    color: '#000'
                }}
               
                itemStyle={{
                    paddingLeft:  hp('4%'), 
                    justifyContent: 'flex-start',
                    width:wp('75%'),                 
                  
                }}
                dropDownStyle={{
                    backgroundColor:"red",
                    borderBottomLeftRadius: 30, borderBottomRightRadius: 30
                }}
                dropDownStyle={{
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: 30,
                     borderBottomRightRadius: 30,                 
                    borderColor:"#000000",
                    borderWidth:0.8,                   
                }}
                onChangeItem={item => this.setState({
                    country: item.value
                })}
            />       
        )
    }
}

export default Picker;