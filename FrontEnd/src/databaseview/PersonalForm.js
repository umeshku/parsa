import React, { useState, useEffect, useRef, useContext} from 'react';
import { Toast } from 'primereact/toast';
import classNames from 'classnames';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

import { InputText } from 'primereact/inputtext';

import { Dropdown } from 'primereact/dropdown';

import { Link } from 'react-router-dom';

import { DataContext } from '../DataContext';


export const PersonalForm = (props) => {

    const toast = useRef(null);
const Data=useContext(DataContext)
// const householdColumnsEmpty=Data.householdColumnsEmpty
const household=Data.household
const [record,  setRecord]=useState(props.personal)
const [disabled, setDisabled]=useState(false)
const [submitted, setSubmitted]=useState(false)
console.log(props.houseid)
useEffect(() => {
    if (props.type==='detail') {
        
        setDisabled(true)
    }else if (props.houseid) {
        console.log("hah")
        let _record = { ...record };
        _record.PARENT_KEY = household[props.houseid].KEY;
        _record.Ward = household[props.houseid].Ward;
    }
    
  }, []);

  const [Q14, setQ14]=useState({name: record.Q14})
  const [Q15, setQ15]=useState({name: record.Q15})
  const [Q17, setQ17]=useState({name: record.Q17})
  const [Q18, setQ18]=useState({name: record.Q18})
  const [Q19, setQ19]=useState({name: record.Q19})
  const [Q20, setQ20]=useState({name: record.Q20})
  const [Q21, setQ21]=useState({name: record.Q21})
  const [Q22, setQ22]=useState({name: record.Q22})
  const [Q23, setQ23]=useState({name: record.Q23})
  const [Q24, setQ24]=useState({name: record.Q24})
  const [Q25, setQ25]=useState({name: record.Q25})
  const [Q151, setQ151]=useState({name: record.Q151})
  const [Q151_1, setQ151_1]=useState({name: record.Q151_1})
  const [Q25_2, setQ25_2]=useState({name: record.Q25_2})
  const [Q25_3, setQ25_3]=useState({name: record.Q25_3})
  const [Q25_4, setQ25_4]=useState({name: record.Q25_4})
  const [Q25_5, setQ25_5]=useState({name: record.Q25_5})
  const [Q26, setQ26]=useState({name: record.Q26})
  const [Q28, setQ28]=useState({name: record.Q28})
  const [Q29, setQ29]=useState({name: record.Q29})
  const [Q30, setQ30]=useState({name: record.Q30})
  const [Q30_2, setQ30_2]=useState({name: record.Q30_2})
  const [Q32, setQ32]=useState({name: record.Q32})
  const [Q32_1, setQ32_1]=useState({name: record.Q32_1})
  const [Q33, setQ33]=useState({name: record.Q33})
  const [Q126, setQ126]=useState({name: record.Q126})
  const [Q120, setQ120]=useState({name: record.Q120})
  const [Q122, setQ122]=useState({name: record.Q122})
  const [Q87, setQ87]=useState({name: record.Q87})
  const [Q88_4, setQ88_4]=useState({name: record.Q88_4})
  const [Q88_5, setQ88_5]=useState({name: record.Q88_5})
  const [Q88_6, setQ88_6]=useState({name: record.Q88_6})
  
const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _record = { ...record };
    _record[`${name}`] = val;
    if (props.type==='new') {
        _record.PARENT_KEY = household[props.houseid].KEY;
        _record.Ward = household[props.houseid].Ward;
        _record.id=Data.personal[Data.personal.length-1].id+1
    }
    

    setRecord(_record);
}
const onDroupdownChange = (e, name) => {
    const val = e.value.name;
    // console.log( e.value.name)
    let _record = { ...record };
    _record[`${name}`] = val;

    if (props.type==='new') {
        _record.PARENT_KEY = household[props.houseid].KEY;
        _record.Ward = household[props.houseid].Ward;
        _record.id=Data.personal[Data.personal.length-1].id+1
    }
    setRecord(_record);
}
const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < Data.personal.length; i++) {
        if (Data.personal[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

const saveRecord=()=>{
    if (props.type==='new') {
        fetch('http://127.0.0.1:8000/api/personal/',
                {
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
                    },
                    body: JSON.stringify(record),
                })
                Data.personal.push(record)
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Record Added', life: 3000 });
    }else if (props.type==='update') {
        fetch(`http://127.0.0.1:8000/api/personal/${record.id}/`,
        {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
            },
            body: JSON.stringify(record),

        })
        const index=findIndexById(record.id)
        Data.personal[index]=record
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'record Updated', life: 3000 });
        
        
    }
    setSubmitted(true)
    console.log(record.id)
}

const  gender_choices=[{ name : "1. पुरुष "}, { name : "2. महिला"}, { name : "3. तेस्रो लिङ्ग"},]
const  cha_chaina_choices=[{ name : "1.  छ"}, { name : "2.  छैन"},]
const  Q14_choices=[{ name : "1. परिवारमूली"},{ name : "2. श्रीमान/ श्रीमती"},{ name : "3. छोरा/छोरी"},{ name : "4. साला/जेठाजु/ज्वाँई/भिनाजु/साली/जेठी सासु/बुहारी/भाउजु/नन्द/आमाजु/देवर/देउरानी "},{ name : "5. बाबु/आमा "},{ name : "6. दाजु–भाइ/दिदी–बहिनी"},{ name : "7. भतिजा/भतिजी/भान्जा/भान्जी"},{ name : "8. नाति/नातिनी "},{ name : "9. अन्य नाता नपर्ने"},{ name : "10. घरेलु कामदार"},{ name : "11. काका/काकी"},{ name : "12. हजुरबुबा/हजुरआमा"},{ name : "13. छोरा बुहारी"},]
const  Q17_choices=[{ name : "1. क्षेत्री"},{ name : "2. ब्राम्हण (पहाडी )"},{ name : "3. मगर"},{ name : "4. थारु"},{ name : "5. तामाङ्ग"},{ name : "6. नेवार"},{ name : "7. कामी/बिस्वकर्मा"},{ name : "8. मुस्लिम"},{ name : "9. यादव"},{ name : "10. राई"},{ name : "11. गुरङ्ग"},{ name : "12. दमाई "},{ name : "13. लिम्बु"},{ name : "14. ठकुरी"},{ name : "15. सार्की"},{ name : "16. तेलि"},{ name : "17. चमार /हरिजन /राम"},{ name : "18. कोईरी"},{ name : "19. कार्मी"},{ name : "20. सन्यासी"},{ name : "21. धानुक"},{ name : "22. मुसहर"},{ name : "23. दुसध /पासवान/पासी"},{ name : "24. सेर्पा"},{ name : "25. केवट"},{ name : "26. सोनार"},{ name : "27. ब्राम्हण (तराई )"},{ name : "28. बानियाँ"},{ name : "29. घर्ती , भूजेल"},{ name : "30. मल्लाह"},{ name : "31. कलवार"},{ name : "32. कुमाल"},{ name : "33. हजाम /ठाकुर"},{ name : "34. कार्नु"},{ name : "35. राजवंशी"},{ name : "36. सुनुवार"},{ name : "37. सुडी"},{ name : "38. लोहार"},{ name : "39. तत्मा"},{ name : "40. खत्वे"},{ name : "41. धोबी"},{ name : "42. माझी"},{ name : "43. नुनियाँ"},{ name : "44. कुमहार"},{ name : "45. दनसवार"},{ name : "46. चेपाङ्ग /पूजा"},{ name : "47. हलुवाइ"},{ name : "48. राजपुत"},{ name : "49. कायस्थ"},{ name : "50. बघये"},{ name : "51. मारवाडी"},{ name : "52. संधल /सतार"},{ name : "53. बातर"},{ name : "54. बरई"},{ name : "55. कहर"},{ name : "56. गनगाई"},{ name : "57. लोधा"},{ name : "58. राजभर"},{ name : "59. थामी"},{ name : "60. धिमाल"},{ name : "61. भोटे"},{ name : "62. बिङ /बिन्दा"},{ name : "63. भोडियार/गडेरी"},{ name : "64. नुरङ"},{ name : "65. यक्खा"},{ name : "66. दराइ"},{ name : "67. ताजपुरिया"},{ name : "68. थकाली"},{ name : "69. चिडीमार"},{ name : "70. माला"},{ name : "71. बंगाली"},{ name : "72. छान्त्याल"},{ name : "73. डोम"},{ name : "74. कमार"},{ name : "75. बोटे"},{ name : "76. बर्हमु /बरमु"},{ name : "77. गाइने"},{ name : "78. जिरेल"},{ name : "79. आदीबासी /जनजाती"},{ name : "80. डुरा"},{ name : "81. चुरौटे"},{ name : "82. बादी"},{ name : "83. मेचे"},{ name : "84. लेप्चे"},{ name : "85. हल्खोर"},{ name : "86. पंजावी /सिखा"},{ name : "87. किसान"},{ name : "88. राजी"},{ name : "89. यार्ङसी"},{ name : "90. हायु"},{ name : "91. कोचे"},{ name : "92. धुनिर्या"},{ name : "93. बालुङ"},{ name : "94. जैन"},{ name : "95. मुण्डा"},{ name : "96. राउते"},{ name : "97. यहल्मो"},{ name : "98. पथरबाला /कुसुवादिया"},{ name : "99. कुसन्दा"},{ name : "100. आठपहरिया"},{ name : "101. सुरेल"},{ name : "102. वनकरिया"},{ name : "103. केवरत"},{ name : "१०४. खवास"},{ name : "१०५. दनुवार"},{ name : "१०६. मण्डल"},{ name : "१०७. साह/तेली"},{ name : "१०८. सहानी/ मललाह"},{ name : "१०९. कोइरी/सिंह"},{ name : "११०. रजत"},{ name : "१११. उराँव"},{ name : "११२. मुडीयारी"},{ name : "११३. दास/तक्मा"},{ name : "११४. बिन"},{ name : "११५. अन्य"},{ name : "116. मुखिया"},{ name : "117. रौनियार/काठबानिया"},{ name : "118. कुर्मी"},{ name : "119. लामा"},{ name : "120. कुसवास"},{ name : "121. काबरी"},]
const  Q18_choices=[{ name : "1. नेपाली"},{ name : "2. गुरुगं"},{ name : "3. मगर"},{ name : "4. नेवारी"},{ name : "5. तामाङ्ग"},{ name : "6. हिन्दी"},{ name : "7. मैथली"},{ name : "8. सन्याल"},{ name : "9. मारवाडी"},{ name : "10. लिम्बु"},{ name : "11. राई"},{ name : "12. थारु"},{ name : "13. मुसहर"},{ name : "14. मगर"},{ name : "15. खवास"},{ name : "16. राजवंशी"},{ name : "17. अन्य"},{ name : "18. बजिका"},{ name : "19. उर्दु"},{ name : "20. भोजपुरी"},]
const  Q19_choices=[{ name : "1. हिन्दु"},{ name : "2. वौद्घ"},{ name : "3. किराँत"},{ name : "4. इसाई"},{ name : "5. ईस्लाम"},{ name : "6. किरात"},{ name : "7. जैन"},{ name : "8. सिख"},{ name : "9. बटाई"},{ name : "10. प्रकृति"},{ name : "11. अन्या"},{ name : "12. सनातन"},{ name : "13. कृष्ण प्रणामी"},]
const  Q21_choices=[{ name : "1. घरेलु कामदार"},{ name : "2. होटल तथा रेस्टुरेन्ट"},{ name : "3. उधोग तथा व्यवसाय"},{ name : "4. अन्य (खुलाउने)"},]
const  Q22_choices=[{ name : "1.   पढ्न मात्र जानेको"},{ name : "2.   पढ्न लेख्न जानेको"},{ name : "3.   पढ्न लेख्न दुवै नजानेको"},]
const  Q23_choices=[{ name : "1. साक्षर मात्र"},{ name : "2. प्राथमिक तह"},{ name : "3. निम्नमाध्यमिक तह"},{ name : "4. माध्यमिक तह"},{ name : "5. S.L.C/S.E.E तह"},{ name : "6. IA (10+2) तह"},{ name : "7. BA (स्नातक )वा सो सरह"},{ name : "8. MA (स्नातकोतर) वा सो भन्दा माथि"},]
const  Q25_choices=[{ name : "1. विद्यालय धेरै टाढा भएको"},{ name : "2. भाइबहिनीको हेरचाह र घरायसी काम गर्नुपरेको"},{ name : "3. ज्याला मजदुरी"},{ name : "4. विवाह भएको"},{ name : "5. खर्च व्यहोर्न नसकेको"},{ name : "6. अन्य (खुलाउने)"},]
const  Q25_3_choices=[{ name : "1. अब बनाउने"},{ name : "2. थाहा नभयर"},{ name : "3. बनाउन नमिलेर"},]
const  Q26_choices=[{ name : "1. विवाह नभएका"},{ name : "2. एक विवाह"},{ name : "3. बहुविवाह"},{ name : "4. पुर्नविवाह"},{ name : "5. विधुर/विधुवा"},{ name : "6. सम्बन्ध विच्छेद"},{ name : "7. छुट्टिएको"},]
const  Q28_choices=[{ name : "1. कृषि तथा खेती"},{ name : "2. नोकरी "},{ name : "3. ज्यालादारी  "},{ name : "4. दक्ष  रोजगारी"},{ name : "5. वैदेशिक रोजगार "},{ name : "6. ब्यापार/व्यवसाय"},{ name : "7. विस्तारित आर्थिक काम/उद्योग"},{ name : "8. बेरोजगार"},{ name : "9. घरायसी काम मात्रै"},{ name : "10. अध्ययन  "},{ name : "11. शिक्षक"},{ name : "12. राजनीति"},{ name : "13. समाज सेवा"},{ name : "14.राष्ट्र सेवा "},{ name : "11. अन्य पेशा"},{ name : "12. कुनै काम नगरेको"},]
const  Q29_choices=[{ name : "1. पेन्सन आयस्ता"},{ name : "2. वृद्ध"},{ name : "3. शारिरीक मानसिक रुपमा अपाङ्ग"},{ name : "4. विरामी वा जीर्णरोगी"},{ name : "5. कुनै सीप नभएको"},{ name : "6. अन्य कारण(खुलाउने)"},]
const  Q30_choices=[{ name : "1.  सूचना तथा प्रविधि, इलेक्ट्रीकल र इलेक्ट्रोनिक्स (कम्प्युटर, विद्युत, मोवाईल, रेडियो घडि आदी"},{ name : "2. सिलाई बुनाई"},{ name : "3. बुटिक"},{ name : "4. सृंगार, पार्लर आदि"},{ name : "5. म्यासन"},{ name : "6. निर्माण सम्बन्धी"},{ name : "7. कार्पेन्ट्री"},{ name : "8. प्लम्बिंग "},{ name : "9.  इञ्जिनियरिङ्ग, "},{ name : "10. अटोमोवाइल र मेकानिक्स"},{ name : "11.  कृषि सम्बन्धी (जेटी, जेटीएर खाद्य प्रसोधन आदि)"},{ name : "12.  जनस्वास्थ्य सम्बन्धी"},{ name : "13.  पशुस्वास्थ्य सम्बन्धी"},{ name : "14.  वन सम्बन्धी"},{ name : "15.  पर्यटन टुर गाइड, ट्राभल र सत्कार"},{ name : "16.  होटल सम्बन्धी"},{ name : "17.  सवारी चालक"},{ name : "18. हस्तकला सम्बन्धी "},{ name : "19. चित्रकला"},{ name : "20.  फोटोग्राफी"},{ name : "21.  अन्य (खुलाउने)"},{ name : "22.  कुनै सीप/तालिम नभएको"},]
const  Q30_2_choices=[{ name : "1.       बचत तथा ऋण"},{ name : "2.       संस्थागत नेतृत्व"},{ name : "3.       लैंगिक समबिकस"},{ name : "4.       स्वास्थ्य"},{ name : "5.       परिवार नियोजन"},{ name : "6.       खानेपानी सरसफाई"},{ name : "7.       वन व्यवस्थापन"},{ name : "8.       फोहोरमैला व्यवस्थापन"},{ name : "9.       सिप बिकास"},{ name : "10.    अन्य"},{ name : "11.    छैन"},]
const  Q32_choices=[{ name : "1. शारिरीक अपाङ्ग  "},{ name : "2. दृष्टिविहिन"},{ name : "3. बहिरा"},{ name : "4. सुस्त मनस्थिति"},{ name : "5. बहुअपाङ्गता"},{ name : "6. दीर्घरोगी"},{ name : "7. केही छैन् "},]
const  Q33_choices=[{ name : "1. पूर्ण अशक्त (रातो रंगको)"},{ name : "2. अति अशक्त (नीलो रगको)"},{ name : "3. मध्यम अपांगता (पहेंलो रंगको)"},{ name : "4. सामान्य अपांगता (सेतो रगका)"},]
const  Q88_4_choices=[{ name : "1. स्थायी "},{ name : "2. अस्थायी"},]
const  Q88_5_choices=[{ name : "1. अध्ययन/तालिम"},{ name : "2. जागिर/रोजगारी"},{ name : "3. वैदेशिक रोजगारी"},{ name : "4. शान्ति सुरक्षा"},{ name : "5. अन्य"},]
const  Q88_6_choices=[{ name : "1. अर्को न.पा /गा.पा...... "},{ name : "2. अर्को जिल्ला ................"},{ name : "3. विदेश........................."},]
const  Q151_1_choices=[{ name : "1. डाक्टर"},{ name : "2. इन्जिनियर"},{ name : "3. ओवारसियारा"},{ name : "4. जे टि ए"},{ name : "5. नर्स"},{ name : "6. H. A/ C M A"},{ name : "7. भेटेनरी"},{ name : "8. अमिन"},{ name : "9. पाइलट"},{ name : "10. होटेल व्यवस्थापन"},{ name : "11. ल्याब"},{ name : "12. रेडियोलोजी"},{ name : "13. आई. टि"},{ name : "14. अन्य खुलाउनुहोस"},]


    return (
        <>
        <Link to={`/personal/`}> <h4>Back to Persona Table</h4></Link>
        <div className="p-grid">
            <div className="p-col-12">
            <div className="card p-fluid">
            <Toast ref={toast} />
            <div className="p-field">
                    <label htmlFor="Ward">Ward</label>
                    <InputNumber id="Ward" disabled value={props.houseid ? household[props.houseid].Ward: record.Ward}  className='.p-field' onChange={(e) => onInputChange(e, 'Ward')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q13">Q13. तपाईको परिवारमा बसोबास गर्ने सदस्यहरुको (पारिवारिक सदस्य बाहेक पनि) नाम परिवारमूलीबाट क्रमैसँग बताउनुहोस्</label>
                    <InputText id="Q13" disabled={disabled ? 'disabled' : null} value={record && record.Q13} className='.p-field' onChange={(e) => onInputChange(e, 'Q13')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q14">Q14.परिवार मूलीको के नाता पर्नु हुन्छ ?</label>
                    <Dropdown value={Q14} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q14');setQ14(e.value)}} options={Q14_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q14 })} />
                    {submitted && !record.Q14&& <small className="p-invalid">Q14.परिवार मूलीको के नाता पर्नु हुन्छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q15">Q15. लिङ्ग कुन हो ? </label>
                    <Dropdown value={Q15} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q15');setQ15(e.value)}} options={gender_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q15 })} />
                    {submitted && !record.Q15&& <small className="p-invalid">Q15. लिङ्ग कुन हो ?  is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q15_1">Q15. तेश्रो लिङ्ग हो ? के तपाई निश्चित हुनुहुन्छ तेस्रो लिंगी भनेर</label>
                    <InputText id="Q15_1" disabled={disabled ? 'disabled' : null} value={record && record.Q15_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q15_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q16">Q16. कति वर्ष पुरा हुनु भयो ?(पुरा भएको वर्ष अंकमा लेख्नुहोस् एक वर्ष पुरा नभए ०० लेख्नुहोस्)</label>
                    <InputNumber id="Q16" disabled={disabled ? 'disabled' : null} value={record && record.Q16}  className='.p-field' onChange={(e) => onInputChange(e, 'Q16')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="age_group">उमेर समूह</label>
                    <InputText id="age_group" disabled={disabled ? 'disabled' : null} value={record && record.age_group} className='.p-field' onChange={(e) => onInputChange(e, 'age_group')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q17">Q17. जात/जाति कुन हो ?</label>
                    <Dropdown value={Q17} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q17');setQ17(e.value)}} options={Q17_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q17 })} />
                    {submitted && !record.Q17&& <small className="p-invalid">Q17. जात/जाति कुन हो ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q17_1">Q17.1.जात/जाति अन्य भए लेखानुहोस</label>
                    <InputText id="Q17_1" disabled={disabled ? 'disabled' : null} value={record && record.Q17_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q17_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q18">Q18. मातृभाषा के हो ? </label>
                    <Dropdown value={Q18} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q18');setQ18(e.value)}} options={Q18_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q18 })} />
                    {submitted && !record.Q18&& <small className="p-invalid">Q18. मातृभाषा के हो ?  is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q18_1">Q18_1. मातृभाषा अन्य भए लेखानुहोस</label>
                    <InputText id="Q18_1" disabled={disabled ? 'disabled' : null} value={record && record.Q18_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q18_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q19">Q19.  धर्म के हो ?</label>
                    <Dropdown value={Q19} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q19');setQ19(e.value)}} options={Q19_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q19 })} />
                    {submitted && !record.Q19&& <small className="p-invalid">Q19.  धर्म के हो ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q19_1">Q19_1. धर्म अन्य भए लेखानुहोस</label>
                    <InputText id="Q19_1" disabled={disabled ? 'disabled' : null} value={record && record.Q19_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q19_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q20">Q20. कामदार को रुपमा घर बाहिर जानु भाएको छ कि?</label>
                    <Dropdown value={Q20} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q20');setQ20(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q20 })} />
                    {submitted && !record.Q20&& <small className="p-invalid">Q20. कामदार को रुपमा घर बाहिर जानु भाएको छ कि? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q21">Q21. कामदार को रुपमा घर बाहिर जानु भाएको छ भने कुन कम गर्नु हुन्छ</label>
                    <Dropdown value={Q21} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q21');setQ21(e.value)}} options={Q21_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q21 })} />
                    {submitted && !record.Q21&& <small className="p-invalid">Q21. कामदार को रुपमा घर बाहिर जानु भाएको छ भने कुन कम गर्नु हुन्छ is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q21_1">Q21_1. अन्य (खुलाउने)</label>
                    <InputText id="Q21_1" disabled={disabled ? 'disabled' : null} value={record && record.Q21_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q21_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q22">Q22. पढ्न लेख्न जान्नु भएको छ ?</label>
                    <Dropdown value={Q22} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q22');setQ22(e.value)}} options={Q22_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q22 })} />
                    {submitted && !record.Q22&& <small className="p-invalid">Q22. पढ्न लेख्न जान्नु भएको छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q23">Q23. कति पढ्नु भएको छ ? </label>
                    <Dropdown value={Q23} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q23');setQ23(e.value)}} options={Q23_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q23 })} />
                    {submitted && !record.Q23&& <small className="p-invalid">Q23. कति पढ्नु भएको छ ?  is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q24">Q24. हाल स्कुल गईरहनु भएको छ?</label>
                    <Dropdown value={Q24} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q24');setQ24(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q24 })} />
                    {submitted && !record.Q24&& <small className="p-invalid">Q24. हाल स्कुल गईरहनु भएको छ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q25">Q25. हाल स्कूल जाने गर्नु भएको छैन भने के कारणले नजानु भएको</label>
                    <Dropdown value={Q25} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q25');setQ25(e.value)}} options={Q25_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q25 })} />
                    {submitted && !record.Q25&& <small className="p-invalid">Q25. हाल स्कूल जाने गर्नु भएको छैन भने के कारणले नजानु भएको is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q25_1">Q25. हाल स्कूल नजानुको कारणले अन्य (खुलाउने)</label>
                    <InputText id="Q25_1" disabled={disabled ? 'disabled' : null} value={record && record.Q25_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q25_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q151">Q151  कुनै प्राबिधिक शिक्षा पढ्नु भएको छ ?</label>
                    <Dropdown value={Q151} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q151');setQ151(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q151 })} />
                    {submitted && !record.Q151&& <small className="p-invalid">Q151  कुनै प्राबिधिक शिक्षा पढ्नु भएको छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q151_1">Q151.1   प्राबिधिक शिक्षा पढ्नु भएको छ भए कुन</label>
                    <Dropdown value={Q151_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q151_1');setQ151_1(e.value)}} options={Q151_1_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q151_1 })} />
                    {submitted && !record.Q151_1&& <small className="p-invalid">Q151.1   प्राबिधिक शिक्षा पढ्नु भएको छ भए कुन is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q151_2">Q151.2  प्राबिधिक शिक्षा पढ्नु भएको अन्य भए लेखनुहोस</label>
                    <InputText id="Q151_2" disabled={disabled ? 'disabled' : null} value={record && record.Q151_2} className='.p-field' onChange={(e) => onInputChange(e, 'Q151_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q25_2">Q25.2. जन्म दर्ता गर्नु भएको छ ?</label>
                    <Dropdown value={Q25_2} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q25_2');setQ25_2(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q25_2 })} />
                    {submitted && !record.Q25_2&& <small className="p-invalid">Q25.2. जन्म दर्ता गर्नु भएको छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q25_3">Q25.3. जन्म दर्ता गर्नु भएको छैन भने किन दर्ता नगर्नु भाको ?</label>
                    <Dropdown value={Q25_3} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q25_3');setQ25_3(e.value)}} options={Q25_3_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q25_3 })} />
                    {submitted && !record.Q25_3&& <small className="p-invalid">Q25.3. जन्म दर्ता गर्नु भएको छैन भने किन दर्ता नगर्नु भाको ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q25_3_1">Q25.3.1. जन्म दर्ता गर्नु नमिलेको भए नमिल्नुको कारण लेख्नुहोस्</label>
                    <InputText id="Q25_3_1" disabled={disabled ? 'disabled' : null} value={record && record.Q25_3_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q25_3_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q25_4">Q25.4. नागरिकता लिनु भएको छ ?</label>
                    <Dropdown value={Q25_4} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q25_4');setQ25_4(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q25_4 })} />
                    {submitted && !record.Q25_4&& <small className="p-invalid">Q25.4. नागरिकता लिनु भएको छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q25_5">Q25.5. नागरिकता लिनु भएको छैन भने किन नलिनुभएको ?</label>
                    <Dropdown value={Q25_5} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q25_5');setQ25_5(e.value)}} options={Q25_3_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q25_5 })} />
                    {submitted && !record.Q25_5&& <small className="p-invalid">Q25.5. नागरिकता लिनु भएको छैन भने किन नलिनुभएको ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q26">Q26. बैवाहिक स्थिति के हो ?</label>
                    <Dropdown value={Q26} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q26');setQ26(e.value)}} options={Q26_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q26 })} />
                    {submitted && !record.Q26&& <small className="p-invalid">Q26. बैवाहिक स्थिति के हो ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q27">Q27. बिवाह गर्दाको उमेर कति हो ?</label>
                    <InputNumber id="Q27" disabled={disabled ? 'disabled' : null} value={record && record.Q27}  className='.p-field' onChange={(e) => onInputChange(e, 'Q27')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q28">Q28.  बितेको १२ महिनामा अक्सर के गर्नुहुन्थ्यो</label>
                    <Dropdown value={Q28} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q28');setQ28(e.value)}} options={Q28_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q28 })} />
                    {submitted && !record.Q28&& <small className="p-invalid">Q28.  बितेको १२ महिनामा अक्सर के गर्नुहुन्थ्यो is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q29">Q29. वितेको १२ महिनामा कुनै काम नगर्नुको कारण के हो ? </label>
                    <Dropdown value={Q29} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q29');setQ29(e.value)}} options={Q29_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q29 })} />
                    {submitted && !record.Q29&& <small className="p-invalid">Q29. वितेको १२ महिनामा कुनै काम नगर्नुको कारण के हो ?  is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q29_1">Q29. वितेको १२ महिनामा कुनै काम नगर्नुको कारण  अन्य भए खुलाउनुहोस्</label>
                    <InputText id="Q29_1" disabled={disabled ? 'disabled' : null} value={record && record.Q29_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q29_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q30">Q30. विशेष सीप/ तालिम के  छ ?</label>
                    <Dropdown value={Q30} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q30');setQ30(e.value)}} options={Q30_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q30 })} />
                    {submitted && !record.Q30&& <small className="p-invalid">Q30. विशेष सीप/ तालिम के  छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q30_1">Q30. विशेष सीप/ तालिम अन्य भए खुलाउनुहोस्</label>
                    <InputText id="Q30_1" disabled={disabled ? 'disabled' : null} value={record && record.Q30_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q30_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q30_2">Q30_2. जनचेतना मुलक तालिम केहि लिनु भएको छ</label>
                    <Dropdown value={Q30_2} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q30_2');setQ30_2(e.value)}} options={Q30_2_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q30_2 })} />
                    {submitted && !record.Q30_2&& <small className="p-invalid">Q30_2. जनचेतना मुलक तालिम केहि लिनु भएको छ is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q30_3">Q30_3. अन्य भए खुलाउनुहोस्</label>
                    <InputText id="Q30_3" disabled={disabled ? 'disabled' : null} value={record && record.Q30_3} className='.p-field' onChange={(e) => onInputChange(e, 'Q30_3')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q31">Q31. मासिक आम्दानी (रु.अंकमा)</label>
                    <InputNumber id="Q31" disabled={disabled ? 'disabled' : null} value={record && record.Q31}  className='.p-field' onChange={(e) => onInputChange(e, 'Q31')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q32">Q32. कुनै प्रकारको अपाङ्गता छ ?</label>
                    <Dropdown value={Q32} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q32');setQ32(e.value)}} options={Q32_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q32 })} />
                    {submitted && !record.Q32&& <small className="p-invalid">Q32. कुनै प्रकारको अपाङ्गता छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q32_1">Q32_1. अपांगता परिचय पत्र लिनु भएको छ?</label>
                    <Dropdown value={Q32_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q32_1');setQ32_1(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q32_1 })} />
                    {submitted && !record.Q32_1&& <small className="p-invalid">Q32_1. अपांगता परिचय पत्र लिनु भएको छ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q33">Q33. अपांगता परिचय पत्र लिनु भएको छ भने कुन</label>
                    <Dropdown value={Q33} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q33');setQ33(e.value)}} options={Q33_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q33 })} />
                    {submitted && !record.Q33&& <small className="p-invalid">Q33. अपांगता परिचय पत्र लिनु भएको छ भने कुन is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q126">Q126. अपांगको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ कि छैन? </label>
                    <Dropdown value={Q126} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q126');setQ126(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q126 })} />
                    {submitted && !record.Q126&& <small className="p-invalid">Q126. अपांगको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ कि छैन?  is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q126_1">Q127. यदि छैन भने किन? </label>
                    <InputText id="Q126_1" disabled={disabled ? 'disabled' : null} value={record && record.Q126_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q126_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q120">Q120. जेष्ठ नागरिकको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ छैन ?</label>
                    <Dropdown value={Q120} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q120');setQ120(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q120 })} />
                    {submitted && !record.Q120&& <small className="p-invalid">Q120. जेष्ठ नागरिकको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ छैन ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q121">Q121. यदि छैन भने किन ?</label>
                    <InputText id="Q121" disabled={disabled ? 'disabled' : null} value={record && record.Q121} className='.p-field' onChange={(e) => onInputChange(e, 'Q121')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q122">Q122. एकल महिलाको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ कि छैन?</label>
                    <Dropdown value={Q122} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q122');setQ122(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q122 })} />
                    {submitted && !record.Q122&& <small className="p-invalid">Q122. एकल महिलाको हकमा सामाजिक सुरक्षा भत्ता लिने गरेको छ कि छैन? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q123">Q123. यदि छैन भने किन ?</label>
                    <InputText id="Q123" disabled={disabled ? 'disabled' : null} value={record && record.Q123} className='.p-field' onChange={(e) => onInputChange(e, 'Q123')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q87">Q87.  छ महिना वा बढी समयको लागि अन्यत्र बसोबास गर्न जानु भएको छ?</label>
                    <Dropdown value={Q87} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q87');setQ87(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q87 })} />
                    {submitted && !record.Q87&& <small className="p-invalid">Q87.  छ महिना वा बढी समयको लागि अन्यत्र बसोबास गर्न जानु भएको छ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q88_4">Q88_4. बसोबास किसिम</label>
                    <Dropdown value={Q88_4} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q88_4');setQ88_4(e.value)}} options={Q88_4_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q88_4 })} />
                    {submitted && !record.Q88_4&& <small className="p-invalid">Q88_4. बसोबास किसिम is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q88_5">Q88_5. बसोबास गर्नुको कारण</label>
                    <Dropdown value={Q88_5} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q88_5');setQ88_5(e.value)}} options={Q88_5_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q88_5 })} />
                    {submitted && !record.Q88_5&& <small className="p-invalid">Q88_5. बसोबास गर्नुको कारण is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q88_6">Q88_6. बसाई सराईको स्थान</label>
                    <Dropdown value={Q88_6} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q88_6');setQ88_6(e.value)}} options={Q88_6_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q88_6 })} />
                    {submitted && !record.Q88_6&& <small className="p-invalid">Q88_6. बसाई सराईको स्थान is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q88_6_1">Q88_6_1. बसाई सराईको स्थान को नाम लेख्नुहोस</label>
                    <InputText id="Q88_6_1" disabled={disabled ? 'disabled' : null} value={record && record.Q88_6_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q88_6_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="PARENT_KEY">PARENT_KEY</label>
                    <InputText id="PARENT_KEY" disabled value={props.houseid ? household[props.houseid].KEY : record.PARENT_KEY} className='.p-field' onChange={(e) => onInputChange(e, 'PARENT_KEY')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="KEY">KEY</label>
                    <InputText id="KEY" disabled value={record.KEY} className='.p-field' onChange={(e) => onInputChange(e, 'KEY')}  />  
                    </div>





                    {/* <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} /> */}
                    <Button label="Submit" icon="pi pi-check" className="p-button-text" onClick={saveRecord} />
                </div>
            </div>
        </div>
        </>
    );
}
