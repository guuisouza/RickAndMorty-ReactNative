import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #fff;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #2E867F;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList`
  margin-top: 20px;
`;

export const Card = styled.View`
  flex-direction: column;
  background: #fff;
  margin: 10px 20px 30px;
  border: 2px solid #2E867F;
  border-radius: 10px
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  padding-top: 5px
`;

export const ImageContainer = styled.View`
  width: 40%; 
  height: 100%; 
  padding: 10px 0 0 10px;
`

export const Image = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background: #fff;
  padding: 8px;
`
export const InfoText = styled.Text`
  font-size: 14px;
  color: #35403C;
`

export const Name = styled.Text`
  font-size: 24px;
  color: #35403C;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Status = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #35403C;
`;

export const LastLocation = styled.Text`
  font-size: 14px;
  font-weight:bold;
  color: #35403C;
`
export const FirstView = styled.Text`
  font-size: 14px;
  font-weight:bold;
  color: #35403C;
`

export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`

export const ProfileButton = styled(RectButton)`
  background: #2E867F;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin-bottom: 8px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;

export const Header = styled.View`
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const Avatarperfil = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Nameperfil = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bioperfil = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;