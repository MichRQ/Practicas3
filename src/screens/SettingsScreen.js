import { Button, View } from "react-native";

function SettingsScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Home" onPress={()=>navigation.navigate('Home')}/>
            <Button title="Go to details" onPress={()=>navigation.navigate('Details')}/>
            <Button title="Go to offers" onPress={()=>navigation.navigate('Offers')}/>
            <Button title="Go to sell" onPress={()=>navigation.navigate('Sell')}/>
        </View>
    );
}

export default SettingsScreen;