import React, {Component} from 'react';
import {
  Container,
  ContainerDetails,
  Image,
  Origin,
  Gender,
  DetailName,
  Status,
  LastLocation,
  FirstView,
  InfoText,
  InfoContainer,
  DetailImage
} from './styles';

export default class CardsDetails extends Component {

  async componentDidMount() {}

  render() {
    const {route} = this.props;
    const {character} = route.params;
    console.log(character.gender)
    return (
      <Container>
        <ContainerDetails>
                <DetailImage>
                  <Image source={{ uri: character.image }} />
                </DetailImage>

                <InfoContainer>
                  <DetailName>{character.name}</DetailName>
                  <InfoText>Status:</InfoText>
                  <Status>{character.status}</Status>
                  <InfoText>Gênero:</InfoText>
                  <Gender gender={character.gender}>{character.gender}</Gender>
                  <InfoText>Última localização conhecida:</InfoText>
                  <LastLocation>{character.lastLocation}</LastLocation>
                  <InfoText>Origem:</InfoText>
                  <Origin>{character.origin}</Origin>
                  <InfoText>Primeira aparição:</InfoText>
                  <FirstView>Episódio {character.firtstSeenIn}</FirstView>
                </InfoContainer>
        </ContainerDetails>
      </Container>
    );
  }
}