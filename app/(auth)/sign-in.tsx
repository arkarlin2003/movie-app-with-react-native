import {SafeAreaView} from "react-native-safe-area-context";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import FormField from "@/components/FormField";
import {useState} from "react";
import CustomButton from "@/components/CustomButton";
import {Link} from "expo-router";


const SignIn = () => {

    const [form,setForm] = useState({
        email:'',
        password:'',
    })

    return (
        <SafeAreaView className={'bg-primary h-full'}>
            <ScrollView>
                <View className={'flex justify-center h-[80vh] px-4'}>
                    <Image source={{
                        uri: 'https://github.com/adrianhajdin/aora/blob/main/assets/images/logo.png?raw=true'
                    }} className={'w-[140px] h-[100px]'} resizeMode="contain"/>

                    <Text className={'text-white text-3xl font-bold'}>Sign In</Text>

                    <FormField title={'Email'} otherStyles={'mt-12'} value={form.email} placeholder={'example@gmail.com'} handleValue={(e)=> setForm((pre)=> ({...pre,email:e}))}/>
                    <FormField title={'Password'} otherStyles={'mt-6'}  value={form.password} placeholder={'*******'} handleValue={(e)=> setForm((pre)=> ({...pre,password:e}))}/>

                    <CustomButton title={'Sign In'} containerStyles={'mt-10'}/>

                    <View className={'mt-6'}>
                        <Text className={'text-white text-lg text-center'}>Don't have an account? <Link href={'/sign-up'} className={'text-secondary font-bold'}>Signup</Link></Text>
                    </View>


                    {/*<View className={`mt-5`}>*/}
                    {/*    <Text className={'text-white font-semibold text-lg'}>{'title'}</Text>*/}
                    {/*    <View*/}
                    {/*        className={'h-16 bg-black-100 rounded-xl w-full flex items-center flex-row px-4 border border-black-200  mt-2 '}>*/}
                    {/*        <TextInput  className={'text-white flex-1'}*/}
                    {/*                   placeholderTextColor={'#7B7B8B'}/>*/}
                    {/*                <TouchableOpacity>*/}
                    {/*                    <Image*/}
                    {/*                        source={{uri: !true ? "https://github.com/adrianhajdin/aora/blob/main/assets/icons/eye.png?raw=true" : "https://github.com/adrianhajdin/aora/blob/main/assets/icons/eye-hide.png?raw=true"}}*/}
                    {/*                        className="w-6 h-6"*/}
                    {/*                        resizeMode="contain"*/}
                    {/*                    />*/}
                    {/*                </TouchableOpacity>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                </View>
            </ScrollView>
            <StatusBar style={'light'}/>
        </SafeAreaView>
    )
}

export default SignIn