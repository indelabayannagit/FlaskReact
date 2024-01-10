import { useState } from 'react';
import {FetchEmpData,CreateEmpData} from './empdata';


function App() {

  const [updateflag,setUpdateFlag]=useState(false)
  const UpdateData=()=>{
    setUpdateFlag(!updateflag)
  }
  return (
    <div className="App">
      <CreateEmpData updateflag={UpdateData}/>
      <FetchEmpData updateflag={UpdateData}/>
    </div>
  );
}

export default App;
