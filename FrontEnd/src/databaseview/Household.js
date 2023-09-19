import React, { useState, useEffect, useRef, useContext} from 'react';

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
import { ApiService } from '../service/ApiService';
import { Ripple } from 'primereact/ripple';
import { Paginator } from 'primereact/paginator';
const apiService = new ApiService();


export const Household = () => {
    const [householdData, setHouseholdData] = useState([]);//store household data
    const [selectedRecords, setSelectedRecords] = useState([]);//
    
    const [totalRecords, setTotalRecord]=useState();
    const [rows, setRows] = useState([10]);
    const [ward,setWard]=useState("");
    const [search,setSearch]=useState("");
    const [offset, setOffset]=useState([0]);
    const [ordering, setOrdering]=useState("");
    const [id, setId]=useState("")
    const [Key, setKey]=useState("")
    
    
    useEffect(() => {
        fetchHouseholdData(ward,search,rows,offset,ordering,id,Key);
      }, []);
    
    const fetchHouseholdData = async (ward,search,rows,offset,ordering,id,Key) => {
        try {
          const data = await apiService.getHousehold(ward,search,rows,offset,ordering,id,Key); // You may need to adjust the API request to include pagination parameters
          setTotalRecord(data.count);
          setHouseholdData(data.results);
        } catch (error) {
          console.error('Error fetching household data:', error);
        }
      };
      const handlePageChange = (newPage) => {
        // Update the current page
       
      
        // Fetch data for the new page
       
      };
     //from CRUD
        
        const Data=useContext(DataContext) 
        const defaultCol = [
            {field: 'Ward', header: 'Ward', },
            {field: 'Tol', header: 'Tol'},
            {field: 'Q7', header: 'घरमुलीको नाम'},
            {field: 'HousePhoto', header: 'घरको फोटो'},
            
        ];
        // const columns=[];

        const columns = Data.householdColumns
        
        let emptyRecord = Data.householdColumnsEmpty
        
        const [record, setRecord] = useState({});
        
        const [recordDialog, setRecordDialog] = useState(false);
        const [deleteRecordDialog, setDeleteRecordDialog] = useState(false);
        const [deleteRecordsDialog, setDeleteRecordsDialog] = useState(false);
          
        const [addUpdateDetail, setAddUpdateDetail]=useState();
        const [submitted, setSubmitted] = useState(false);
        
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
        
    
       
        const statuses=['1','2'];
        const statusFilter = <Dropdown value={selectedStatus} options={statuses} onChange={(e) => setSelectedStatus(e.value)} placeholder="Select a Status" className="p-column-filter" showClear />;   
        
        const columnComponents = selectedColumns.map(col=> {
            
                return <Column key={col.field} field={col.field} header={col.header} headerStyle={{ width: '200px' }} sortable filter/>;
          
            
        });


        const openNew = () => {
            setAddUpdateDetail('Add Data');
            setRecord(emptyRecord);
            setSubmitted(false);
            setRecordDialog(true);
            // console.log(record)

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
                // console.log(JSON.stringify(record))
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
            console.log(record.id)
            console.log("detail")
            setAddUpdateDetail('Detail View');
            setRecord({ ...record });
            
            // to='/meta/1/details';
        }
        const confirmDeleteProduct = (record) => {
            setRecord(record);
            setDeleteRecordDialog(true);
        }
    
        const deleteProduct = () => {
            let _records = Data.household.filter(val => val.id !== record.id);
            Data.setHousehold(_records);
            setDeleteRecordDialog(false);
            setRecord(emptyRecord);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'record Deleted', life: 3000 });
        }
    
        const findIndexById = (id) => {
          let index=id
    

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
        // console.log("abc")
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
                    <Link to={`/addhousehold`}>
                    <Button label="नयाँ घरधुरी " icon="pi pi-plus" className="p-button-success p-mr-2" onClick={openNew} />
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
                    <Link to={`/updatehousehold/${rowData.id}`}>
                    <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2"  />
                    </Link>
                    <Button icon="pi pi-trash" className="p-button-rounded p-button-warning p-mr-2" onClick={() => confirmDeleteProduct(rowData)} />
                    <Link to={`/household/${rowData.id}`}>
                    <Button label="Detail" className="p-button-rounded p-button-info" />
                    </Link>                 
                </div>
            );
        }
        
    
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
        // const frequency = (arr,fieldname)=>{
        //     if (arr) {
        //         let b={};
        //         arr.map(el =>el[fieldname]).map(a=>{
        //             b[a]=(b[a]|| 0)+1});
        //         return b;
        //     }           
        //        };
    //    const test= frequency(Data.household,"column_category");
        // console.log(test);
        let leb=[];
        let da=[];
        // const label= Data.household && Object.keys(test).map(function(keyName, keyIndex) {
        //     leb.push(keyName)
        //     da.push(test[keyName])

                  
        // });
// console.log(leb,da)
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
            // sn=Data.household.indexOf(rowData)
            return(
                <React.Fragment>{sn+1}</React.Fragment>
                
            )
        }
    const [first, setFirst] = useState([0, 0, 0]);
   
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState("Press 'Enter' key to go to this page.");

    const onPageChange = (e, index) => {
        setFirst(first.map((f, i) => (index === i ? e.first : f)));
        setRows(rows.map((r, i) => (index === i ? e.rows : r)));
    };

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    };

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);

            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
            } else {
                let _first = [...first];

                _first[0] = currentPage ? options.rows * (page - 1) : 0;

                setFirst(_first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };

    const searchfn=(e)=>{
        setSearch(e.target.value)
        setOffset([0])
        fetchHouseholdData(ward,e.target.value,rows,0,ordering,id,Key);

    };
    const wards = [
        {label: 'All', value: ''},
        {label: 'Ward 1', value: 1},
        {label: 'Ward 2', value: 2},
        {label: 'Ward 3', value: 3},
        {label: 'Ward 4', value: 4},
        {label: 'Ward 5', value: 5},
        {label: 'Ward 6', value: 6},
    ];
    const wardFilter=(value)=>{
        console.log(value)
        setWard(value)
        fetchHouseholdData(value,search,rows,offset,ordering,id,Key)

    }
// Select Column and Search Function Done

    const header = (
        <div className="table-header">
            <h5 className="p-m-0">Select Column</h5>
            
            <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
            
            <h5 className="p-m-0">Select Ward</h5>
            
            <Dropdown value={ward} options={wards}  onChange={(e) => wardFilter(e.value)} style={{width:'20em'}}/>
            
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={searchfn} placeholder="Search..." />
            </span>
        </div>
    );
    //Pagination Template
        const template1 = {
            layout: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport',
            FirstPageLink:(options)=>{
                const firstpage=(e)=>{
                    // Prevent the default behavior of the anchor tag/button click
                e.preventDefault();
                    // Your custom logic for the "FirstPageLink" click event
                    console.log("aaaaa");
                    setOffset([0])
                    fetchHouseholdData(ward,search,0,0,ordering,id,Key);
                    // Call the original onClick function provided by PrimeReact
                    if (options.onClick) {
                        options.onClick(e);
                      }
                };

                return (
                    <button type="button" className={classNames(options.className, 'border-round')} onClick={firstpage} >
                        <span className="p-3">First</span>
                        <Ripple />
                    </button>
                );

            },
            PrevPageLink: (options) => {
                const PrevPage=(e)=>{
                    // Prevent the default behavior of the anchor tag/button click
                    e.preventDefault();
                    // Your custom logic for the "PrevPage" click event
                    let b=offset[0] - rows[0]
                    setOffset([b])
                    console.log(b, offset,rows)
                    fetchHouseholdData(ward,search,rows,b,ordering,id,Key);
                    // Call the original onClick function provided by PrimeReact
                    if (options.onClick) {
                        options.onClick(e);
                      }
                    };
                return (
                    <button type="button" className={classNames(options.className, 'border-round')} onClick={PrevPage} >
                        <span className="p-3">Previous</span>
                        <Ripple />
                    </button>
                );
            },
            NextPageLink: (options) => {
                const NestPage=async (e)=>{
                    // Prevent the default behavior of the anchor tag/button click
                    e.preventDefault();
                    // Your custom logic for the "PrevPage" click event
                    let a=offset[0] + rows[0]
                    setOffset([a]);
                    
                    console.log(a, offset, rows)
                    await fetchHouseholdData(ward,search,rows,a,ordering,id,Key);
                    // Call the original onClick function provided by PrimeReact
                    if (options.onClick) {
                        options.onClick(e);
                      }
                    };
                return (
                    <button type="button" className={classNames(options.className, 'border-round')} onClick={NestPage} >
                        <span className="p-3">Next</span>
                        <Ripple />
                    </button>
                );
            },
            LastPageLink: (options) => {
                const LastPage=(e)=>{
                    e.preventDefault();
                    // Your custom logic for the "PrevPage" click event
                    let c=totalRecords- rows[0]
                    setOffset([c]);
                    
                    console.log(c, offset, rows)
                    fetchHouseholdData(ward,search,rows,c,ordering,id,Key);
                    // Call the original onClick function provided by PrimeReact
                    if (options.onClick) {
                        options.onClick(e);
                      }

                };


                return (
                    <button type="button" className={classNames(options.className, 'border-round')} onClick={LastPage} >
                        <span className="p-3">Last</span>
                        <Ripple />
                    </button>
                );
            },
            PageLinks: (options) => {
                if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                    const className = classNames(options.className,);
    
                    return (
                        <span className={className} style={{ userSelect: 'none' }}>
                            ...
                        </span>
                    );
                }
                const Page=(e, pageNumber)=>{
                    e.preventDefault();
                    // Your custom logic for the "PrevPage" click event
                    let newPageNumber=pageNumber+1

                    let d=pageNumber*rows[0]
                    setOffset([d]);
                    
                    // console.log(c, offset, rows)
                    console.log(pageNumber)
                    fetchHouseholdData(ward,search,rows,d,ordering,id,Key);
                    // Call the original onClick function provided by PrimeReact
                    if (options.onClick) {
                        options.onClick(e);
                      }

                };
    
                return (
                    <button type="button" className={options.className} onClick={(e) => Page(e, options.page)}>
                        {options.page + 1}
                        <Ripple />
                    </button>
                );
            },
            RowsPerPageDropdown: (options) => {
                const dropdownOptions = [
                    { label: 10, value: 10 },
                    { label: 20, value: 20 },
                    { label: 30, value: 30 },
                    { label: 50, value: 50 }
                ];
                const rowChange=(e)=>{
                    e.preventDefault();
                    // Your custom logic for the "PrevPage" click event
                     setOffset([0]);
                    
                    // console.log(c, offset, rows)
                    console.log(e.value)
                    fetchHouseholdData(ward,search,e.value,0,ordering,id,Key);
                    // Call the original onClick function provided by PrimeReact
                    if (options.onChange) {
                        options.onChange({
                          value: e.value // Pass the selected value to the original onChange function
                        });
                      }

                };
    
                return <Dropdown value={options.value} options={dropdownOptions} onChange={rowChange} />;
            },
            CurrentPageReport: (options) => {
                return (
                    <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                       Showing {first[0]+1} to {first[0]+rows[0]} of {totalRecords} records
                    </span>
                );
            }
        };

        const customFilterFunction = (value, filter) => {
            return value.toLowerCase().includes(filter.toLowerCase());
          };
        
          
        return (
            
        <div>
                  
        <div className="p-grid crud-demo">
            <div className="p-col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <h1>घरधुरीको डाटा</h1>
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}>घरधुरीको डाटा</Toolbar>

                    <DataTable className="datatable-responsive p-datatable-gridlines" ref={dt} value={ householdData } selection={selectedRecords} onSelectionChange={(e) => setSelectedRecords(e.value)}
                        dataKey="id" rowIndexVar="row" 
                        scrollable  
                        
                        // currentPageReportTemplate={`Showing {first} to {last} of ${totalRecords} Household Data`}
                        header={header}
                        // Step 3: Provide the custom filter functioncustomFilterFunction
                        emptyMessage="No Data.household found." >
                            
                        {/* <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column> */}
                         {/* <Column field="linked_table" header="linked_table" sortable body={codeBodyTemplate} filter filterPlaceholder="Search by name">></Column>
                        <Column field="column_category" header="column_category" sortable body={nameBodyTemplate}></Column> */}
                        <Column header="Action" headerStyle={{ width: '200px' }} body={actionBodyTemplate} ></Column>
                        <Column header="SN" headerStyle={{ width: '50px' }} body={rowIndex} sortable ></Column>
                        {columnComponents}
                        {/* <Column header="Image" body={imageBodyTemplate}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                        <Column field="category" header="Category" sortable body={categoryBodyTemplate}></Column>
                        <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable></Column> */}
                        
                    </DataTable>
                    <div className="card">
            <Paginator template={template1} first={first[0]} rows={rows[0]} totalRecords={totalRecords} onPageChange={(e) => onPageChange(e, 0)} />
           
        </div>

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