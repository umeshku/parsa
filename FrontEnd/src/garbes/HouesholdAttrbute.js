
import { Panel } from 'primereact/panel';
import React from 'react';

function HouseholdAttribute(props){
   const hhattClicked= hhatt=>evt=>{
       props.hhattClicked(hhatt)
   }
  
    return(
        <Panel header="List">
                        {props.hhatts && props.hhatts.map( hhatt=>{
                            return (
                            <div key={hhatt.id}>
                                <h5 onClick={hhattClicked(hhatt)}>{hhatt.linked_table}</h5></div>
                            )
                        })

                        }
                        
        </Panel>
        
    )
}
export default HouseholdAttribute