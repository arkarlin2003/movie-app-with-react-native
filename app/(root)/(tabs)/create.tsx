import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


const CreatePage =()=>{
    return(
        <SafeAreaView className={'bg-primary h-full px-4'}>

            <View>
                <Text className={'text-2xl font-bold text-white'}>Create</Text>
            </View>
        </SafeAreaView>
    )
}

export  default  CreatePage