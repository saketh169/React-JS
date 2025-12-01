import React from 'react';
import Form2 from './Form2';
import Display from './Display';
//mport { useState } from 'react';


function Structure({details}){


    return(
        <>
        <Form2 details={details} />
        <Display />
        </>
    )

}


export default Structure;
