

import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


const Profile =()=>{
    return(
        <SafeAreaView className={'bg-primary h-full px-4'}>

            <View>
                <Text className={'text-2xl font-bold text-white'}>Profile</Text>
            </View>
        </SafeAreaView>
    )
}

export  default  Profile