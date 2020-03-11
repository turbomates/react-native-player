import React, { Component } from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { allReducers } from "./src/reducers";
import { PlaylistContainer } from "./src/containers/playlist";
import { root } from "./src/sagas";
import { View } from "react-native";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(root);

interface State {
  isReady: boolean;
}

export default class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isReady: true
    };
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <View>
        <Provider store={store}>
          <PlaylistContainer />
        </Provider>
      </View>
    );
  }
}
