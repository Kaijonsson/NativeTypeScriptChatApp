import {StackScreenProps} from "@react-navigation/stack"



export type RootStackParamList = {
    LoginRegScreen: undefined;
    ChooseUserNameScreen: {user: object};
    ChatScreen: {user: object};

  }

export  type Props = StackScreenProps<RootStackParamList, 'ChooseUserNameScreen'>;
