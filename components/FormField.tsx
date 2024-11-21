import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";


interface Props {
    title: string,
    otherStyles?: string,
    value: string,
    placeholder?: string,
    handleValue: (e: string) => void,
}

const FormField = ({title, otherStyles, value, placeholder, handleValue}: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View className={`mt-5 ${otherStyles}`}>
            <Text className={'text-white font-semibold text-lg'}>{title}</Text>
            <View
                className={'h-16 bg-black-100 rounded-xl w-full flex items-center flex-row px-4 border border-black-200  mt-2 '}>
                <TextInput value={value} onChangeText={handleValue} className={'text-white flex-1'}
                           placeholderTextColor={'#7B7B8B'}
                           placeholder={placeholder}
                           keyboardType={title === "Email" ? 'email-address' : 'default'}
                           secureTextEntry={!showPassword && title === 'Password'}/>
                {
                    title === 'Password' && (
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Image
                                source={{uri: !showPassword ? "https://github.com/adrianhajdin/aora/blob/main/assets/icons/eye.png?raw=true" : "https://github.com/adrianhajdin/aora/blob/main/assets/icons/eye-hide.png?raw=true"}}
                                className="w-6 h-6"
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

export default FormField