import React, { Component } from "react";
import Steps from "./Steps";
import styles from "./App.less";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Steps
          current={1}
          source={[
            { id: "1", title: "开始", description: "开始节点" },
            { id: "2", title: "进行中", description: "开始节点" },
            { id: "3", title: "未开始", description: "开始节点" }
          ]}
        />
      </div>
    );
  }
}

export default App;
