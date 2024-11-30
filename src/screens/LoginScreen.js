import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import { NativeBaseProvider, Box, Heading, VStack, FormControl, HStack, Input, Button, Link, Center, useColorModeValue, Pressable } from "native-base";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const bgColor = useColorModeValue('light.background.50', 'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');
    const linkColor = useColorModeValue("indigo.500", "indigo.300"); 

    const handleLogin = () => {
        if (email && password) { 
            setIsAuthenticated(true);
            navigation.navigate('MainTab'); 
        } else {
            alert('Please enter your credentials'); 
        }
    };

    return (
        <Center w="100%" bg={bgColor} flex={1}>
            <VStack w="90%" maxW="290" space={5} alignItems="center">
                
                <Heading size="lg" fontWeight="600" color={textColor} textAlign="center">
                    Welcome
                </Heading>
                <Heading mt="1" color={textColor} fontWeight="medium" size="xs" textAlign="center">
                    Sign in to continue!
                </Heading>

                <VStack space={4} w="100%">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input value={email} onChangeText={setEmail} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" value={password} onChangeText={setPassword} />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: linkColor 
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link>
                    </FormControl>
                </VStack>

                <Button mt="5" colorScheme="indigo" w="100%" onPress={handleLogin}>
                    Login
                </Button>

                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color={textColor}>
                        I'm a new user.{" "} 
                    </Text>
                    <Pressable onPress={() => navigation.navigate('Register')}>
                        <Text color={linkColor} fontWeight="medium" fontSize="sm">Sign Up</Text>
                    </Pressable>
                </HStack>
            </VStack>
        </Center>
    );
};

export default LoginScreen;
