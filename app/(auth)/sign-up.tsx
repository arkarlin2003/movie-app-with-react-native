import {SafeAreaView} from "react-native-safe-area-context";
import {Image, ScrollView, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import {Link, router} from "expo-router";
import {useForm, Controller} from "react-hook-form";
import FormError from "@/components/FormError";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"

type FormType = {
    name: string,
    email: string,
    password: string,
}

const formSchema = yup.object({
    name: yup.string().min(3).required('Username is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
})

const SignUp = () => {

    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<FormType>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(formSchema)
    })

    const onSubmit = async (data: FormType) => {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if (await response.ok) {
             await response.json();
            router.push('/(root)/(tabs)')
        }

    }

    return (
        <SafeAreaView className={'bg-primary h-full'}>
            <ScrollView>
                <View className={'flex justify-center h-[80vh] px-4'}>
                    <Image source={{
                        uri: 'https://github.com/adrianhajdin/aora/blob/main/assets/images/logo.png?raw=true'
                    }} className={'w-[140px] h-[100px]'} resizeMode="contain"/>

                    <Text className={'text-white text-3xl font-bold'}>Sign Up</Text>

                    <Controller
                        control={control}
                        render={({field: {onChange, value}}) => (
                            <FormField title={'Username'} otherStyles={'mt-12'} value={value} placeholder={'alex jhon'}
                                       handleValue={onChange}/>
                        )}
                        name="name"
                    />
                    {errors.name && <FormError message={'name is required!'}/>}

                    <Controller
                        control={control}
                        render={({field: {onChange, value}}) => (
                            <FormField
                                title={'Email'} otherStyles={'mt-6'} value={value}
                                placeholder={'example@gmail.com'} handleValue={onChange}/>
                        )}
                        name="email"
                    />
                    {errors.email && <FormError message={'email is required!'}/>}

                    <Controller
                        control={control}
                        render={({field: {onChange, value}}) => (
                            <FormField title={'Password'} otherStyles={'mt-6'} value={value} placeholder={'*********'}
                                       handleValue={onChange}/>
                        )}
                        name="password"
                    />
                    {errors.password && <FormError message={'password is required!'}/>}

                    <CustomButton title={'Sign Up'} containerStyles={'mt-10'}
                                  handlePress={handleSubmit(onSubmit)}/>

                    <View className={'mt-6'}>
                        <Text className={'text-white text-lg text-center'}>Already have an account? <Link
                            href={'/sign-in'} className={'text-secondary font-bold'}>Signin</Link></Text>
                    </View>


                </View>
            </ScrollView>
            <StatusBar style={'light'}/>
        </SafeAreaView>
    )
}

export default SignUp