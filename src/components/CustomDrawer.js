import { Text, View, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import  Ionicons  from 'react-native-vector-icons/Ionicons'


export default function CustomDrawer(props){
    const {logout} = useContext(AuthContext)
    return (
        <View style={{flex:1, paddingBottom: 300}}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View style={{padding:20, borderTopWidth:1, borderTopColor: "#ccc"}}>
                <TouchableOpacity onPress={() => {logout()}}>
                    <View style={{flexDirection: "row", alignItems:"center"}}>
                        <Ionicons name="exit-outline" size={22}/>
                        <Text style={{color: 'black', paddingHorizontal: 2}}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}