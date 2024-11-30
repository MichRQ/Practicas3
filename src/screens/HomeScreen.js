import { Button, View } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='Go to details' onPress={() => navigation.navigate('Details')}/>
            <Button title="Go to settings" onPress={()=>navigation.navigate('Settings')}/>
            <Button title="Go to offers" onPress={()=>navigation.navigate('Offers')}/>
            <Button title="Go to sell" onPress={()=>navigation.navigate('Sell')}/>
        </View>
    );
}

export default HomeScreen;