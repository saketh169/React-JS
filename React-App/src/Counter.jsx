import React , {useState} from 'react';

function Counter(){
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count=>count+1);
    }

    const decrement=()=>{
        setCount(count=>count-1);
    }

    const reset=()=>{
        setCount(0);
    }


    return(
        <div>
            <h2 style={{marginLeft: '70px'}}>Counter</h2>
            <p style={{ fontSize: '30px',marginLeft:'100px'}}>{count}</p>
            <button onClick={increment}>Increment</button>
             <button onClick={decrement}>Decrement</button>
              <button onClick={reset}>Reset</button>
        </div>
    );

}

export default Counter;



