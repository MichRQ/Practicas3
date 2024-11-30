import { Button,View } from "react-native";

function OffersScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Home" onPress={()=>navigation.navigate('Home')}/>
            <Button title="Go to details" onPress={()=>navigation.navigate('Details')}/>
            <Button title="Go to settings" onPress={()=>navigation.navigate('Settings')}/>
            <Button title="Go to sell" onPress={()=>navigation.navigate('Sell')}/>
        </View>
    );
}

export default OffersScreen;