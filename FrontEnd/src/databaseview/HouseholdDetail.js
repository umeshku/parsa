import { Panel } from 'primereact/panel';
import React, { useState, useEffect, useRef, useContext} from 'react';
import { TabView,TabPanel } from 'primereact/tabview';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { ProductService } from '../service/ProductService';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'primereact/tooltip';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Chart } from 'primereact/chart';
import { Link } from 'react-router-dom';
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel'
import { DataContext } from '../DataContext';
import { HouseholdForm } from './HouseholdForm';
import { Map, Map1 } from './Map'
import { ApiService } from '../service/ApiService';
const apiService = new ApiService();

export const HouseholdDetail = (rowData) => {
    
const passedId=rowData.match.params.id
const Data=useContext(DataContext)
const householdColumnsEmpty=Data.householdColumnsEmpty
const [rows, setRows] = useState([10]);
const [ward,setWard]=useState("");
const [search,setSearch]=useState("");
const [offset, setOffset]=useState([0]);
const [ordering, setOrdering]=useState("");
const [id, setId]=useState(rowData.match.params.id)
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


const [houseRecord, setHouseRecord]=useState(household[passedId])
const [persons,setPersons]=useState()
const [searchKey,setSearchKey]=useState(houseRecord.KEY)

// useEffect(() => {
//     findIndexById(passedId)
//     console.log(indexid)
//     setHouseRecord(household[indexid])
//     setSearchKey(houseRecord & houseRecord.KEY)
//   }, []);

  
 useEffect(() => {
    const results = Data.personal.filter(rec =>
      rec.PARENT_KEY.includes(searchKey)
    );
    setPersons(results);
  }, [searchKey]);
 
 
//personal Table
const defaultCol = [
    {field: 'Ward', header: 'Ward', },
            {field: 'Q13', header: 'Q13. नाम', },
            {field: 'Q14', header: 'Q14.परिवार मूलीको के नाता पर्नु हुन्छ ?', },
            {field: 'Q15', header: 'Q15. लिङ्ग कुन हो ? ', },
                
];
const columns = Data.personalColumns
let emptyRecord = {
    };
    const [record, setRecord] = useState({});
    const [selectedRecords, setSelectedRecords] = useState(null);
    const [recordDialog, setRecordDialog] = useState(false);
    const [deleteRecordDialog, setDeleteRecordDialog] = useState(false);
    const [deleteRecordsDialog, setDeleteRecordsDialog] = useState(false);
          
        const [addUpdateDetail, setAddUpdateDetail]=useState();
        const [submitted, setSubmitted] = useState(false);
        const [globalFilter, setGlobalFilter] = useState(null);
        const toast = useRef(null);
        const dt = useRef(null);
        const [selectedStatus, setSelectedStatus] = useState(null);

        const [selectedColumns, setSelectedColumns] = useState(defaultCol);
                //Here start my code
        const [attribute, setAttribute]=useState({})

        const onColumnToggle = (event) => {
            let selectedColumns = event.value;
            let orderedSelectedColumns = columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
            setSelectedColumns(orderedSelectedColumns);
            };
        const columnComponents = selectedColumns.map(col=> {
            
            return <Column key={col.field} field={col.field} header={col.header} headerStyle={{ width: '200px' }} sortable filter/>;
      
        
            });
        const openNew = () => {
            setAddUpdateDetail('Add Data');
            setRecord(emptyRecord);
            setSubmitted(false);
            setRecordDialog(true);
            console.log(record)

        }
        const hideDialog = () => {
            setSubmitted(false);
            setRecordDialog(false);
        }
        const hideDeleteRecordDialog = () => {
            setDeleteRecordDialog(false);
        }
    
        const hideDeleteRecordsDialog = () => {
            setDeleteRecordsDialog(false);
        }
        const saveRecord = () => {
            // let _records=[...Data.household]
            // let _record={...record }       

            if (addUpdateDetail==="Add Data") {
                fetch('http://127.0.0.1:8000/api/hhatt/',
                {
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
                    },
                    body: JSON.stringify(record),
                })
                Data.household.push(record)
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Record Added', life: 3000 });
            }else{
                fetch(`http://127.0.0.1:8000/api/hhatt/${record.id}/`,
                {
                    method: 'PUT',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
                    },
                    body: JSON.stringify(record),

                })
                const index=findIndexById(record.id)
                Data.household[index]=record
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'record Updated', life: 3000 });
                console.log(JSON.stringify(record))
            }
    
                setRecordDialog(false);
                setRecord(emptyRecord);
            
        }
        const editProduct = (record) => {
            setAddUpdateDetail('Update Data');
            setRecord({ ...record });
            setRecordDialog(true);
        }
        const detailView = (record) => {
            setAddUpdateDetail('Detail View');
            setRecord({ ...record });
            
            // to='/meta/1/details';
        }
        const confirmDeleteProduct = (record) => {
            setRecord(record);
            setDeleteRecordDialog(true);
        }
    
        const deleteProduct = () => {
            let _records = persons.filter(val => val.id !== record.id);
            setPersons(_records);
            let _personal=Data.personal.filter(val => val.id !== record.id)
            Data.setPersonal(_personal)
            setDeleteRecordDialog(false);
            setRecord(emptyRecord);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'record Deleted', life: 3000 });
        }
    
        const findIndexById = (id) => {
            let index = -1;
            for (let i = 0; i < Data.household.length; i++) {
                if (Data.household[i].id === id) {
                    index = i;
                    break;
                }
            }
    
            return index;
        }

//expert to CSV
const exportCSV = () => {
    dt.current.exportCSV();
}
//expert to excel
const exportExcel = () => {
console.log("abc")
import('xlsx').then(xlsx => {
    const worksheet = xlsx.utils.json_to_sheet(exportCSV);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    saveAsExcelFile(excelBuffer, 'Attibute');
});
}

const saveAsExcelFile = (buffer, fileName) => {
import('file-saver').then(FileSaver => {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
});
}
const confirmDeleteSelected = () => {
    setDeleteRecordsDialog(true);
}

const deleteSelectedRecords = () => {
    let _records = Data.household.filter(val => !selectedRecords.includes(val));
    Data.setHousehold(_records);
    setDeleteRecordsDialog(false);
    setSelectedRecords(null);
    toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Records Deleted', life: 3000 });
}

const onCategoryChange = (e) => {
    let _record = { ...record };
    _record['is_multiple'] = e.value;
    setRecord(_record);
}

const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _product = { ...record };
    _product[`${name}`] = val;

    setRecord(_product);
}

const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _product = { ...record };
    _product[`${name}`] = val;

    setRecord(_product);
}

const leftToolbarTemplate = () => {
    return (
        <React.Fragment>
            <Link to={`/addpersonal/${passedId}`}>
            <Button label="नयाँ परिवार सदस्य" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={openNew} />
            </Link>
            {/* <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedRecords || !selectedRecords.length} /> */}
        </React.Fragment>
    )
}
    
const rightToolbarTemplate = () => {
    return (
        <React.Fragment>
                        
            <Button label="ExportCSV" icon="pi pi-upload" className="p-mr-2 p-button-help" onClick={exportCSV} />
            <Button label="Export XLS" icon="pi pi-upload" className="p-button-help" onClick= {exportExcel}/>
        </React.Fragment>
    )
}



const imageBodyTemplate = (rowData) => {
    return (
        <>
            <span className="p-column-title">Image</span>
            <img src={`assets/demo/images/product/${rowData.image}`} alt={rowData.image} className="product-image" />
        </>
    )
}




const infoIcon=<FontAwesomeIcon icon={faInfoCircle} />

const actionBodyTemplate = (rowData) => {
    return (
        
        <div className="actions">
            <Link to={`/updatepersonal/${Data.personal.indexOf(rowData)}`}>
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2"  />
            </Link>
            <Button icon="pi pi-trash" className="p-button-rounded p-button-warning p-mr-2" onClick={() => confirmDeleteProduct(rowData)} />
            <Link to={`/personaldetail/${Data.personal.indexOf(rowData)}`}>
            <Button label="Detail" className="p-button-rounded p-button-info" onClick={() => detailView(rowData)}/>
            </Link>              
        </div>
    );
}

const header = (
    <div className="table-header">
        <h5 className="p-m-0">Select Column</h5>
        
        <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
                 
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
        </span>
    </div>
);

const recordDialogFooter = (

            <>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label={addUpdateDetail} icon="pi pi-check" className="p-button-text" onClick={saveRecord} />
            </>
        ) ;

const deleteRecordDialogFooter = (
    <>
        <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteRecordDialog} />
        <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
    </>
);
const deleteRecordsDialogFooter = (
    <>
        <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteRecordsDialog} />
        <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedRecords} />
    </>
);
const frequency = (arr,fieldname)=>{
    if (arr) {
        let b={};
        arr.map(el =>el[fieldname]).map(a=>{
            b[a]=(b[a]|| 0)+1});
        return b;
    }           
       };
const test= frequency(Data.household,"column_category");
console.log(test);
let leb=[];
let da=[];
const label= Data.household && Object.keys(test).map(function(keyName, keyIndex) {
    leb.push(keyName)
    da.push(test[keyName])

          
});
console.log(leb,da)
const doughnutData = {
    
    labels: leb,
    datasets: [
        {
            data: da,
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }
    ]
};
let sn=0;
const rowIndex=(rowData)=>{
    sn=Data.personal.indexOf(rowData)
    return(
        <React.Fragment>{sn+1}</React.Fragment>
        
    )
}


const con=(houseRecord)=> Object.keys(houseRecord).map(function(keyName, keyIndex) {

    // use keyName to get current key's name
    return(
    <div>
    <h3>{keyName}: {houseRecord[keyName]}</h3>
    </div>
)
    // and a[keyName] to get its value
  })

    return(
        <TabView >
    <TabPanel header={houseRecord && houseRecord.Q7}>
      
        <h1>Details of {houseRecord.Q7} House</h1> 
        <div className="p-grid">
            <div className="p-col-6">
                <div className="card">
                <span className="p-column-title">Image</span>
                <img src={`assets/demo/images/product/bamboo-watch.jpg`} width="200px" height="200px" className="product-image" />
                </div>
            </div>
            <div className="p-col-6">
                <div className="card">
                <Map1 household={houseRecord}/>
               {/* <a href="http://www.google.com/maps/place/49.46800006494457,17.11514008755796"> Loca</a> */}
                </div>
            </div>
        </div>
        <HouseholdForm id={rowData.match.params.id} type="detail" household={houseRecord}/>
    </TabPanel>
    <TabPanel header="Members of Household, परिवार सदस्यहरु">
    <div>
                  
        <div className="p-grid crud-demo">
            <div className="p-col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <h1>{houseRecord.Q7} घरमा रहेको परिवार सदस्यहरु</h1>
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    <DataTable ref={dt} value={ persons } selection={selectedRecords} onSelectionChange={(e) => setSelectedRecords(e.value)}
                        dataKey="id" rowIndexVar="row" paginator rows={10} scrollable  rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Household Data"
                        globalFilter={globalFilter} emptyMessage="No Data.household found." header={header}>
                        <Column header="Action" headerStyle={{ width: '200px' }} body={actionBodyTemplate} ></Column>
                        <Column header="SN" headerStyle={{ width: '50px' }} body={rowIndex} ></Column>
                        {columnComponents}
                        
                        
                    </DataTable>

                    <Dialog visible={deleteRecordDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteRecordDialogFooter} onHide={hideDeleteRecordDialog}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                            {record && <span>Are you sure you want to delete <b>{record.name}</b>?</span>}
                        </div>
                    </Dialog>

                    
                </div>
            </div>
        </div>
        </div>

        
    </TabPanel>
    
    </TabView>
       
        
    )
}
export default HouseholdDetail