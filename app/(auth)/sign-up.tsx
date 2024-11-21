import {SafeAreaView} from "react-native-safe-area-context";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import FormField from "@/components/FormField";
import {useState} from "react";
import CustomButton from "@/components/CustomButton";
import {Link} from "expo-router";


const SignUp = () => {

    const [form,setForm] = useState({
        username:'',
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

                    <Text className={'text-white text-3xl font-bold'}>Sign Up</Text>

                    <FormField title={'Username'} otherStyles={'mt-12'} value={form.username} placeholder={'alex jhon'} handleValue={(e)=> setForm((pre)=> ({...pre,username:e}))}/>
                    <FormField title={'Email'} otherStyles={'mt-6'} value={form.email} placeholder={'example@gmail.com'} handleValue={(e)=> setForm((pre)=> ({...pre,email:e}))}/>
                    <FormField title={'Password'} otherStyles={'mt-6'}  value={form.password} placeholder={'*******'} handleValue={(e)=> setForm((pre)=> ({...pre,password:e}))}/>

                    <CustomButton title={'Sign Up'} containerStyles={'mt-10'}/>

                    <View className={'mt-6'}>
                        <Text className={'text-white text-lg text-center'}>Already have an account? <Link href={'/sign-in'} className={'text-secondary font-bold'}>Signin</Link></Text>
                    </View>


                </View>
            </ScrollView>
            <StatusBar style={'light'}/>
        </SafeAreaView>
    )
}

export default SignUp