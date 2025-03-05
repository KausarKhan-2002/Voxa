import React from "react";
import PanelContainer from "./Components/PanelContainer/PanelContainer";
import store from "./Store/store";
import {Provider} from "react-redux"

const App = () => {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen bg-gray-800 text-white p-5">
        <PanelContainer />
      </div>
    </Provider>
  );
};

export default App;
