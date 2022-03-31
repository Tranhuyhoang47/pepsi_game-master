import React from "react";
import RootNavigator from "./src/Components/navigations/RootNavigator";
import {synthetic} from './src/redux/store';
import {Provider} from 'react-redux';


const App = () => {
  return (
    <Provider store={synthetic}>
      <RootNavigator />
    </Provider>
  );
};

export default App;