import { createStackNavigator  } from 'react-navigation';

import Home from '../containers/home.container';
import PeopleDetail from '../containers/peopleDetail.container';

const RootStack = createStackNavigator ({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'Star Wars',
        }),
    },
    PeopleDetail : {
        screen : PeopleDetail,
        navigationOptions:({navigation})=>({
            title:'Detail'
        })
    },
    initialRouteName:'Home'
});

export default RootStack;