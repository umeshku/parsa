import React, { useState, useEffect, useRef, useContext} from 'react';
import  { DataContext } from '../DataContext';
import { PersonalForm } from './PersonalForm';
import { ApiService } from '../service/ApiService';
const apiService = new ApiService();

export const AddPersonal = (props) => {

    const Data=useContext(DataContext)
    const householdColumnsEmpty=Data.householdColumnsEmpty
    
console.log(props.match.params.id)
    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h5>Add New Personal {Data.household[props.match.params.id].Q7}</h5>
                    <PersonalForm houseid={props.match.params.id} id="null" type="new" personal={Data.personalColumnsEmpty}/>
                </div>
            </div>
        </div>
    );
}
