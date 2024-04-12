import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import {Keyboard, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  Image,
  Name,
  Status,
  LastLocation,
  FirstView,
  ProfileButton,
  ProfileButtonText,
  Card,
} from './styles';

export default class Cards extends Component {
  state = {
    newCharacter: '',
    characters: [],
    loading: false,
  };

  async componentDidMount() {
    const charactersInfo = await AsyncStorage.getItem('characters');

    if (charactersInfo) {
      this.setState({characters: JSON.parse(charactersInfo)});
    }
  }

  async componentDidUpdate(_, prevState) {
    const {characters} = this.state;

    if (prevState.characters !== characters) {
      await AsyncStorage.setItem('characters', JSON.stringify(characters));
    }
  }

  handleAddCharacter = async () => {
    try {
      const {characters, newCharacter} = this.state;
      this.setState({loading: true});

      // Chamada da API
      const response = await api.get(`/character/?name=${newCharacter}`);

      // Armazena o caminho para os resultados e seus dados 
      const path = response.data.results[0]

      if (characters.find(character => character.name === path.name)) {
        alert('Personagem já adicionado!');
        this.setState({
          loading: false,
          newCharacter: '',
        });
        return;
      }

      const results = {
        image: path.image,
        name: path.name,
        status: path.status,
        lastLocation: path.location.name,
        firtstSeenIn: path.episode[0].split("/").pop()
      };

      this.setState({
        characters: [...characters, results],
        newCharacter: '',
        loading: false
      });

      Keyboard.dismiss();
    } catch (error) {
      alert("Personagem não encontrado!");
      this.setState({
        loading: false,
        newCharacter: '',
      });
      Keyboard.dismiss();
    }
  };

  render() {
    const {characters, newCharacter, loading} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar personagem"
            value={newCharacter}
            onChangeText={text => this.setState({newCharacter: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddCharacter}
          />
          <SubmitButton loading={loading} onPress={this.handleAddCharacter}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <List
          showsVerticalScrollIndicator={false}
          data={characters}
          keyExtractor={characters => characters.name}
          renderItem={({item}) => (
            <Card>
              <Image source={{uri: item.image}} />
              <Name>{item.name}</Name>
              <Status>{item.status}</Status>
              <LastLocation>{item.lastLocation}</LastLocation>
              <FirstView>{item.firtstSeenIn}</FirstView>
              <ProfileButton
                onPress={() => {
                  this.props.navigation.navigate('cardsDetails', {character: item});
                }}>
                <ProfileButtonText>Ver detalhes</ProfileButtonText>
              </ProfileButton>
              <ProfileButton
                onPress={() => {
                  this.setState({
                    characters: this.state.characters.filter(
                      character => character.name !== item.name,
                    ),
                  });
                }}
                style={{backgroundColor: '#FFC0CB'}}>
                <ProfileButtonText>Excluir</ProfileButtonText>
              </ProfileButton>
            </Card>
          )}
        />
      </Container>
    );
  }
}