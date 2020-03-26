import React from 'react'
import { directive } from '@babel/types'
//Inside Split.js we will import React so that we can use JSX.

//when creating your component capitalize the first letter
function Split() {
    return (
        //remember className not class
        <div className='split'>
        This is the content of the split component. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        </div>
    );
}

//Now we need to export this component 
//so that we can import it into the App. 
export default Split;