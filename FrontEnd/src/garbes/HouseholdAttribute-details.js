import { Panel } from 'primereact/panel';
import React from 'react';

function HouseholdAttributeDetails(props){
   
   
    return(
        <Panel header="Details">
            {props.hhatt ? (
                <div>
                    <h5>{props.hhatt.id}</h5>
                    <p>{props.hhatt.linked_table}</p>

                </div>
                
            ): null

            }
                        
                        
        </Panel>
        
    )
}
export default HouseholdAttributeDetails