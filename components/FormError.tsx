import {Text} from "react-native";


interface Props {
    message: string;
}
const FormError = ({message}:Props) => {
    return (
        <Text className={'text-red-500 text-sm mt-3'}>{message}</Text>
    )
}

export default FormError;