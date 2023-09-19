import React, { useState, useEffect, useRef} from 'react';
import HouseholdAttribute from './HouesholdAttrbute';
import HouseholdAttributeDetails from './HouseholdAttribute-details';
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

export const Meta = () => {
    
    
        //from CRUD
        let emptyRecord11 = {
            id: null,
            name: '',
            image: null,
            description: '',
            category: null,
            price: 0,
            quantity: 0,
            rating: 0,
            inventoryStatus: 'INSTOCK'
        };
        const defaultCol = [
            {field: 'id', header: 'ID', filter:'choice'},
            {field: 'linked_table', header: 'Linked_table', },
            {field: 'column_category', header: 'Category'},
            {field: 'meta_column', header: 'Meta Column'},
            
        ];
        // const columns=[];
        const columns = [
                {field: 'id', header: 'ID', filter:'choice'},
                {field: 'linked_table', header: 'Linked_table', },
                {field: 'column_category', header: 'Category'},
                {field: 'meta_column', header: 'Meta Column'},
                {field: 'odk_data_type', header: 'ODK Data Type',},
                {field: 'choice_list', header: 'Choice List',},
                {field: 'odk_question', header: 'Odk Question'},
                {field: 'datatype', header: 'Data Type'},
                {field: 'display_name', header: 'Display Name'},
                {field: 'required', header: 'Required'},
                {field: 'is_multiple', header: 'Is Mmultiple',},
                             
            ];
        
        let emptyRecord = {
            id: undefined,
            linked_table: '',
            column_category: '',
            meta_column:'',
            odk_data_type: '',
            choice_list: '',
            odk_question: '',
            datatype: '',
            display_name: '',
            required: '',
            response: '',
            is_multiple:'',
            SN: undefined
        };
    
        const [records, setRecords] = useState(null);
        const [recordDialog, setRecordDialog] = useState(false);
        const [deleteRecordDialog, setDeleteRecordDialog] = useState(false);
        const [deleteRecordsDialog, setDeleteRecordsDialog] = useState(false);
        const [record, setRecord] = useState({});
        const [selectedRecords, setSelectedRecords] = useState(null);
        const [addUpdateDetail, setAddUpdateDetail]=useState();
        const [submitted, setSubmitted] = useState(false);
        const [globalFilter, setGlobalFilter] = useState(null);
        const toast = useRef(null);
        const dt = useRef(null);
        const [selectedStatus, setSelectedStatus] = useState(null);

        const [selectedColumns, setSelectedColumns] = useState(defaultCol);
                //Here start my code
    // full hh attribute 
        const [hhatts, setHhatt]=useState([]);
    // Selectted hh attribute details
        const [selectedHhatt, setSelectedHhatt]=useState(null);

        useEffect(()=>{
            fetch("http://127.0.0.1:8000/api/hhatt/",
            {
                method: 'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
                }
            })
            .then( resp=> resp.json())
            .then( resp=> setRecords(resp))
            .then( resp=> setHhatt(resp))
            .catch(error=>console.log(error))

        },[])

       


    const hhattClicked= hhatt=>{
        setSelectedHhatt(hhatt);
    }
    
    
        // useEffect(() => {
        //     const productService = new ProductService();
        //     productService.getProducts().then(data => setRecords(data));
        // }, []);

        const onColumnToggle = (event) => {
            let selectedColumns = event.value;
            let orderedSelectedColumns = columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
            setSelectedColumns(orderedSelectedColumns);
        };
        
        const statuses=['1','2'];
        const statusFilter = <Dropdown value={selectedStatus} options={statuses} onChange={(e) => setSelectedStatus(e.value)} placeholder="Select a Status" className="p-column-filter" showClear />;   
        
        const columnComponents = selectedColumns.map(col=> {
            
                return <Column key={col.field} field={col.field} header={col.header} headerStyle={{ width: '200px' }} sortable filter/>;
          
            
        });

        
        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    
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
            // let _records=[...records]
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
                records.push(record)
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
                records[index]=record
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'record Updated', life: 3000 });
                console.log(JSON.stringify(record))
            }
            

                // fetch(`http://127.0.0.1:8000/api/hhatt/${record.id}/`,
                // {
                //     method: 'PUT',
                //     headers:{
                //         'Content-Type':'application/json',
                //         'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
                //     },
                //     body: JSON.stringify(record),

                // })
                // console.log(JSON.stringify(record))
                   
    
            //  setRecords(_records);
                setRecordDialog(false);
                setRecord(emptyRecord);
            // }
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
            let _records = records.filter(val => val.id !== record.id);
            setRecords(_records);
            setDeleteRecordDialog(false);
            setRecord(emptyRecord);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'record Deleted', life: 3000 });
        }
    
        const findIndexById = (id) => {
            let index = -1;
            for (let i = 0; i < records.length; i++) {
                if (records[i].id === id) {
                    index = i;
                    break;
                }
            }
    
            return index;
        }
    
        const createId = () => {
            let id = '';
            let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < 5; i++) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return id;
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
            let _records = records.filter(val => !selectedRecords.includes(val));
            setRecords(_records);
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
                    <Button label="New" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={openNew} />
                    <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedRecords || !selectedRecords.length} />
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
        const getUnique=(arr, comp)=> {
            if (arr) {
                const unique = arr
                
              //store the comparison values in array
              .map(e => e[comp])
              
              // store the keys of the unique objects
              .map((e, i, final) => final.indexOf(e) === i && i)
        
              // eliminate the dead keys & store unique objects
              .filter(e => arr[e])
        
              .map(e => arr[e]);
        
                return unique;
            }
            
          }
        const uniqueTable=getUnique(records,"linked_table")
    
        const codeBodyTemplate = (rowData) => {
            return (
                <>
                    <span className="p-column-title">Code</span>
                    {rowData.linked_table}
                </>
            );
        }
    
        const nameBodyTemplate = (rowData) => {
            return (
                <>
                    <span className="p-column-title">Name</span>
                    {rowData.name}
                </>
            );
        }
    
        const imageBodyTemplate = (rowData) => {
            return (
                <>
                    <span className="p-column-title">Image</span>
                    <img src={`assets/demo/images/product/${rowData.image}`} alt={rowData.image} className="product-image" />
                </>
            )
        }
    
        const priceBodyTemplate = (rowData) => {
            return (
                <>
                    <span className="p-column-title">Price</span>
                    {formatCurrency(rowData.price)}
                </>
            );
        }
    
        const categoryBodyTemplate = (rowData) => {
            return (
                <>
                    <span className="p-column-title">Category</span>
                    {rowData.category}
                </>
            );
        }
    
        const ratingBodyTemplate = (rowData) => {
            return (
                <>
                    <span className="p-column-title">Reviews</span>
                    <Rating value={rowData.rating} readonly cancel={false} />
                </>
            );
        }
       
        // const statusBodyTemplate = (rowData) => {
        //     return (
        //         <>
        //             <span className="p-column-title">Status</span>
        //             <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>
        //         </>
        //     )
        // }
    const infoIcon=<FontAwesomeIcon icon={faInfoCircle} />
    
        const actionBodyTemplate = (rowData) => {
            return (
                
                <div className="actions">
                    <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editProduct(rowData)} />
                    <Button icon="pi pi-trash" className="p-button-rounded p-button-warning p-mr-2" onClick={() => confirmDeleteProduct(rowData)} />
                    <Link to={`/meta/${rowData.id}`}>
                    <Button label="Detail" className="p-button-rounded p-button-info" onClick={() => detailView(rowData)}/>
                    </Link>                 
                </div>
            );
        }
    
        const header = (
            <div className="table-header">
                <h5 className="p-m-0">Manage Records</h5><br/>
                <div style={{ textAlign:'left' }}>
                <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
                <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
            </div>
                
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
       const test= frequency(records,"column_category");
        console.log(test);
        let leb=[];
        let da=[];
        const label= records && Object.keys(test).map(function(keyName, keyIndex) {
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
            sn=records.indexOf(rowData)
            return(
                <React.Fragment>{sn+1}</React.Fragment>
                
            )
        }

        return (
            
        <div>
            <div className="card">
                    <h5 className="centerText">Doughnut Chart</h5>
                    <Chart type="doughnut" data={doughnutData} />
                </div>
        <div className="p-grid">
            <h5>Panels</h5>
            <div className="p-grid">
                <div className="p-col">
                    <HouseholdAttribute hhatts={hhatts} hhattClicked={hhattClicked} />
                </div>
                <div className="p-col">
                Looping through Array
                {/* {test && test} */}
            <select>
              
              
              {test && Object.keys(test).map(function(keyName, keyIndex) {
    		return (
      			<option key={keyName}>
					{keyName}:{test[keyName]}
                    {console.log(test[keyName])}
          		</option>
    		)
		})}
                
              
            </select>
                </div>
            </div>
        </div>
        
        <div className="p-grid crud-demo">
            <div className="p-col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    <DataTable ref={dt} value={records} selection={selectedRecords} onSelectionChange={(e) => setSelectedRecords(e.value)}
                        dataKey="id" rowIndexVar="row" paginator rows={10} scrollable  rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
                        globalFilter={globalFilter} emptyMessage="No records found." header={header}>
                        {/* <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column> */}
                         {/* <Column field="linked_table" header="linked_table" sortable body={codeBodyTemplate} filter filterPlaceholder="Search by name">></Column>
                        <Column field="column_category" header="column_category" sortable body={nameBodyTemplate}></Column> */}
                        <Column header="Action" headerStyle={{ width: '200px' }} body={actionBodyTemplate} ></Column>
                        <Column header="SN" headerStyle={{ width: '200px' }} body={rowIndex} ></Column>
                        {columnComponents}
                        {/* <Column header="Image" body={imageBodyTemplate}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                        <Column field="category" header="Category" sortable body={categoryBodyTemplate}></Column>
                        <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable></Column> */}
                        
                    </DataTable>

                    <Dialog visible={recordDialog} style={{ width: '450px' }} header={addUpdateDetail} modal className="p-fluid " footer={recordDialogFooter} onHide={hideDialog}>
                        {/* {record.image && <img src={`assets/demo/images/product/${record.image}`} alt={record.image} className="product-image" />} */}
                        <div className="p-field">
                            <label htmlFor="id">ID</label>
                            <InputText id="sn" value={record && record.id} onChange={(e) => onInputChange(e, 'ID')} required autoFocus className='.p-field'/>
                        </div>
                        <div className="p-field">
                            <label htmlFor="linked_table">Linked Table</label>
                            <InputText id="linked_table" value={record && record.linked_table} className='.p-field' onChange={(e) => onInputChange(e, 'linked_table')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="meta_column">meta_column </label>
                            <InputText id="meta_column" value={record && record.meta_column} onChange={(e) => onInputChange(e, 'meta_column')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="odk_data_type">odk_data_type</label>
                            <InputText id="odk_data_type" value={record && record.odk_data_type} onChange={(e) => onInputChange(e, 'odk_data_type')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="choice_list">choice_list</label>
                            <InputText id="choice_list" value={record.choice_list} onChange={(e) => onInputChange(e, 'choice_list')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="odk_question">odk_question</label>
                            <InputText id="odk_question" value={record && record.odk_question} onChange={(e) => onInputChange(e, 'odk_question')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="datatype">datatype</label>
                            <InputText id="datatype" value={record && record.datatype} onChange={(e) => onInputChange(e, 'datatype')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="description">display_name</label>
                            <InputText id="description" value={record.display_name} onChange={(e) => onInputChange(e, 'display_name')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="required">required</label>
                            <InputText id="required" value={record && record.required} onChange={(e) => onInputChange(e, 'required')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="response">response</label>
                            <InputText id="response" value={record && record.response} onChange={(e) => onInputChange(e, 'response')} required />
                        </div>
                       
                        <div className="p-field">
                            <label className="p-mb-3">is_multiple</label>
                            <div className="p-formgrid p-grid">
                                <div className="p-field-radiobutton p-col-6">
                                    <RadioButton inputId="category1" name="is_multiple" value="yes" onChange={onCategoryChange} checked={record.is_multiple === 'yes'} />
                                    <label htmlFor="category1">Yes</label>
                                </div>
                                <div className="p-field-radiobutton p-col-6">
                                    <RadioButton inputId="category2" name="is_multiple" value="no" onChange={onCategoryChange} checked={record.is_multiple === 'no'} />
                                    <label htmlFor="category2">No</label>
                                </div>
                                
                            </div>
                        </div>
                       </Dialog>
                 

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
    )
}