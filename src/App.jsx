import { useState } from "react";

import UserInput from "./components/UserInput/UserInput";
import List from "./components/List/List";

const list = [
  { name: 'Mahendra', age: 23, id: Math.random().toString() }
];

function App() {
  const [data, setData] = useState(list)
  const [isValid, setIsValid] = useState(true)

  const addDataHandler = (items) => {

    setData((prevData) => {
      return [items, ...prevData]
    })

  }


  return (
    <div>
      <UserInput addData={addDataHandler} />
      <List list={data} />

    </div>
  );
}

export default App;
