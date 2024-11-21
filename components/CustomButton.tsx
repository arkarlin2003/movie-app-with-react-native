import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";


interface Props {
    title: string,
    containerStyles?: string,
    isLoading?: boolean,
    handlePress?: () => void,
}

const CustomButton = ({title, containerStyles, isLoading, handlePress}: Props) => {
    return (
        <TouchableOpacity disabled={isLoading} activeOpacity={0.7}
                          onPress={handlePress}
                          className={`w-full bg-secondary h-16 rounded-xl flex flex-row gap-2 justify-center items-center ${containerStyles}`}>
            <Text className={'font-bold text-lg '}>{title}</Text>
            {
                isLoading && (
                    <ActivityIndicator size='small' color="#fffff"/>
                )
            }
        </TouchableOpacity>
    )
}

export default CustomButton