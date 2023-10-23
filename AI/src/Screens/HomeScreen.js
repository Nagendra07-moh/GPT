import React, { useState } from 'react';
import { View, Text, SafeAreaView,Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Features  from '../components/features'

export default function HomeScreen() {
  const [msg, setMsg] = useState([]);

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
         <View>

         </View>
      ):(
        <Features/>
      )
    }
    </SafeAreaView>
    </View>
  );
}
