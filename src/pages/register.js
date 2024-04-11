import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    // Campos - Variáveis
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [curso, setCurso] = useState('')

    const navigation = useNavigation()

    const handleRegister = () => {
        Alert.alert(
            "Cadastro realizado com sucesso!",
            "Pressione OK para continuar.",
            [
                {text:"OK!", onPress: () => {
                        navigation.navigate('login')
                }}
            ]
            // { cancelable: false }
        )
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={ styles.input }
                placeholder="Nome"
                value={nome}    
                onChangeText={setNome}
            />
            <TextInput
                style={ styles.input }
                placeholder="Telefone"
                secureTextEntry={true}
                value={telefone}    
                onChangeText={setTelefone}
            />
            <TextInput
                style={ styles.input }
                placeholder="CPF"
                secureTextEntry={true}
                value={cpf}    
                onChangeText={setCpf}
            />
            <TextInput
                style={ styles.input }
                placeholder="E-mail"
                secureTextEntry={true}
                value={email}    
                onChangeText={setEmail}
            />
            <TextInput
                style={ styles.input }
                placeholder="Curso"
                secureTextEntry={true}
                value={curso}    
                onChangeText={setCurso}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister} >
                <Text style={ styles.buttonText }>SALVAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#2E867F',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    button: {
        backgroundColor: "#2E867F",
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default Register;