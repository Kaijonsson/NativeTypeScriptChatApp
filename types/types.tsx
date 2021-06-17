import {StackScreenProps} from "@react-navigation/stack"



export type RootStackParamList = {
    LoginRegScreen: undefined;
    ChooseUserNameScreen: Object;
    ChatScreen: undefined;

  }

export  type Props = StackScreenProps<RootStackParamList, 'ChooseUserNameScreen'>;