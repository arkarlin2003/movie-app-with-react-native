import {Tabs} from "expo-router";
import {Image, View} from "react-native";


const TabIcon = ({icon, color, focused}: { icon: string, color: string, focused: boolean }) => {
    return (
        <View className="flex items-center duration-300  justify-center w-[55px] h-[55px] rounded-full gap-2" style={{
            backgroundColor: focused ? 'rgba(255,156,1,0.2259497549019608)' : '',
        }}>
            <Image
                source={{
                    uri: icon
                }}
                resizeMode="contain"
                tintColor={color}
                className="w-7 h-7"
            />
        </View>
    );
};

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#FF9C01',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: "#1E1E2D",
                borderTopWidth: 1,
                borderTopColor: "#232533",
                height: 75,
                borderRadius: 50,
                overflow: "hidden",
                marginHorizontal: 20,
                paddingBottom:28,
                marginBottom: 25,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                position: "absolute",
            }
        }}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                tabBarIcon: ({color, focused}) => (
                    <TabIcon
                        icon={"https://github.com/adrianhajdin/aora/blob/main/assets/icons/home.png?raw=true"}
                        color={color}
                        focused={focused}

                    />
                )
            }}/>
            <Tabs.Screen name='create'
                         options={{
                             title: 'Create',
                             tabBarIcon: ({color, focused}) => (
                                 <TabIcon
                                     icon={"https://github.com/adrianhajdin/aora/blob/main/assets/icons/plus.png?raw=true"}
                                     color={color}
                                     focused={focused}
                                 />
                             )
                         }}/>
            <Tabs.Screen name='bookmark'
                         options={{
                             title: 'Bookmark',
                             tabBarIcon: ({color, focused}) => (
                                 <TabIcon
                                     icon={"https://github.com/adrianhajdin/aora/blob/main/assets/icons/bookmark.png?raw=true"}
                                     color={color}
                                     focused={focused}

                                 />
                             )
                         }}/>
            <Tabs.Screen name='profile'
                         options={{
                             title: 'Profile',
                             tabBarIcon: ({color, focused}) => (
                                 <TabIcon
                                     icon={"https://github.com/adrianhajdin/aora/blob/main/assets/icons/profile.png?raw=true"}
                                     color={color}
                                     focused={focused}

                                 />
                             )
                         }}/>
        </Tabs>
    )
}

export default TabsLayout