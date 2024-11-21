

import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


const Home =()=>{
    return(
        <SafeAreaView className={'bg-primary h-full px-4'}>

        <View>
            <Text className={'text-2xl font-bold text-white'}>Home</Text>
        </View>
        </SafeAreaView>

    )
}

export  default  Home