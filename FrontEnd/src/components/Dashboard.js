import React, { useState, useEffect , useContext, useRef } from 'react';
import { Panel } from 'primereact/panel';

import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Chart } from 'primereact/chart';
import { ProgressBar } from 'primereact/progressbar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ProductService } from '../service/ProductService';
import { EventService } from '../service/EventService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale } from '@fortawesome/free-solid-svg-icons'


const dropdownCities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

const options = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    defaultDate: '2023-01-01',
    header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true
};

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860'
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e'
        }
    ]
};

export const Dashboard = () => {

    const [tasksCheckbox, setTasksCheckbox] = useState([]);
    const [dropdownCity, setDropdownCity] = useState(null);
    const [events, setEvents] = useState(null);
    const [products, setProducts] = useState(null);
    // const [loadingHH, setLoadingHH]=useState(false);
    // const [loadingP, setLoadingP]=useState(false);

    

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };
    const toast = useRef(null);
    const onTaskCheckboxChange = (e) => {
        let selectedTasks = [...tasksCheckbox];
        if (e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        setTasksCheckbox(selectedTasks);
    };
   
   
    return (
        
        <div className="p-grid p-fluid dashboard">
            {/* {Data.personal && Data.househol? "":<ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/> }
            <Toast ref={toast} /> */}

            

            <div className="p-col-12">
                <Panel header="पर्सा  गाँउपालिका" style={{ height: '100%' }}>
                गाँउपालिकाको चिनारी
पर्सा गाँउपालिका नेपालको प्रशासनिक विभाजन अनुसार मधेश प्रदेश अन्तर्गत सर्लाही जिल्लामा पर्दछ । भौगोलिक रूपमा 26 50'35.66"(डिग्री.) देखि 26 54'10.07"(डिग्री) उत्तरी अक्षांश र ८५° ३७' ८.९९" (डिग्री.) देखि ८५° ४१' ०.७३" पूर्वी देशान्तर पर्छ । समुद्र सतहबाट ३७ देखि १२१ मिटरको उचाइमा पर्ने यो गाँउपालिका समथर तराईमा रहेको छ । मधेश प्रदेशको राजधानी जनकपुरबाट करिब ४२ कि.मी. र सर्लाहीको सदरमुकाम मलङ्गवाबाट १० किलोमिटर पूर्वमा अवस्थित छ । पर्सा गाउँपालिका अवस्थित छ । पर्सा गाउँपालिका पूर्वमा सोनमा गाउँपालिका, पश्चिममा ब्रम्हपुरी गाउँपालिका, उत्तरमा हरिपुरवा नगरपालिका र दक्षिणमा भारतसँग सिमाना जोडिएको गाउँपालिका हो । 
२०७३ सालमा नेपाल सरकारको निर्णयबाट साबिक पर्सा, संग्रामपुर, नारायणपुर र जिंगडवा गा.वि.स. मिसाएर पर्सा गाउँपालिकाको गठन भएको हो । यो गाउँपालिका विकासका प्रचुर सम्भावना बोकेको गाउँपालिकाको दृष्टिकोणबाट हेर्ने गरिन्छ । अर्ध सहरी क्षेत्रको रुपमा बिकास भै रहेको यो गाउँपालिका ४ वटा वडामा बिभाजित छ । पर्सा गाउँपालिकामा व्यापार, उद्योग, कलकारखाना भाषा, धर्म, संस्कृति, परमपरा, धार्मिक, मठमन्दिर, मेला, मस्जिद, ऐतिहासिक, सामाजिक महत्वका तथा सबैलाई मनमोहक तुल्याउन सक्ने मनोरञ्जनका सती बिहुला मन्दिर, मुगलहीया पोखरी, हतियासार र पनपीफी  पर्यटकीय क्षेत्रहरु  रहेका छन् । यस गाउँपालिका तराई क्षेत्रमा पर्ने भएकोले उर्वर तथा समथर भु-भागले गर्दा धान, उखु उत्पादनमा विशेष जोड दिन सकिन्छ । 
यस गाउँपालिकाको मध्ये भागमा पर्ने हुलाकी राजमार्ग क्षेत्र लगायतका स्थानहरु बिकसित बजारमा परिणत हुदै गएको पाईन्छ । यहाँको  जनशक्ति आशा र भरोसा योग्य छ । शान्त र मनोरम बातावरण मधेश प्रदेशको भारतसँग सिमा जोडिएको र सडक सञ्जालको दृष्टिकोणले सहज पहुँच लगायतका कारणले यो गाउँपालिका नागरिकहरुको आकर्षण केन्द्रको रुपमा बिकास हुदै गएको छ । यस गाउँपालिकामा आधारभुत, माध्यमिक शिक्षाका लागि सामुदायिक, संस्थागत विद्यालय रहेका छन् । त्यस्तै स्वास्थ्य क्षेत्रमा प्राथमिक स्वास्थ्य केद्र, स्वास्थ्य चौकी  र स्वास्थ्य क्लिनिक स्थापना भई नियमित सेवा प्रबाह भईरहेको छ ।




२.१.भौगोलिक अवस्थिति
नेपालको मानचित्रमा पर्सा गाँउपालिको भौगोलिक अवस्थिति निम्नअनुसार रहेको छ ।
प्रदेश	        :	            मधेश प्रदेश 
जिल्ला	        :	            सर्लाही
गाँउपालिका	  :	            पर्सा गाँउपालिका
वडा सङ्ख्या	  :	            ६
भौगोलिक अवस्थिति	:	 26 50'35.66"(डिग्री.)  देखि 26 54'10.07"(डिग्री) उत्तरी 
                         ८५° ३७' ८.९९" (डिग्री.) देखि ८५° ४१' ०.७३" पूर्वी देशान्तर
क्षेत्रफल	:             २३.१२ (वर्ग कि.मी.)
उचाइ	:	            समुद्र सतहदेखि करिब ३७ देखि १२१ मिटर सम्म
सिमाना	:	            पूर्व : सोनमा गाउँपालिका
उत्तर :                   हरिपुरवा नगरपालिका
पश्चिम :                  ब्रम्हपुरी गाउँपालिका
दक्षिण :                  भारत
औसत लम्बाइ, चौडाइ	:	पूर्व-पश्चिम लम्बाइ :  ६.५ किमी
                        उत्तर-दक्षिण चौडाइ :  ५.५ किमी.
जलवायु	:	            उष्ण

स्रोतः GIS नक्सा, नापी विभाग ।

२.२.राजनीतिक अवस्थिति 
सङ्घीय मामिला तथा स्थानीय विकास मन्त्रालयले तयार गरेको नमुना बमोजिम गठित गाउँपालिका, गाउँपालिका तथा विशेष, संरक्षित वा स्वायत्त क्षेत्रको सङ्ख्या तथा सिमाना निर्धारण आयोगले मिति २०७३ पुस २२ मा पेस गरेको प्रतिवेदन अनुसार माननीय सङ्घीय मामिला तथा स्थानीय विकास मन्त्रीको संयोजकत्वमा गठित समितिले मिति २०७३/११/२० मा पेस गरेको प्रतिवेदनको आधारमा नेपाल सरकारले मिति २०७३/११/२७ मा देहाय बमोजिम प्रशासकीय हिसाबमा यस गाउँपालिका तत्कालीन पर्सा,  संग्रामपुर, नारायणपुर र जिंगडवा गा.वि.स. हरूलाई समेटेर निर्माण गरिएको गाउँपालिका हो । पर्सा गाउँपालिकामा समेटिएका साबिकको गा.वि.स.हरूको वडागत विवरण निम्नअनुसार रहेको छ . 

                


                </Panel>
            </div>

            
        </div>
    );
}
