import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import RoomBooking from '../../containers/pages/RoomBooking';
import CheckOutPage from '../../containers/pages/CheckOutPage';
import PaymentPage from '../../containers/pages/PaymentPage';

const Router = createStackNavigator(
  {
    RoomBooking,
    CheckOutPage,
    PaymentPage,
  },
  {
    headerMode: 'none',
    initialRouteName: 'RoomBooking',
  },
);

export default createAppContainer(Router);
