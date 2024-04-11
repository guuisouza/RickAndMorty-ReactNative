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
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
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

    if (prevState.users !== characters) {
      await AsyncStorage.setItem('characters', JSON.stringify(characters));
    }
  }

  handleAddCharacter = async () => {
    try {
      const {characters, newCharacter} = this.state;
      this.setState({loading: true});

      const response = await api.get(`/character/?name=${newCharacter}`);

      if (characters.find(character => character.name === response.data.name)) {
        alert('Personagem já adicionado!');
        this.setState({
          loading: false,
          newCharacter: '',
        });
        return;
      }

      const data = {
        image: response.data.image,
        name: response.data.name,
        status: response.data.status,
        lastLocation: response.data.location.name,
        firtstSeenIn: response.data.episode[0].split("/").pop(),
      };

      this.setState({
        characters: [...characters, data],
        newCharacter: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      alert('Personagem não encontrado!');
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
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
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
            <User>
              <Avatar source={{uri: item.avatar}} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton
                onPress={() => {
                  this.props.navigation.navigate('user', {user: item});
                }}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
              <ProfileButton
                onPress={() => {
                  this.setState({
                    users: this.state.users.filter(
                      user => user.login !== item.login,
                    ),
                  });
                }}
                style={{backgroundColor: '#FFC0CB'}}>
                <ProfileButtonText>Excluir</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}