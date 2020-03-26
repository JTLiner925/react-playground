import React from 'react';
import { directive } from '@babel/types';
import './Split.css';
//Inside Split.js we will import React so that we can use JSX.

//when creating your component capitalize the first letter
//when using props.children you need to put props in the arg
function Split(props) {
    return (
        //remember className not class
        //if you want to put the text in the 
        //app file you must use {props.children}
        <div className="split">
      {props.children}
    </div>
    );
}

//Now we need to export this component 
//so that we can import it into the App. 
export default Split;