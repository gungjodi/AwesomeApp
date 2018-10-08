import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';

/*
This is to ignore warnings that comes when adding react-navigation, 
this issue has been reported to react-native and seems to be fixed on v0.57, 
but apparently react-native 0.57 cannot be run on windows 10  
*/
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

AppRegistry.registerComponent('AwesomeApp', () => App);
