
import React, { useState, useEffect, useContext, useRef } from 'react';

import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Dropdown } from 'primereact/dropdown';
import { Chart } from 'primereact/chart';
import { SelectButton } from 'primereact/selectbutton';
import { DataContext } from '../DataContext';
import { ApiService } from '../service/ApiService';
import { TieredMenu } from 'primereact/tieredmenu';
import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import html2canvas from 'html2canvas';

const apiService = new ApiService();


export const SummaryReport = () => {
   
    const menu = useRef(null);
    
   
    const [summaryTitle,setSummaryTitle]=useState("Ward Wise Household")
    const [coloR,setColor]=useState('#FCB900')
    const [ward, setWard]=useState(0)
    const [selectedWard, setSelectedWard]=useState('All')
    const [personal, setPersonal]=useState()
    const [household, setHousehold]=useState()
    useEffect(async() => {
        window.scrollTo(0, 0)
        const personal = await apiService.getAnalysis("personal", "", selectedWard);
        const household= await apiService.getAnalysis("household", "", selectedWard);
        setHousehold(household)
        setPersonal(personal)
    
      }, [])

    const filterWardWise = async (e) => {
        let b=parseInt(e.value)
        if (b===0) {
            setSelectedWard('All')
        }else{
            setSelectedWard(b)
        }
        const personal = await apiService.getAnalysis("personal", "", b);
        const household= await apiService.getAnalysis("household", "", b);
        setHousehold(household)
        setPersonal(personal)

    };
    
const [transformedData, setTransformedData] = useState({
    labels: ['Ward 1', 'Ward 2', 'Ward 3', 'Ward 4', 'Ward 5', 'Ward 6', 'Ward 7'],
    data: [1294,	1603,	1131,	1492,	834,	1481,	1074],
    complete: {"Ward 1":1294,	"Ward 2":1603,	"Ward 3":1131,	"Ward 4":1492,	"Ward 5":834,	"Ward 6":1481,	"Ward 7":1074},
  });
  const report = async (a, b, c) => {
    try {
    //   console.log(a, b, c);
      const data = await apiService.getAnalysis(a, b, selectedWard);
    //   console.log('Fetched Data:', typeof data); // Log the fetched data
      
      // Create a new transformedData object by reducing the data
      const newTransformedData = data.reduce((acc, item) => {
        const propertyName = b; // Use the provided property name
        acc.labels.push(item[propertyName]);
        acc.data.push(item.count);
        acc.complete[item[propertyName]] = item.count;
        return acc;
      }, { labels: [], data: [], complete: {} });
  
      // Update the state using setTransformedData
      setTransformedData(newTransformedData);
      setSummaryTitle(c);
  
      // Log the updated transformedData
    //   console.log('Labels:', newTransformedData.labels);
    //   console.log('Data:', newTransformedData.data);
    //   console.log('Complete:', newTransformedData.complete);
      window.scrollTo(0, 0)
      // Update the result state with fetched data
      
      
    } catch (error) {
      console.error('Error fetching analysis data:', error);
    }
  };
  
  
   
    const justifyTemplate = (option) => {
        
        return<>{option.name}</>;
    }
    const wards = [
        {name: 'All Ward', value: 0},
        {name: 'Ward 1', value: 1},
        {name: 'Ward 2', value: 2},
        {name: 'Ward 3', value: 3},
        {name: 'Ward 4', value: 4},
        {name: 'Ward 5', value: 5},
        {name: 'Ward 6', value: 6},
        {name: 'Ward 7', value: 7},
    ];
 
    const ChartType=
        [
            {key:'bar', label: 'Bar Chart', value: 'bar'},
            {key:'bar', label: 'Pie Chart', value: 'pie'},
            {key:'bar',label: 'Doughnut Chart', value: 'doughnut'},
          
        ];
    const [graph, setGraph]=useState('bar')
    const chartData = {
        labels: transformedData.labels,
        datasets: [
            {
                label:summaryTitle,
                backgroundColor:coloR,
                data: transformedData.data
            }
        ]
    };
    const barColor='#FCB900'
    const pieColor=['#FF6900','#7BDCB5','#0693E3','#F78DA7','#9900EF','#8BC34A','#1A237E']
    const GraphSelected=(value)=>{
        setGraph(value);
        if (value==='bar') {
            setColor(barColor)
        }else{
            setColor(pieColor)
        }
        // console.log(value);
      }
      const downloadItem = [
        {
            
            icon: 'pi pi-fw pi-list',
            items: [
                { label: 'Download Chart',command: () => downloadChartImage() },
                { label: 'Download CSV', command: () => downloadDataCSV() }
            ]
        },]
        const chartRef = useRef(null); // Create a ref for the chart component
        const downloadChartImage = () => {
            const chartElement = chartRef.current; // Get the chart element using the ref
            console.log(chartElement)
            const chartCanvas = chartElement && chartElement.chart && chartElement.chart.canvas; // Access the chart's canvas element
            if (chartCanvas) {
            html2canvas(chartCanvas).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'chart.png';
                link.click();
            });
            }
            
          };
        const downloadDataCSV = () => {
            const csvContent = prepareCSVContent();

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'data.csv';
            link.click();
        }
        const prepareCSVContent = () => {
            const csvRows = [];

                // Prepare CSV header
                const headerRow = [summaryTitle, 'Count'];
                csvRows.push(headerRow.join(','));

                // Iterate through the complete data and add rows
                for (const label in transformedData.complete) {
                const count = transformedData.complete[label];
                const dataRow = [label, count];
                csvRows.push(dataRow.join(','));
                }

                return csvRows.join('\n');
          };
        
  
      
        const overlayMenuItems = [
            {
                label: 'Save',
                icon: 'pi pi-save'
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Home',
                icon: 'pi pi-home'
            }
        ];
        const toggleMenu = (event) => {
            menu.current.toggle(event);
        };

    return (
        <React.Fragment>
        
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h5>Sumary Report</h5>
                    
                <SelectButton value={ward} options={wards}  onChange={(e) => {setWard(e.value);filterWardWise(e)}} itemTemplate={justifyTemplate} />

                </div>
                <div className="card">
                <h6>Selected Ward : {selectedWard} Wards</h6>
                   <h6>Total Number of Household is : {household}</h6>
                   <h6>Total Number of Population is : {personal}</h6>
                </div>
           </div>
            </div>
            <div className="p-col-12">
                <div className="card">
                
                  
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h5 style={{ margin: '0' }}>{summaryTitle}</h5>
                <Menubar  model={downloadItem}></Menubar>
                </div>

                
                    {/* <h5>{summaryTitle}</h5> <TieredMenu model={tieredMenuItems} /> */}
                    <div className="p-grid p-fluid">
                    
                        <div className="p-col-12 p-md-7">
                        <Dropdown key={graph} value={graph}options={ChartType} onChange={(e) => GraphSelected(e.value)} placeholder="Select Chart Type"/>
                            <Chart ref={chartRef} type={graph} data={chartData} />
                        </div>
                        
                        <div className="p-col-12 p-md-5">
                        
                <table className="table table-striped">
                        <thead><tr>
                            <th>{summaryTitle}</th>
                            <th>संख्या</th>
                            </tr></thead>
                        <tbody>
                        {transformedData.complete && Object.keys(transformedData.complete).map(function(keyName, keyIndex) {
                            return (
                                <tr>
                                    <td key={keyName}>{keyName}</td>
                                    <td>{transformedData.complete[keyName]}</td>
                                    
                                    
                                </tr>
                                )       })}
                        </tbody>
                </table>
                        </div>
                                                                                         
                    </div>
                </div>
            </div>
            
            
                
            <div className="p-col-12">
                <div className="card">
                    <h5>Household Survey Data Analysis</h5>
                    <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-3">
                    <Accordion >
                    
                        <AccordionTab header="जनसङ्ख्या वितरणको अवस्था">
                        
                        <Button key ={"a"}label="वडागत घरधुरी" onClick={()=> report("household",'Ward', "वडागत घरधुरी")} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"b"}label="वडागत जनसंख्या" onClick={(e)=> report("personal",'Ward', "वडागत जनसंख्या")} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                      </AccordionTab>
                        <AccordionTab header="घरको विवरण">
                            <Button key ={"Funcational_Type"} label="घरको प्रयोजन प्रकार (बहुउत्तर सम्भव छ)" onClick={(e)=> report("household",'Funcational_Type','घरको प्रयोजन प्रकार (बहुउत्तर सम्भव छ)')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q3_1"} label="Q3_1. तला(Storey)" onClick={(e)=> report("household",'Q3_1',"Q3_1. तला(Storey)")} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q3_2"} label="Q3_2. छानाको किसिम" onClick={(e)=> report("household",'Q3_2','Q3_2. छानाको किसिम')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q3_3"} label="Q3_3. गारोको किसिम" onClick={(e)=> report("household",'Q3_3','Q3_3. गारोको किसिम')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q3_4"} label="Q3_4. घरको अवस्था" onClick={(e)=> report("household",'Q3_4','Q3_4. घरको अवस्था')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q3_5"} label="Q3_5. घरको उमेर" onClick={(e)=> report("household",'Q3_5','Q3_5. घरको उमेर')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q3_6"} label="Q3_6. घरको जग कस्तो प्रकारको छ? " onClick={(e)=> report("household",'Q3_6','Q3_6. घरको जग कस्तो प्रकारको छ? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header=" परिवार र बसोबासको किसिम">
                            <Button key ={"Q5"} label="Q5. परिवार र बसोबासको किसिम" onClick={(e)=> report("household",'Q5','Q5. परिवार र बसोबासको किसिम')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q8"} label="Q8. परिवारमूलीको लिङ्ग के हो?" onClick={(e)=> report("household",'Q8','Q8. परिवारमूलीको लिङ्ग के हो?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q11"} label="Q11. उत्तरदाता परिवारमूली हो?" onClick={(e)=> report("household",'Q11','Q11. उत्तरदाता परिवारमूली हो?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q10"} label="Q10. उत्तरदाताको लिङ्ग के हो?" onClick={(e)=> report("household",'Q10','Q10. उत्तरदाताको लिङ्ग के हो?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header="कून स्कूलमा पढाउनु हुन्छ">
                            <Button key ={"Q37"} label="q37. बालबच्चालाई कून स्कूलमा पढाउनु हुन्छ ?" onClick={(e)=> report("household",'Q37','q37. बालबच्चालाई कून स्कूलमा पढाउनु हुन्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header=" घटना दर्ता विवरण">
                            <Button key ={"Q35"} label="Q35. तपाईको परिबारमा ब्यक्तिगत घटना विवरण जन्म /मृत्यु/बसाईसराई/विवाह/सम्बन्ध विच्छेद  दर्ता गर्नु भएको छ?" onClick={(e)=> report("household",'Q35','Q35. तपाईको परिबारमा ब्यक्तिगत घटना विवरण जन्म /मृत्यु/बसाईसराई/विवाह/सम्बन्ध विच्छेद  दर्ता गर्नु भएको छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q35_1"} label="Q35. यदि छैन भने किन गर्नु भएन" onClick={(e)=> report("household",'Q35_1','Q35. यदि छैन भने किन गर्नु भएन')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header=" परिवार र बसोबासको किसिम">
                            <Button key ={"Q34"} label="Q34. तपाई वा परिवार बसोवास गरेको घर/भवनको स्वामित्वको अवस्था कस्तो हो " onClick={(e)=> report("household",'Q34','Q34. तपाई वा परिवार बसोवास गरेको घर/भवनको स्वामित्वको अवस्था कस्तो हो ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q36"} label="Q36. तपाईले बसोवास गरेको घर/भवन बाहेक तपाई वा परिवारको स्वामित्वमा यस नगरपालिकामा अन्य भवन पनि छ " onClick={(e)=> report("household",'Q36','Q36. तपाईले बसोवास गरेको घर/भवन बाहेक तपाई वा परिवारको स्वामित्वमा यस नगरपालिकामा अन्य भवन पनि छ ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>




                    </Accordion>
                    </div>
                        <div className="p-col-12 p-md-3">
                        <Accordion>
                        <AccordionTab header=" मोटरबाटोको सुविधा">
                        <Button key ={"Q39"} label="Q39. तपाईको घरसम्म मोटरबाटोको सुविधा छ ?" onClick={(e)=> report("household",'Q39','Q39. तपाईको घरसम्म मोटरबाटोको सुविधा छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q40"} label="Q40. तपाईको घर सम्म जाने सडकको किसिम कस्तो छ ?" onClick={(e)=> report("household",'Q40','Q40. तपाईको घर सम्म जाने सडकको किसिम कस्तो छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header=" जग्गा सम्बन्धि बिवरण">
                        <Button key ={"Q41"} label="Q41. नेपाल भित्र तपाई वा परिवारको स्वामित्वमा जग्गा/जमीन/घडेरी छ ?" onClick={(e)=> report("household",'Q41','Q41. नेपाल भित्र तपाई वा परिवारको स्वामित्वमा जग्गा/जमीन/घडेरी छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q41_2"} label="Q41.2 यदि छ भने कस्को नाममा छ" onClick={(e)=> report("household",'Q41_2','Q41.2 यदि छ भने कस्को नाममा छ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q41_3"} label="Q41.3 यदि छैन भने बसोबस गरीरहेको जमिन /जग्गा कस्तो प्रकारको हो " onClick={(e)=> report("household",'Q41_3','Q41.3 यदि छैन भने बसोबस गरीरहेको जमिन /जग्गा कस्तो प्रकारको हो ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q41_1"} label="Q41_1. तपाइको आफ्नो खेत छ कि छैन यदि छ भने खेत कति प्रतिसत सिंचित खेत छ?" onClick={(e)=> report("household",'Q41_1','Q41_1. तपाइको आफ्नो खेत छ कि छैन यदि छ भने खेत कति प्रतिसत सिंचित खेत छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header="जमीन वा घडेरीको विवरण दिनुहोस् ।">
                        <Button key ={"Q43"} label="Q43. उक्त विवरणमा महिला सदस्यको नाममा स्वामित्व रहेको छ ?" onClick={(e)=> report("household",'Q43','Q43. उक्त विवरणमा महिला सदस्यको नाममा स्वामित्व रहेको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q44_1_1"} label="Q44_1_1. बिघा" onClick={(e)=> report("household",'Q44_1_1','Q44_1_1. बिघा')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q45"} label="Q45. उक्त विवरणमा महिला सदस्यको नाममा स्वामित्व रहेको छ ?" onClick={(e)=> report("household",'Q45','Q45. उक्त विवरणमा महिला सदस्यको नाममा स्वामित्व रहेको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header=" खानेपानी सम्बन्धी विवरण">
                        <Button key ={"Q48_a"} label="Q48_a. परिवारको खानेपानीको मुख्यस्रोत कुन हो ?" onClick={(e)=> report("household",'Q48_a','Q48_a. परिवारको खानेपानीको मुख्यस्रोत कुन हो ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q48_a1"} label="Q48_a1. मुख्यस्रोत को पानि को गुणस्तर कस्तो छ ?" onClick={(e)=> report("household",'Q48_a1','Q48_a1. मुख्यस्रोत को पानि को गुणस्तर कस्तो छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q48_a2"} label="Q48_a2. मुख्यश्रोतको पानीको प्रशोधन कसरी गर्नुहुन्छ??" onClick={(e)=> report("household",'Q48_a2','Q48_a2. मुख्यश्रोतको पानीको प्रशोधन कसरी गर्नुहुन्छ??')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q48_a3"} label="Q48_a3. मुख्यस्रोत बाट पानीको पर्याप्त आउछ?" onClick={(e)=> report("household",'Q48_a3','Q48_a3. मुख्यस्रोत बाट पानीको पर्याप्त आउछ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q49"} label="Q49. पाइपबाट आउने पानी प्रयोग गर्नुहुन्छ भने त्यसको स्वामित्व कसको हो ?" onClick={(e)=> report("household",'Q49','Q49. पाइपबाट आउने पानी प्रयोग गर्नुहुन्छ भने त्यसको स्वामित्व कसको हो ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q50"} label="Q50. खानेपानीको स्रोत सम्म गएर पानी लिएर आउन कति समय लाग्छ ?" onClick={(e)=> report("household",'Q50','Q50. खानेपानीको स्रोत सम्म गएर पानी लिएर आउन कति समय लाग्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header="  सरसफाई र फोहरको व्यवस्थापन सम्बन्धी ">
                        <Button key ={"Q55"} label="Q55. आफ्नो स्वामित्वको चर्पी छ ?" onClick={(e)=> report("household",'Q55','Q55. आफ्नो स्वामित्वको चर्पी छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q56"} label="Q56. तपाईको परिवारले कस्तो चर्पी प्रयोग गर्नुहुन्छ ?" onClick={(e)=> report("household",'Q56','Q56. तपाईको परिवारले कस्तो चर्पी प्रयोग गर्नुहुन्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q59"} label="Q59. फोहर पानीको व्यवस्थापन कसरी गर्नुभएको छ ?" onClick={(e)=> report("household",'Q59','Q59. फोहर पानीको व्यवस्थापन कसरी गर्नुभएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q60"} label="Q60. तपाईको घरबाट निस्कने ठोस फोहरमैला कसरी बिसर्जन गर्नुहुन्छ ?  (बहुउत्तर सम्भव छ)" onClick={(e)=> report("household",'Q60','Q60. तपाईको घरबाट निस्कने ठोस फोहरमैला कसरी बिसर्जन गर्नुहुन्छ ?  (बहुउत्तर सम्भव छ)')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q60_1"} label="Q60_1. अन्य भए उल्लेख गर्ने" onClick={(e)=> report("household",'Q60_1','Q60_1. अन्य भए उल्लेख गर्ने')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header=" बिजुली तथा इन्धन सम्बन्धी विवरण">
                        <Button key ={"Q61"} label="Q61. तपाईको परिवारमा खाना पकाउन अक्सर (मुख्य रुपमा) कुन इन्धन प्रयोग गर्नुहुन्छ ?" onClick={(e)=> report("household",'Q61','Q61. तपाईको परिवारमा खाना पकाउन अक्सर (मुख्य रुपमा) कुन इन्धन प्रयोग गर्नुहुन्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q62"} label="Q62. यदि काठ/दाउरार गोबर/गुइठा (मुख्य रुपमा) इन्धन प्रयोग गर्नुहुन्छ भने कस्तो प्रकारको चुलो प्रयोग गर्नुहुन्छ ?" onClick={(e)=> report("household",'Q62','Q62. यदि काठ/दाउरार गोबर/गुइठा (मुख्य रुपमा) इन्धन प्रयोग गर्नुहुन्छ भने कस्तो प्रकारको चुलो प्रयोग गर्नुहुन्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q63"} label="Q63. तपाईको परिवारमा बत्ती बाल्न अक्सर (मुख्य रुपमा) कुन श्रोत प्रयोग गर्नुहुन्छ ?" onClick={(e)=> report("household",'Q63','Q63. तपाईको परिवारमा बत्ती बाल्न अक्सर (मुख्य रुपमा) कुन श्रोत प्रयोग गर्नुहुन्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q65"} label="Q65. यदि बिजुलीको प्रयोग गर्नुभएको छ भने, आफ्नै घरमा बिजुलीको मिटर जडान भएको छ ?" onClick={(e)=> report("household",'Q65','Q65. यदि बिजुलीको प्रयोग गर्नुभएको छ भने, आफ्नै घरमा बिजुलीको मिटर जडान भएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>



                        </Accordion>
                        </div>
                        
                        
                        <div className="p-col-12 p-md-3">
                            <Accordion>
                            <AccordionTab header=" कृषिजन्य उत्पादन तथा खानाको सुरक्षा ">
                            <Button key ={"Q66"} label="Q66. तपाईको परिवारले मुख्यतया के–कस्तो कृषि उत्पादन गर्छ ? (बहुउत्तर सम्भव छ) " onClick={(e)=> report("household",'Q66','Q66. तपाईको परिवारले मुख्यतया के–कस्तो कृषि उत्पादन गर्छ ? (बहुउत्तर सम्भव छ) ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q67"} label="Q67. तपाईको परिवारको स्वामित्वमा चौपाया तथा पशुपक्षी के के छन् ?" onClick={(e)=> report("household",'Q67','Q67. तपाईको परिवारको स्वामित्वमा चौपाया तथा पशुपक्षी के के छन् ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q67_8"} label="Q67_8. तपाइको परिवारमा माछा, मौरी गरिएको छ" onClick={(e)=> report("household",'Q67_8','Q67_8. तपाइको परिवारमा माछा, मौरी गरिएको छ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header="कृषि उत्पादनबाट कति महिना खान पुग्छ">
                            <Button key ={"Q68"} label="Q68. तपाईको परिवारलाई आफ्नो कृषि उत्पादनबाट कति महिना खान पुग्छ ? (आफ्नो परिवारमा खेती गर्ने जमिन भएका तथा अरुको जमिनमा खेती गर्ने परिवारहरुसँग सोध्ने)" onClick={(e)=> report("household",'Q68','Q68. तपाईको परिवारलाई आफ्नो कृषि उत्पादनबाट कति महिना खान पुग्छ ? (आफ्नो परिवारमा खेती गर्ने जमिन भएका तथा अरुको जमिनमा खेती गर्ने परिवारहरुसँग सोध्ने)')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q69"} label="Q69. तपाईको घरको बाँकी कृषि उत्पादन बजारमा बेच्नुहुन्छ ?" onClick={(e)=> report("household",'Q69','Q69. तपाईको घरको बाँकी कृषि उत्पादन बजारमा बेच्नुहुन्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q69_1"} label="Q69_1. बेच्नुहुन्छ भने कहाँ बेच्नुहुन्छ ?" onClick={(e)=> report("household",'Q69_1','Q69_1. बेच्नुहुन्छ भने कहाँ बेच्नुहुन्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q69_2"} label="Q69_2.तपाइको जग्गा बाजो छ < यदि छ भने कति वर्ष देखि बाजो राख्नु भाको छ ?" onClick={(e)=> report("household",'Q69_2','Q69_2.तपाइको जग्गा बाजो छ < यदि छ भने कति वर्ष देखि बाजो राख्नु भाको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header="पारिवारिक व्यवसाय तथा आर्थिक स्थिति सम्बन्धी विवरण">
                            <Button key ={"Q150"} label="Q150. तपाईले वा परिवारको कुनै सदस्यले कुनै व्यवसाय गर्नु भएको छ" onClick={(e)=> report("household",'Q150','Q150. तपाईले वा परिवारको कुनै सदस्यले कुनै व्यवसाय गर्नु भएको छ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q150_1"} label="Q150.1 यदि छ भने क व्यवसाय गर्नु भएको छ" onClick={(e)=> report("household",'Q150_1','Q150.1 यदि छ भने क व्यवसाय गर्नु भएको छ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q150_3"} label="Q150.2 व्यवसाय गर्न पान नम्बर लिनु भाको छ ?" onClick={(e)=> report("household",'Q150_3','Q150.2 व्यवसाय गर्न पान नम्बर लिनु भाको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q72"} label="Q72. तपाईको कुल आम्दानीले खर्च धान्न पुग्छ ?" onClick={(e)=> report("household",'Q72','Q72. तपाईको कुल आम्दानीले खर्च धान्न पुग्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q73"} label="Q73. यदि तपाईको परिवारको कुल वार्षिक आम्दानीले विगत १ वर्षमा परिवार धान्न नपुगेको भए, नपुग अवधिको लागि खर्च धान्ने व्यवस्था कसरी मिलाउनुभयो ? (बहुउत्तर सम्भव छ)" onClick={(e)=> report("household",'Q73','Q73. यदि तपाईको परिवारको कुल वार्षिक आम्दानीले विगत १ वर्षमा परिवार धान्न नपुगेको भए, नपुग अवधिको लागि खर्च धान्ने व्यवस्था कसरी मिलाउनुभयो ? (बहुउत्तर सम्भव छ)')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q75"} label="Q75. यदि  ऋण छ भने, कहाँबाट ऋण लिनु भएको हो ?" onClick={(e)=> report("household",'Q75','Q75. यदि  ऋण छ भने, कहाँबाट ऋण लिनु भएको हो ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q78"} label="Q78. तपाईको परिवार वा परिवारका सदस्य कुनै सामाजिक समूहको सदस्य वा समुहमा आवद्ध हुनुहुन्छ ? " onClick={(e)=> report("household",'Q78','Q78. तपाईको परिवार वा परिवारका सदस्य कुनै सामाजिक समूहको सदस्य वा समुहमा आवद्ध हुनुहुन्छ ? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q79"} label="Q79. यदि हुनुहुन्छ भने कस्तो संस्था/समुहमा आबद्व हुनुहुन्छ ? (बहुउत्तर सम्भव छ)" onClick={(e)=> report("household",'Q79','Q79. यदि हुनुहुन्छ भने कस्तो संस्था/समुहमा आबद्व हुनुहुन्छ ? (बहुउत्तर सम्भव छ)')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header=" घरयासी तथा उपभोग्य सुविधाहरु">
                            <Button key ={"Q81_1"} label="Q81_1. रेडियो" onClick={(e)=> report("household",'Q81_1','Q81_1. रेडियो')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_2"} label="Q81_2. टेलिभिजन" onClick={(e)=> report("household",'Q81_2','Q81_2. टेलिभिजन')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_3"} label="Q81_3. केवल लाईन जोडेको" onClick={(e)=> report("household",'Q81_3','Q81_3. केवल लाईन जोडेको')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_4"} label="Q81_4. टेलिफोन/मोबाइल " onClick={(e)=> report("household",'Q81_4','Q81_4. टेलिफोन/मोबाइल ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_5"} label="Q81_5. साइकल" onClick={(e)=> report("household",'Q81_5','Q81_5. साइकल')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_6"} label="Q81_6. मोटरसाइकल" onClick={(e)=> report("household",'Q81_6','Q81_6. मोटरसाइकल')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_7"} label="Q81_7. कार/जिप/भ्यान" onClick={(e)=> report("household",'Q81_7','Q81_7. कार/जिप/भ्यान')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_8"} label="Q81_8. सोलार" onClick={(e)=> report("household",'Q81_8','Q81_8. सोलार')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_9"} label="Q81_9. इन्भर्टर" onClick={(e)=> report("household",'Q81_9','Q81_9. इन्भर्टर')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_10"} label="Q81_10. जेनेरेटर" onClick={(e)=> report("household",'Q81_10','Q81_10. जेनेरेटर')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_11"} label="Q81_11. कम्प्युटर" onClick={(e)=> report("household",'Q81_11','Q81_11. कम्प्युटर')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_12"} label="Q81_12. स्मार्ट फोन" onClick={(e)=> report("household",'Q81_12','Q81_12. स्मार्ट फोन')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q81_13"} label="Q81_13. इन्टरनेट" onClick={(e)=> report("household",'Q81_13','Q81_13. इन्टरनेट')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header=" बसाई सराई">
                            <Button key ={"Q83"} label="Q83. तपाईको परिवार अन्य स्थानबाट यस नगरपालिकामा बसाई सरेर आएको हो ?" onClick={(e)=> report("household",'Q83','Q83. तपाईको परिवार अन्य स्थानबाट यस नगरपालिकामा बसाई सरेर आएको हो ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q85"} label="Q85. कुन स्थानबाट आउनुभएको हो ?" onClick={(e)=> report("household",'Q85','Q85. कुन स्थानबाट आउनुभएको हो ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q86"} label="Q86. यहाँ बसाई सर्नुको कारण के होला ? " onClick={(e)=> report("household",'Q86','Q86. यहाँ बसाई सर्नुको कारण के होला ? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header="  वैदेशिक रोजगारी">
                            <Button key ={"Q89"} label="Q89. वैदेशिक रोजगारीको कारणले परिवारको कुनै सदस्य विदेशमा बसोबास गर्नुहुन्छ भने सोबाट रेमिटेन्स पाउनुहुन्छ ?" onClick={(e)=> report("household",'Q89','Q89. वैदेशिक रोजगारीको कारणले परिवारको कुनै सदस्य विदेशमा बसोबास गर्नुहुन्छ भने सोबाट रेमिटेन्स पाउनुहुन्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q90"} label="Q90. वैदेशिक रोजगारीबाट रकम प्राप्त गर्ने गरेको छ भने के को मार्फत पाउनुहुन्छ ?" onClick={(e)=> report("household",'Q90','Q90. वैदेशिक रोजगारीबाट रकम प्राप्त गर्ने गरेको छ भने के को मार्फत पाउनुहुन्छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>

                        </Accordion>
                        </div>
                        
                        <div className="p-col-12 p-md-3">
                        <Accordion>
                        <AccordionTab header=" विरामी हुँदा उपचार">
                        <Button key ={"Q91"} label="Q91. तपाई वा तपाईको परिवारका सदस्यहरु विरामी हुँदा उपचारको लागि प्राय कहाँकहाँ जानुहुन्छ ?(बहुउत्तर सम्भव छ)" onClick={(e)=> report("household",'Q91','Q91. तपाई वा तपाईको परिवारका सदस्यहरु विरामी हुँदा उपचारको लागि प्राय कहाँकहाँ जानुहुन्छ ?(बहुउत्तर सम्भव छ)')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q92"} label="Q92. तपाई वा तपाईको परिवारको सदस्यहरुलाई नियमित रुपमा स्वास्थ्य परिक्षण गराउने चलन छ ? " onClick={(e)=> report("household",'Q92','Q92. तपाई वा तपाईको परिवारको सदस्यहरुलाई नियमित रुपमा स्वास्थ्य परिक्षण गराउने चलन छ ? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q93"} label="Q93. गत १२ महिनामा तपाईको परिवारमा गर्भवती महिलाले नियमित रुपमा तालिम प्राप्त स्वास्थ्यकर्मीहरुबाट स्वास्थ्य जाँच गराउनुभएको छ ?" onClick={(e)=> report("household",'Q93','Q93. गत १२ महिनामा तपाईको परिवारमा गर्भवती महिलाले नियमित रुपमा तालिम प्राप्त स्वास्थ्यकर्मीहरुबाट स्वास्थ्य जाँच गराउनुभएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q94"} label="Q94. यदि नगराइएको भए, किन स्वास्थ्य जाँच नगराउनु भएको हो ? " onClick={(e)=> report("household",'Q94','Q94. यदि नगराइएको भए, किन स्वास्थ्य जाँच नगराउनु भएको हो ? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q95"} label="Q95. गत १ वर्षमा तपाईको परिवारको महिलाले बच्चा जन्माउनु भएको भए कहाँ जन्माउनुभयो? " onClick={(e)=> report("household",'Q95','Q95. गत १ वर्षमा तपाईको परिवारको महिलाले बच्चा जन्माउनु भएको भए कहाँ जन्माउनुभयो? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header="पोषणको स्थिति">
                        <Button key ={"Q98_1"} label="Q98_1. तपाईको परिवारमा ५ वर्ष मुनिका केटाकेटी छन्?" onClick={(e)=> report("household",'Q98_1','Q98_1. तपाईको परिवारमा ५ वर्ष मुनिका केटाकेटी छन्?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q101_1"} label="Q101_1. ५ वर्ष भन्दा मुनिको वृद्धि अनुगमन र मापन हुन्छ" onClick={(e)=> report("household",'Q101_1','Q101_1. ५ वर्ष भन्दा मुनिको वृद्धि अनुगमन र मापन हुन्छ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q101_2"} label="Q101_2. गर्भवती महिलाको लागि आइरन चक्की लिने गरेको छ? " onClick={(e)=> report("household",'Q101_2','Q101_2. गर्भवती महिलाको लागि आइरन चक्की लिने गरेको छ? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q101_5"} label="Q101_5. ६ महिना देखि ५ वर्ष सम्मका बच्चालाई भिटामिन ए खुवाउने गरेको छ?" onClick={(e)=> report("household",'Q101_5','Q101_5. ६ महिना देखि ५ वर्ष सम्मका बच्चालाई भिटामिन ए खुवाउने गरेको छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q101_6"} label="Q101_6. १ वर्ष देखि ५ वर्ष सम्मका बच्चालाई  जुकाको औषधी खुवाएको छ ?" onClick={(e)=> report("household",'Q101_6','Q101_6. १ वर्ष देखि ५ वर्ष सम्मका बच्चालाई  जुकाको औषधी खुवाएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header="लैंङ्गिय समानता">
                        <Button key ={"Q109_1"} label="Q109_1. घरयासी" onClick={(e)=> report("household",'Q109_1','Q109_1. घरयासी')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q109_2"} label="Q109_2. सामुदायिक/सामाजिक" onClick={(e)=> report("household",'Q109_2','Q109_2. सामुदायिक/सामाजिक')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q109_3"} label="Q109_3. घर जग्गा किनबेच" onClick={(e)=> report("household",'Q109_3','Q109_3. घर जग्गा किनबेच')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q110"} label="Q110. तपाईको परिवारमा महिलाको नाममा चल/अचल सम्पतिहरु छ ?" onClick={(e)=> report("household",'Q110','Q110. तपाईको परिवारमा महिलाको नाममा चल/अचल सम्पतिहरु छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q111"} label="Q111. छ भने कुन सम्पत्तिमा महिला स्वामित्व छ?" onClick={(e)=> report("household",'Q111','Q111. छ भने कुन सम्पत्तिमा महिला स्वामित्व छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header=" जोखिम न्युनिकरण">
                        <Button key ={"Q112"} label="Q112. तपाईलाई भवन संहिताको बारेमा थाहा छ?" onClick={(e)=> report("household",'Q112','Q112. तपाईलाई भवन संहिताको बारेमा थाहा छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q114"} label="Q114. तपाईले घर निर्माण गर्दा नपाबाट अनुमतिपत्र र नक्सापास लिनु भएको छ?" onClick={(e)=> report("household",'Q114','Q114. तपाईले घर निर्माण गर्दा नपाबाट अनुमतिपत्र र नक्सापास लिनु भएको छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q114_1"} label="Q114_1. तपाइँको घर भूकम्प प्रतिरोधी छ?" onClick={(e)=> report("household",'Q114_1','Q114_1. तपाइँको घर भूकम्प प्रतिरोधी छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q115"} label="Q115. तपाईको घरछेउमा खुल्ला र सुरक्षित क्षेत्र छ?  " onClick={(e)=> report("household",'Q115','Q115. तपाईको घरछेउमा खुल्ला र सुरक्षित क्षेत्र छ?  ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q116"} label="Q116. तपाईको घर प्राकृतिक प्रकोप जस्तै बाढी आदिको जोखिम क्षेत्रमा छ/छैन ?" onClick={(e)=> report("household",'Q116','Q116. तपाईको घर प्राकृतिक प्रकोप जस्तै बाढी आदिको जोखिम क्षेत्रमा छ/छैन ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q117"} label="Q117. के तपाईले टि.भि रेडियो लगाएतका सञ्चार माध्यम मार्फत भूकम्प, पहिरो, बाडी आदिकोजोखिम न्युनिकरणका लागि प्रभावकारी सूचना प्राप्त गर्नु भएको छ ?" onClick={(e)=> report("household",'Q117','Q117. के तपाईले टि.भि रेडियो लगाएतका सञ्चार माध्यम मार्फत भूकम्प, पहिरो, बाडी आदिकोजोखिम न्युनिकरणका लागि प्रभावकारी सूचना प्राप्त गर्नु भएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q118"} label="Q118. भुकम्प आएको बेला तपाईको घर भित्रका सुरक्षित स्थानहरु पहिचान गर्नु भएको छ ?" onClick={(e)=> report("household",'Q118','Q118. भुकम्प आएको बेला तपाईको घर भित्रका सुरक्षित स्थानहरु पहिचान गर्नु भएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q119"} label="Q119. के तपाईले आपतकालिन समयमा काम लाग्ने संसाधनहरु जुटाएर राख्नु भएको छ ?" onClick={(e)=> report("household",'Q119','Q119. के तपाईले आपतकालिन समयमा काम लाग्ने संसाधनहरु जुटाएर राख्नु भएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q127_1"} label="Q127_. तपाईको घर/ भवनले कुनै समयमा बाडी थामेको छ?" onClick={(e)=> report("household",'Q127_1','Q127_. तपाईको घर/ भवनले कुनै समयमा बाडी थामेको छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q129"} label="Q129.  प्रकोपबाट तपाईको परिवारको कुनै सदस्यको मृत्यु वा घाइते भएको छ?" onClick={(e)=> report("household",'Q129','Q129.  प्रकोपबाट तपाईको परिवारको कुनै सदस्यको मृत्यु वा घाइते भएको छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q130"} label="Q130. तपाईको घर/भवनमा कुनै समयमा आगो लागेको थियो?" onClick={(e)=> report("household",'Q130','Q130. तपाईको घर/भवनमा कुनै समयमा आगो लागेको थियो?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q132"} label="Q132. यो क्षेत्रमा कुनै समयमा महामारीको समस्या थियो?" onClick={(e)=> report("household",'Q132','Q132. यो क्षेत्रमा कुनै समयमा महामारीको समस्या थियो?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q135"} label="Q135. तपाईको परिवारको कुनै सदस्यले विपद व्यवस्थापन, प्राथमिक उपचार, उद्दार को तालिम लिनुभएको छ?" onClick={(e)=> report("household",'Q135','Q135. तपाईको परिवारको कुनै सदस्यले विपद व्यवस्थापन, प्राथमिक उपचार, उद्दार को तालिम लिनुभएको छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>


                            </Accordion>
                        </div>

                        
                        
                                              
                    </div>
                </div>
            </div>
           
            <div className="p-col-12">
                <div className="card">
                    <h5>जनसङ्ख्या गत बिवरण</h5>
                    <div className="p-grid p-fluid">
                    
                        
                        <div className="p-col-12 p-md-6">
                            <Accordion>
                            <AccordionTab header="Q13. तपाईको परिवारमा बसोबास गर्ने सदस्यहरुको (पारिवारिक सदस्य बाहेक पनि) नाम परिवारमूलीबाट क्रमैसँग बताउनुहोस्">
                            <Button key ={"Q15"} label="Q15. लिङ्ग कुन हो ? " onClick={(e)=> report("personal" ,'Q15','Q15. लिङ्ग कुन हो ? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"age_group"} label="उमेर समूह" onClick={(e)=> report("personal" ,'age_group','उमेर समूह')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q17"} label="Q17. जात/जाति कुन हो ?" onClick={(e)=> report("personal" ,'Q17','Q17. जात/जाति कुन हो ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q18"} label="Q18. मातृभाषा के हो ? " onClick={(e)=> report("personal" ,'Q18','Q18. मातृभाषा के हो ? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q19"} label="Q19.  धर्म के हो ?" onClick={(e)=> report("personal" ,'Q19','Q19.  धर्म के हो ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header="Q20. कामदार को रुपमा घर बाहिर जानु भाएको छ कि?">
                            <Button key ={"Q20"} label="Q20. कामदार को रुपमा घर बाहिर जानु भाएको छ कि?" onClick={(e)=> report("personal" ,'Q20','Q20. कामदार को रुपमा घर बाहिर जानु भाएको छ कि?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q21"} label="Q21. कामदार को रुपमा घर बाहिर जानु भाएको छ भने कुन कम गर्नु हुन्छ" onClick={(e)=> report("personal" ,'Q21','Q21. कामदार को रुपमा घर बाहिर जानु भाएको छ भने कुन कम गर्नु हुन्छ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header="Q22. पढ्न लेख्न जान्नु भएको छ ?">
                            <Button key ={"Q22"} label="Q22. पढ्न लेख्न जान्नु भएको छ ?" onClick={(e)=> report("personal" ,'Q22','Q22. पढ्न लेख्न जान्नु भएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q23"} label="Q23. कति पढ्नु भएको छ ? " onClick={(e)=> report("personal" ,'Q23','Q23. कति पढ्नु भएको छ ? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q24"} label="Q24. हाल स्कुल गईरहनु भएको छ?" onClick={(e)=> report("personal" ,'Q24','Q24. हाल स्कुल गईरहनु भएको छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q25"} label="Q25. हाल स्कूल जाने गर्नु भएको छैन भने के कारणले नजानु भएको" onClick={(e)=> report("personal" ,'Q25','Q25. हाल स्कूल जाने गर्नु भएको छैन भने के कारणले नजानु भएको')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q151"} label="Q151  कुनै प्राबिधिक शिक्षा पढ्नु भएको छ ?" onClick={(e)=> report("personal" ,'Q151','Q151  कुनै प्राबिधिक शिक्षा पढ्नु भएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q151_1"} label="Q151.1   प्राबिधिक शिक्षा पढ्नु भएको छ भए कुन" onClick={(e)=> report("personal" ,'Q151_1','Q151.1   प्राबिधिक शिक्षा पढ्नु भएको छ भए कुन')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q25_2"} label="Q25.2. जन्म दर्ता गर्नु भएको छ ?" onClick={(e)=> report("personal" ,'Q25_2','Q25.2. जन्म दर्ता गर्नु भएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q25_3"} label="Q25.3. जन्म दर्ता गर्नु भएको छैन भने किन दर्ता नगर्नु भाको ?" onClick={(e)=> report("personal" ,'Q25_3','Q25.3. जन्म दर्ता गर्नु भएको छैन भने किन दर्ता नगर्नु भाको ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q25_4"} label="Q25.4. नागरिकता लिनु भएको छ ?" onClick={(e)=> report("personal" ,'Q25_4','Q25.4. नागरिकता लिनु भएको छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q25_5"} label="Q25.5. नागरिकता लिनु भएको छैन भने किन नलिनुभएको ?" onClick={(e)=> report("personal" ,'Q25_5','Q25.5. नागरिकता लिनु भएको छैन भने किन नलिनुभएको ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q26"} label="Q26. बैवाहिक स्थिति के हो ?" onClick={(e)=> report("personal" ,'Q26','Q26. बैवाहिक स्थिति के हो ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>
                            <AccordionTab header="Q28.  बितेको १२ महिनामा अक्सर के गर्नुहुन्थ्यो">
                            <Button key ={"Q28"} label="Q28.  बितेको १२ महिनामा अक्सर के गर्नुहुन्थ्यो" onClick={(e)=> report("personal" ,'Q28','Q28.  बितेको १२ महिनामा अक्सर के गर्नुहुन्थ्यो')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            <Button key ={"Q29"} label="Q29. वितेको १२ महिनामा कुनै काम नगर्नुको कारण के हो ? " onClick={(e)=> report("personal" ,'Q29','Q29. वितेको १२ महिनामा कुनै काम नगर्नुको कारण के हो ? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                            </AccordionTab>


                        </Accordion>
                        </div>
                        
                        <div className="p-col-12 p-md-6">
                        <Accordion>
                        <AccordionTab header="Q30. विशेष सीप/ तालिम के  छ ?">
                        <Button key ={"Q30"} label="Q30. विशेष सीप/ तालिम के  छ ?" onClick={(e)=> report("personal" ,'Q30','Q30. विशेष सीप/ तालिम के  छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header="Q30_2. जनचेतना मुलक तालिम केहि लिनु भएको छ">
                        <Button key ={"Q30_2"} label="Q30_2. जनचेतना मुलक तालिम केहि लिनु भएको छ" onClick={(e)=> report("personal" ,'Q30_2','Q30_2. जनचेतना मुलक तालिम केहि लिनु भएको छ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header="Q31. मासिक आम्दानी (रु.अंकमा)">
                        <Button key ={"Q31"} label="Q31. मासिक आम्दानी (रु.अंकमा)" onClick={(e)=> report("personal" ,'Q31','Q31. मासिक आम्दानी (रु.अंकमा)')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header="Q32. कुनै प्रकारको अपाङ्गता छ ?">
                        <Button key ={"Q32"} label="Q32. कुनै प्रकारको अपाङ्गता छ ?" onClick={(e)=> report("personal" ,'Q32','Q32. कुनै प्रकारको अपाङ्गता छ ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q32_1"} label="Q32_1. अपांगता परिचय पत्र लिनु भएको छ?" onClick={(e)=> report("personal" ,'Q32_1','Q32_1. अपांगता परिचय पत्र लिनु भएको छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q33"} label="Q33. अपांगता परिचय पत्र लिनु भएको छ भने कुन" onClick={(e)=> report("personal" ,'Q33','Q33. अपांगता परिचय पत्र लिनु भएको छ भने कुन')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q126"} label="Q126. अपांगको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ कि छैन? " onClick={(e)=> report("personal" ,'Q126','Q126. अपांगको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ कि छैन? ')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q120"} label="Q120. जेष्ठ नागरिकको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ छैन ?" onClick={(e)=> report("personal" ,'Q120','Q120. जेष्ठ नागरिकको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ छैन ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q122"} label="Q122. एकल महिलाको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ कि छैन?" onClick={(e)=> report("personal" ,'Q122','Q122. एकल महिलाको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ कि छैन?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>
                        <AccordionTab header="Q87.  छ महिना वा बढी समयको लागि अन्यत्र बसोबास गर्न जानु भएको छ?">
                        <Button key ={"Q87"} label="Q87.  छ महिना वा बढी समयको लागि अन्यत्र बसोबास गर्न जानु भएको छ?" onClick={(e)=> report("personal" ,'Q87','Q87.  छ महिना वा बढी समयको लागि अन्यत्र बसोबास गर्न जानु भएको छ?')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q88_4"} label="Q88_4. बसोबास किसिम" onClick={(e)=> report("personal" ,'Q88_4','Q88_4. बसोबास किसिम')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q88_5"} label="Q88_5. बसोबास गर्नुको कारण" onClick={(e)=> report("personal" ,'Q88_5','Q88_5. बसोबास गर्नुको कारण')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button key ={"Q88_6"} label="Q88_6. बसाई सराईको स्थान" onClick={(e)=> report("personal" ,'Q88_6','Q88_6. बसाई सराईको स्थान')} className="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        </AccordionTab>



                            </Accordion>
                        </div>

                        
                        
                                              
                    </div>
                </div>
            </div>
           
        </React.Fragment>
    );
}
