import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


const Bookmark =()=>{
    return(
        <SafeAreaView className={'bg-primary h-full px-4'}>

            <View>
                <Text className={'text-2xl font-bold text-white'}>Bookmark</Text>
            </View>
        </SafeAreaView>
    )
}

export  default  Bookmark