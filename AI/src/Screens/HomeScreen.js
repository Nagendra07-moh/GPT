import React, { useState } from 'react';
import { View, Text, SafeAreaView,Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Features  from '../components/features'
import {dummyMessages} from '../constants/index'

export default function HomeScreen() {
  const [msg, setMsg] = useState(dummyMessages);
  const [recording,setRecording] = useState(false); 

  const clearMsg = () =>{
    setMsg([]);
  }
  return (
    <View className ="flex-1  bg-white">
    <SafeAreaView className="flex-1 flex mx-5">
    {/*bot icon*/}
    <View className="flex-row justify-center">
      <Image source={require('../../assets/Images/bot.png')} style={{height:hp(15) ,width:hp(15)}} className="mt-4"/>
    </View>
    {/* Features || messages */}
    {
      msg.length > 0? (
         <View className="space-y-2 flex-1">
          <Text style={{fontSize:wp(5)}}className="text-gray-700 font-semibold ml-1">
            Assistant
          </Text>
          <View  style={{height:hp(58)}} className="bg-neutral-100 rounded-3xl p-4">
            <ScrollView bounces={false} className="space-y-4" showsVerticalScrollIndicator={false}>
              {
                msg.map((msg,index)=>{
                  if(msg.role === "assistant"){
                    if(msg.content.includes('https')){
                      // its an AI image
                      return(
                        <View key={index} className="flex-row justify-start ">
                        <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                          <Image source={{uri:msg.content}} className="rounded-2xl" resizeMethod='contain' style={{height:wp(60), width:wp(60)}} />
                        </View>
                      </View>
                      )
                    }else{
                      //its a text 
                      return(
                      <View key={index} className="flex-row justify-start"> 
                        <View style={{width:wp(70)}} className="bg-emerald-100 rounded-xl p-2 rounded-tl-none">
                          <Text>
                            {msg.content}
                          </Text>
                        </View>
                      </View>
                    )
                    }
                  }else{
                    // user input
                    return(
                      <View key={index} className="flex-row justify-end"> 
                        <View style={{width:wp(70)}} className="bg-white rounded-xl p-2 rounded-tr-none">
                          <Text>
                            {msg.content}
                          </Text>
                        </View>
                      </View>
                    )
                  }
                })
              }
            </ScrollView>
          </View>
           
         </View>
      ):(
        <Features/>
      )
    }

    {/* recording , clear and stop button */}
    <View className="flex justify-center items-center">
    {
      recording ? (
        <TouchableOpacity onPress={()=> setRecording(!recording)}>
           <Image className="rounded-full" source={require('../../assets/Images/voiceLoading.gif')} style={{height:hp(12),width:hp(12)}}/> 
        </TouchableOpacity>
      ):(
        <TouchableOpacity>
           <Image className="rounded-full" source={require('../../assets/Images/recordingIcon.png')} style={{height:hp(12),width:hp(12)}}/> 
        </TouchableOpacity>
      )
    }

    {
      msg.length && (
          <TouchableOpacity  onPress={clearMsg} className="bg-neutral-400 rounded-3xl p-3 px-5 absolute right-5"  >
            <Text className="text-white font-semibold ">Clear</Text>
        </TouchableOpacity>
      )
    }
      
    </View>
    </SafeAreaView>
    </View>
  );
}
