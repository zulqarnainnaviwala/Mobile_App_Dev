import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Login from "./Account/Login"
import Signup from "./Account/Signup"
import Welcome from './Welcome';
import ViewUsers from './ViewUsers';

const MainNavigator = createStackNavigator({
  Login:
    { screen: Login },

  Signup: {
    screen: Signup
  },
  Welcome:{
    screen : Welcome
  },
  ViewUsers:{
    screen : ViewUsers
  },
},
  
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
);

const App = createAppContainer(MainNavigator);

export default App;
