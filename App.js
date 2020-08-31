import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@modules/store";
import AppContainer from "@navigations";

import i18n from "@utils/i18n";
i18n.setI18nConfig();

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
         </PersistGate>
       </Provider>
    );
  }
}
