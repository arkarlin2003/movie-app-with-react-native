import {ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import {router} from "expo-router";


const LandingPage = () => {
    return (
        <SafeAreaView className={' bg-primary h-full'}>
            <ScrollView>
                <View className={'flex items-center justify-center h-[80vh] px-4'}>
                    <Image source={{
                        uri: 'https://github.com/adrianhajdin/aora/blob/main/assets/images/logo.png?raw=true'
                    }} className={'w-[140px] h-[100px]'} resizeMode="contain"/>

                    <Image source={{
                        uri: "https://github.com/adrianhajdin/aora/blob/main/assets/images/cards.png?raw=true"
                    }}
                           className={'w-[420px] h-[320px]'}
                           resizeMode="contain"/>

                    <View className={'relative mt-5'}>
                        <Text className="text-3xl text-white font-bold text-center">
                            Discover Endless{"\n"}
                            Possibilities with{" "}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>

                        <Image
                            source={{
                                uri: 'https://github.com/adrianhajdin/aora/blob/main/assets/images/path.png?raw=true'
                            }}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode="contain"
                        />
                    </View>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center w-96">
                        Where Creativity Meets Innovation: Embark on a Journey of Limitless
                        Exploration with Aora
                    </Text>

                    <CustomButton title={'Continue with Email'} containerStyles={'mt-10'} handlePress={()=> router.push('/sign-in')}/>

                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    )
}

export default LandingPage;