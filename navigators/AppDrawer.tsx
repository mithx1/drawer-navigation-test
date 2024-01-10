import { createDrawerNavigator } from "@react-navigation/drawer";
import TestScreen from "../screens/TestScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Test" component={TestScreen} />
      <Drawer.Screen name="Details" component={DetailScreen} />
    </Drawer.Navigator>
  );
}
export default AppDrawer;
