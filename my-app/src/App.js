import React from 'react';
import imageinsrc from './imageinsrc.jpg';

import style from './style.css';
import './App.css';



function App(){
return (
    <div className="App">
	<h1 className="Tittle">My title</h1>
	<br/>
<img src={imageinsrc} className="imageInsrc" />
<br/>
	<img src='/imageinpublic.jpg' className="imageInPublick" />
</div>
  );
}
  

export default App;
