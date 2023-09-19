import React, {  useContext} from 'react';
import { HouseholdForm } from './HouseholdForm';
import  { DataContext } from '../DataContext';


export const AddHousehold = () => {

    const Data=useContext(DataContext)
    const householdColumnsEmpty=Data.householdColumnsEmpty
    

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h5>Add New Household</h5>
                    <HouseholdForm id="null" type="new" household={householdColumnsEmpty}/>
                </div>
            </div>
        </div>
    );
}
