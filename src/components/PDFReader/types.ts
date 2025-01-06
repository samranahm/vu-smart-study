import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    PDF: { pdfUrl: string };
};

export type PDFReaderProps = {
    navigation: StackNavigationProp<RootStackParamList, 'PDF'>;
    route: RouteProp<RootStackParamList, 'PDF'>;
};