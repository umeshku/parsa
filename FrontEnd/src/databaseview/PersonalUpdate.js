import React, { useContext} from 'react';

import  { DataContext } from '../DataContext';

import { PersonalForm } from './PersonalForm';


export const PersonalUpdate = (props) => {
    const Data=useContext(DataContext)
  
    const personal=Data.personal[props.match.params.id]
    
    console.log(props.match.params.id)
    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h1>Update Personal of {personal && personal.Q13} </h1>
                    <PersonalForm id={props.match.params.id} type="update" personal={personal}/>
                </div>
            </div>
        </div>
    );
}
