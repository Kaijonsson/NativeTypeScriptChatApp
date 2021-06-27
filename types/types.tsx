import {StackScreenProps} from "@react-navigation/stack"


interface user {
  name: string,
  id: string,
}

export type RootStackParamList = {
    LoginRegScreen: undefined;
    ChooseUserNameScreen: {user: user};
    ChatScreen: {user: user};
  }

export  type Props = StackScreenProps<RootStackParamList, 'ChooseUserNameScreen'>;
