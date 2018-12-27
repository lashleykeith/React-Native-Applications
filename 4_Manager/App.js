import { 
  AppRegistry 
} from 'react-native';
import App from './src/App';


export default App;

AppRegistry.registerComponent('manager', ()=> App);
// https://github.com/react-community/create-react-native-app/issues/144
//set REACT_NATIVE_PACKAGER_HOSTNAME=my-custom-ip-address
//export REACT_NATIVE_PACKAGER_HOSTNAME
// ipconfig
//2:32