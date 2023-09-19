import React, { useState, useEffect , useContext, useRef } from 'react';
import { DataContext } from './DataContext';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';

export const AppTopbar = (props) => {
    const [loadingHH, setLoadingHH]=useState(false);
    const [loadingP, setLoadingP]=useState(false);
    const toast = useRef(null);
    const Data=useContext(DataContext)

    // const showSuccess = (a) => {
    //     if (a==="Personal") {
    //         toast.current.show({severity:'success', summary: 'Success Message', detail:'Personal Data Loaded Successly Fully', life: 3000});  
    //     } else if (a==="Household") {
    //         toast.current.show({severity:'success', summary: 'Success Message', detail:'Household Data Loaded Successly Fully', life: 3000});  
    //     }
        
    // }
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/personal/",
        {
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
            }
            
        })
        .then( resp=> resp.json())
        .then( resp=>{ 
            console.log(resp.results)
            Data.setPersonal(resp.results)
            
           
            
        })
        .catch(error=>console.log(error));
         } ,[])
    
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/household/",
        {
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
            }
        })
        .then( resp=> 
            
            resp.json())
        .then( resp=> {
            console.log(resp.results)
            Data.setHousehold(resp);
          
            
            
        })
        .catch(error=>console.log(error));
        

    },[])

    return (
        <React.Fragment>
            
        <div className="layout-topbar clearfix">
        
            <button type="button" className="p-link layout-menu-button" onClick={props.onToggleMenu}>
                <span className="pi pi-bars pi-left" />
            </button>
            
            <div className="layout-topbar-icons">
            
           
            <h6 >पर्सा गाउँपालिका, गाउँ कार्यपालिकाको कार्यालय, मधेश प्रदेस,सर्लाही,नेपाल</h6>
            
            </div>
            <Toast ref={toast} />
            {/* <div className="layout-topbar-icons">
                <span className="layout-topbar-search">
                    <InputText type="text" placeholder="Search" />
                    <span className="layout-topbar-search-icon pi pi-search" />
                </span>
                <button type="button" className="p-link">
                    <span className="layout-topbar-item-text">Events</span>
                    <span className="layout-topbar-icon pi pi-calendar" />
                    <span className="layout-topbar-badge">5</span>
                </button>
                <button type="button" className="p-link">
                    <span className="layout-topbar-item-text">Settings</span>
                    <span className="layout-topbar-icon pi pi-cog" />
                </button>
                <button type="button" className="p-link">
                    <span className="layout-topbar-item-text">User</span>
                    <span className="layout-topbar-icon pi pi-user" />
                </button>
            </div> */}
        </div>
        </React.Fragment>
    );
}
