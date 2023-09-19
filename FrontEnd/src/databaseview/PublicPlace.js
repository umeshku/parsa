import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';


export const PublicPlace = () => {

    let emptyProduct = {
        ward: '',
        catagory: '',
        type: '',
        photo: '',
        chowk: '',
        name: '',
        Latitude: null,
        Longitude: null
    };

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    // console.log(products)

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/institution/",
        {
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
            }
        })
        .then( resp=> resp.json())
        .then( resp=> {
            setProducts(resp);
       
        })
        .catch(error=>console.log(error));
        

    },[])


    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let _products = [...products];
            let _product = { ...product };
            if (product.id) {
                const index = findIndexById(product.id);
                fetch(`http://127.0.0.1:8000/api/institution/${product.id}/`,
                    {
                        method: 'PUT',
                        headers:{
                            'Content-Type':'application/json',
                            'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
                        },
                        body: JSON.stringify(_product),

                    })

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                fetch('http://127.0.0.1:8000/api/institution/',
                {
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
                    },
                    body: JSON.stringify(_product),
                })
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    }

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
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

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    // const confirmDeleteSelected = () => {
    //     setDeleteProductsDialog(true);
    // }

    const deleteSelectedProducts = () => {
        let _products = products.filter(val => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }
    


    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="New" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={openNew} />
                {/* <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} /> */}
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                {/* <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="p-mr-2 p-d-inline-block" /> */}
                <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />
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
    const mapLink =(rowData)=>{

        return(
        <a href={`http://www.google.com/maps/place/${rowData.Latitude},${rowData.Longitude}`} rel="noreferrer" target="_blank"> {rowData.name} </a>
        )}


    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
            </div>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="p-m-0">Institutional / Public Place Data</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const productDialogFooter = (
        <>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </>
    );
    const deleteProductDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </>
    );
    const deleteProductsDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </>
    );

    return (
        <div className="p-grid crud-demo">
            <div className="p-col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    {/* <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter} emptyMessage="No data found." header={header}> */}
                    <DataTable ref={dt} value={ products } selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" rowIndexVar="row" paginator rows={7} scrollable  rowsPerPageOptions={[5, 7, 10, 25]} className="datatable-responsive p-datatable-gridlines"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Public Places Data"
                        globalFilter={globalFilter} emptyMessage="No Data.household found." header={header}>
                        {/* <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column> */}
                        <Column field="ward" header="ward" sortable filter headerStyle={{ width: '200px' }}></Column>
                        <Column field="catagory" header="Catagory" sortable filter headerStyle={{ width: '200px' }}></Column>
                        <Column field="type" header="Type"  sortable headerStyle={{ width: '200px' }}></Column>
                        <Column header="Image" body={imageBodyTemplate} filter headerStyle={{ width: '200px' }}></Column>
                        <Column field="chowk" header="Place Name" sortable filter headerStyle={{ width: '200px' }}></Column>
                        <Column field="name" header="Name"  sortable filter headerStyle={{ width: '200px' }}></Column>
                        <Column field="remark" header="Remark"  sortable filter headerStyle={{ width: '200px' }}> </Column>
                        <Column  header="Map Link"  headerStyle={{ width: '200px' }} body={mapLink}> </Column>
                        <Column body={actionBodyTemplate} headerStyle={{ width: '200px' }}></Column>
                    </DataTable>

                    <Dialog visible={productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                        {product.image && <img src={`assets/demo/images/product/${product.image}`} alt={product.image} className="product-image" />}
                        <div className="p-field">
                            <label htmlFor="ward">Ward</label>
                            <InputNumber id="ward" value={product.ward} onChange={(e) => onInputNumberChange(e, 'ward')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.ward })} />
                            {submitted && !product.ward && <small className="p-invalid">ward is required.</small>}
                        </div>
                        <div className="p-field">
                            <label htmlFor="catagory">Catagory</label>
                            <InputText id="catagory" value={product.catagory} onChange={(e) => onInputChange(e, 'catagory')} required />
                        </div>
                        
                        <div className="p-field">
                            <label htmlFor="type">Type</label>
                            <InputText id="type" value={product.type} onChange={(e) => onInputChange(e, 'type')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="chowk">Place Name</label>
                            <InputText id="chowk" value={product.chowk} onChange={(e) => onInputChange(e, 'chowk')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="name">Name</label>
                            <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required />
                        </div>
                        <div className="p-field">
                            <label htmlFor="remark">Remark</label>
                            <InputText id="remark" value={product.catagory} onChange={(e) => onInputChange(e, 'remark')} required />
                        </div>
                        <div className="p-field">
                    <label htmlFor="Latitude">Latitude</label>
                    <InputNumber id="Latitude"  value={product && product.Latitude} mode="decimal" minFractionDigits={8}  className='.p-field' onChange={(e) => onInputChange(e, 'Latitude')}  />  
                    </div>
                    <div className="p-field">                    
                    <label htmlFor="Longitude">Longitude</label>                    
                    <InputNumber id="Longitude"  value={product && product.Longitude} mode="decimal" minFractionDigits={8}  className='.p-field' onChange={(e) => onInputChange(e, 'Longitude')}  />                      </div>


                        

                       
                    </Dialog>

                    <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                            {product && <span>Are you sure you want to delete <b>{product.name}</b>?</span>}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                            {product && <span>Are you sure you want to delete the selected products?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}
