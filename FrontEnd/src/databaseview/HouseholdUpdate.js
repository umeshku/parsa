import React, { useState, useEffect, useRef, useContext} from 'react';
import { HouseholdForm } from './HouseholdForm';
import  { DataContext } from '../DataContext';
import { Household } from './Household';
import { Link } from 'react-router-dom';
import { ApiService } from '../service/ApiService';
const apiService = new ApiService();

export const HouseholdUpdate = (props) => {
    const Data=useContext(DataContext)
    const householdColumnsEmpty=Data.householdColumnsEmpty
    const [rows, setRows] = useState([10]);
    const [ward,setWard]=useState("");
    const [search,setSearch]=useState("");
    const [offset, setOffset]=useState([0]);
    const [ordering, setOrdering]=useState("");
    const [id, setId]=useState(props.match.params.id)
    const [Key, setKey]=useState("")
    const [household,setHouseholdData]=useState([])
    useEffect(() => {
        fetchHouseholdData(ward,search,rows,offset,ordering,id,Key);
        console.log(id)
      }, []);
      const fetchHouseholdData = async (ward,search,rows,offset,ordering,id,Key) => {
        try {
          const data = await apiService.getHousehold(ward,search,rows,offset,ordering,id,Key); // You may need to adjust the API request to include pagination parameters
          console.log('haha');
          setHouseholdData(data.results)
          console.log(data.count);
          console.log('Household Data:', data.results);
        } catch (error) {
          console.error('Error fetching household data:', error);
        }
      };

    
    

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                {household.length >0 && (  <h1>Update Household of {console.log(household[0].Ward)} {household[0].Q7}</h1>)}
                    
                   
                {household.length >0 &&   ( <HouseholdForm id={id} type="update" household={household[0]}/>)}
                </div>
            </div>
        </div>
    );
}
