import { Slot ,Stack } from "expo-router";
import { useFonts } from "expo-font";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded,fontLoadingError] = useFonts({

    LMBold:require("../assets/fonts/LexendMega-Bold.ttf"),
    LM : require("../assets/fonts/LexendMega-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }
  console.log('fontsLoaded:', fontsLoaded);
  console.log('fontLoadingError:', fontLoadingError);

  return (
    <Stack initialRouteName="home">
          <Stack.Screen name="home" />
          <Stack.Screen name="calcul" />
    </Stack>
  )
  
};

export default Layout;