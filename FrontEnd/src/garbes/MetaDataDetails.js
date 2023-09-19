import { Panel } from 'primereact/panel';
import React, { useState, useEffect, useRef} from 'react';
import { TabView,TabPanel } from 'primereact/tabview';

export const MetaDataDetails = (rowData) => {
    console.log(rowData.match.params.id)
   const [record, setRecord]=useState(null)

   useEffect(()=>{
    fetch(`http://127.0.0.1:8000/api/hhatt/${rowData.match.params.id}/`,
    {
        method: 'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
        }
    })
    .then( resp=> resp.json())
    .then( resp=> setRecord(resp))
    .catch(error=>console.log(error))

},[])
console.log(record)
const con=(record)=> Object.keys(record).map(function(keyName, keyIndex) {

    // use keyName to get current key's name
    return(
    <div>
    <h3>{keyName}: {record[keyName]}</h3>
    </div>
)
    // and a[keyName] to get its value
  })

    return(
        <TabView >
    <TabPanel header={record && record.id+'Detail of Selected' }>
      
        Content II{record && con(record)}
    </TabPanel>
    <TabPanel header="Header II">
        
        
    </TabPanel>
    <TabPanel header="Header III">
        Content III
    </TabPanel>
    </TabView>
       
        
    )
}
export default MetaDataDetails