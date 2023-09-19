import React, { useState, useEffect, useRef, useContext} from 'react';
import { Toast } from 'primereact/toast';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Redirect } from "react-router-dom";

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
const apiService = new ApiService();

export const HouseholdForm = (props) => {

    const toast = useRef(null);
const Data=useContext(DataContext)
// const householdColumnsEmpty=Data.householdColumnsEmpty
// const household=Data.household
const [record,  setRecord]=useState(props.household)
const [disabled, setDisabled]=useState(false)
const [submitted, setSubmitted]=useState(false)
console.log("hehe",props.household)
useEffect(() => {
    if (props.type==='detail') {
        
        setDisabled(true)
    }
    
  }, []);


const [Funcational_Type, setFuncational_Type]=useState({name: record.Funcational_Type})
const [Q3_1, setQ3_1]=useState({name: record.Q3_1})
const [Q3_2, setQ3_2]=useState({name: record.Q3_2})
const [Q3_3, setQ3_3]=useState({name: record.Q3_3})
const [Q3_4, setQ3_4]=useState({name: record.Q3_4})
const [Q3_5, setQ3_5]=useState({name: record.Q3_5})
const [Q3_6, setQ3_6]=useState({name: record.Q3_6})
const [Q5, setQ5]=useState({name: record.Q5})
const [Q8, setQ8]=useState({name: record.Q8})
const [Q11, setQ11]=useState({name: record.Q11})
const [Q10, setQ10]=useState({name: record.Q10})
const [Q37, setQ37]=useState({name: record.Q37})
const [Q35, setQ35]=useState({name: record.Q35})
const [Q35_1, setQ35_1]=useState({name: record.Q35_1})
const [Q34, setQ34]=useState({name: record.Q34})
const [Q36, setQ36]=useState({name: record.Q36})
const [Q39, setQ39]=useState({name: record.Q39})
const [Q40, setQ40]=useState({name: record.Q40})
const [Q41, setQ41]=useState({name: record.Q41})
const [Q41_2, setQ41_2]=useState({name: record.Q41_2})
const [Q41_3, setQ41_3]=useState({name: record.Q41_3})
const [Q41_1, setQ41_1]=useState({name: record.Q41_1})
const [Q43, setQ43]=useState({name: record.Q43})
const [Q45, setQ45]=useState({name: record.Q45})
const [Q48_a, setQ48_a]=useState({name: record.Q48_a})
const [Q48_a1, setQ48_a1]=useState({name: record.Q48_a1})
const [Q48_a2, setQ48_a2]=useState({name: record.Q48_a2})
const [Q48_a3, setQ48_a3]=useState({name: record.Q48_a3})
const [Q49, setQ49]=useState({name: record.Q49})
const [Q50, setQ50]=useState({name: record.Q50})
const [Q55, setQ55]=useState({name: record.Q55})
const [Q55_1, setQ55_1]=useState({name: record.Q55_1})
const [Q56, setQ56]=useState({name: record.Q56})
const [Q59, setQ59]=useState({name: record.Q59})
const [Q60, setQ60]=useState({name: record.Q60})
const [Q61, setQ61]=useState({name: record.Q61})
const [Q62, setQ62]=useState({name: record.Q62})
const [Q63, setQ63]=useState({name: record.Q63})
const [Q65, setQ65]=useState({name: record.Q65})
const [Q66, setQ66]=useState({name: record.Q66})
const [Q67, setQ67]=useState({name: record.Q67})
const [Q67_8, setQ67_8]=useState({name: record.Q67_8})
const [Q68, setQ68]=useState({name: record.Q68})
const [Q69, setQ69]=useState({name: record.Q69})
const [Q69_1, setQ69_1]=useState({name: record.Q69_1})
const [Q150, setQ150]=useState({name: record.Q150})
const [Q150_1, setQ150_1]=useState({name: record.Q150_1})
const [Q150_3, setQ150_3]=useState({name: record.Q150_3})
const [Q72, setQ72]=useState({name: record.Q72})
const [Q73, setQ73]=useState({name: record.Q73})
const [Q75, setQ75]=useState({name: record.Q75})
const [Q78, setQ78]=useState({name: record.Q78})
const [Q79, setQ79]=useState({name: record.Q79})
const [Q81_1, setQ81_1]=useState({name: record.Q81_1})
const [Q81_2, setQ81_2]=useState({name: record.Q81_2})
const [Q81_3, setQ81_3]=useState({name: record.Q81_3})
const [Q81_4, setQ81_4]=useState({name: record.Q81_4})
const [Q81_5, setQ81_5]=useState({name: record.Q81_5})
const [Q81_6, setQ81_6]=useState({name: record.Q81_6})
const [Q81_7, setQ81_7]=useState({name: record.Q81_7})
const [Q81_8, setQ81_8]=useState({name: record.Q81_8})
const [Q81_9, setQ81_9]=useState({name: record.Q81_9})
const [Q81_10, setQ81_10]=useState({name: record.Q81_10})
const [Q81_11, setQ81_11]=useState({name: record.Q81_11})
const [Q81_12, setQ81_12]=useState({name: record.Q81_12})
const [Q81_13, setQ81_13]=useState({name: record.Q81_13})
const [Q83, setQ83]=useState({name: record.Q83})
const [Q85, setQ85]=useState({name: record.Q85})
const [Q86, setQ86]=useState({name: record.Q86})
const [Q89, setQ89]=useState({name: record.Q89})
const [Q90, setQ90]=useState({name: record.Q90})
const [Q91, setQ91]=useState({name: record.Q91})
const [Q92, setQ92]=useState({name: record.Q92})
const [Q93, setQ93]=useState({name: record.Q93})
const [Q94, setQ94]=useState({name: record.Q94})
const [Q95, setQ95]=useState({name: record.Q95})
const [Q98_1, setQ98_1]=useState({name: record.Q98_1})
const [Q101_1, setQ101_1]=useState({name: record.Q101_1})
const [Q101_2, setQ101_2]=useState({name: record.Q101_2})
const [Q101_5, setQ101_5]=useState({name: record.Q101_5})
const [Q101_6, setQ101_6]=useState({name: record.Q101_6})
const [Q109_1, setQ109_1]=useState({name: record.Q109_1})
const [Q109_2, setQ109_2]=useState({name: record.Q109_2})
const [Q109_3, setQ109_3]=useState({name: record.Q109_3})
const [Q110, setQ110]=useState({name: record.Q110})
const [Q111, setQ111]=useState({name: record.Q111})
const [Q112, setQ112]=useState({name: record.Q112})
const [Q114, setQ114]=useState({name: record.Q114})
const [Q114_1, setQ114_1]=useState({name: record.Q114_1})
const [Q115, setQ115]=useState({name: record.Q115})
const [Q116, setQ116]=useState({name: record.Q116})
const [Q117, setQ117]=useState({name: record.Q117})
const [Q118, setQ118]=useState({name: record.Q118})
const [Q119, setQ119]=useState({name: record.Q119})
const [Q127_1, setQ127_1]=useState({name: record.Q127_1})
const [Q129, setQ129]=useState({name: record.Q129})
const [Q130, setQ130]=useState({name: record.Q130})
const [Q132, setQ132]=useState({name: record.Q132})
const [Q135, setQ135]=useState({name: record.Q135})


const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _record = { ...record };
    _record[`${name}`] = val;

    setRecord(_record);
}
const onDroupdownChange = (e, name) => {
    const val = e.value.name;
    // console.log( e.value.name)
    let _record = { ...record };
    _record[`${name}`] = val;

    setRecord(_record);
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

const saveRecord=()=>{
    if (props.type==='new') {
        
        apiService.createHousehold(record)
        .then((response) => {
        // Handle the API response here
        console.log(response)
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Record Added', life: 3000 });
        })
        .catch((error) => {
        // Handle errors here
        });   

    }else if (props.type==='update') {
        fetch(`http://127.0.0.1:8000/api/household/${record.id}/`,
        {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Token e9413bcdc5dc1c45cfb4d339e6328665b586574d'
            },
            body: JSON.stringify(record),

        })
        const index=findIndexById(record.id)
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'record Updated', life: 3000 });
        
        
    }
    setSubmitted(true)
    // console.log(record.id)
    // return 
    // <Redirect to={`/household`}>

     
}
const [selectedWard, setSelectedWard]=useState({name: record.Ward})
const WardChoice = [
    { name: 1},
    { name: 2},
    { name: 3},
    { name: 4 },
    { name: 5},
    { name: 6},
   
];
const  Fun_Type_choices=[{ name : "1. आवासीय (Residential )"}, { name : "2. हुलाक घर (Post Office)"}, { name : "3. होस्पितल (Hospital)"}, { name : "4. हेल्थ पोस्ट (Health Post)"}, { name : "5. क्लिनिक (Clinic)"}, { name : "6. वार्ड ओफिस (Ward Office)"}, { name : "7. नगरपालिकाको कार्यालय (Municipality Office)"}, { name : "8. NTC/Ncell (NTC/Ncell)"}, { name : "9. बैंक (Bank)"}, { name : "10. शोपिंग महल (Shopping Mall)"}, { name : "11. आर्मी कम्प (Army Camp)"}, { name : "12. ससत्र प्रहरी बल (Armed Police Force)"}, { name : "13. प्रहरी चौकी (police Station)"}, { name : "14. मन्दिर (Temple)"}, { name : "15. गुम्बाघर (Monestery)"}, { name : "16. चर्च (Church)"}, { name : "17. मस्जित (Masjit)"}, { name : "18. गुठि (Guthi)"}, { name : "19. पार्क (Park)"}, { name : "20. पर्तिक्छालय (Partikyshalaya)"}, { name : "21. पुस्तकालय (Library)"}, { name : "22. पसल (Shop)"}, { name : "23. सरकारी भवन (GOV Sub Categary)"}, { name : "24. सहकारी (Cooperative)"}, { name : "25. बिधालय (School)"}, { name : "26. कलेज/ कम्पस (Campus/College)"}, { name : "27. सभा गृह (City Hall)"}, { name : "28. सिनेमा हल (Cinema Hall)"}, { name : "29. नर्सिंग होम (Nursing Home)"}, { name : "30. बहु उधेस्य  (Multi Purposed)"}, { name : "31. गैर सरकारी/अन्तरास्ट्रिय संथा (NGO/INGO)"},]
const  gender_choices=[{ name : "1. पुरुष "}, { name : "2. महिला"}, { name : "3. तेस्रो लिङ्ग"},]
const  ho_hoina_choices=[{ name : "1. हो"}, { name : "2.  होईन "},]
const  cha_chaina_choices=[{ name : "1.  छ"}, { name : "2.  छैन"},]
const  bechchu_bechdina_choices=[{ name : "1. बेच्छु "}, { name : "2. बेच्दिन"},]
const  pugcha_pugdaina_choices=[{ name : "1. पुग्छ"}, { name : "2. पुग्दैन"},]
const  thiyo_thiyena_choices=[{ name : "1. थियो"}, { name : "2. थिएन"},]
const  huncha_hudaina_choices=[{ name : "1. हुन्छ"}, { name : "2. हुँदैन"},]
const  ward_choices=[{ name : "1"}, { name : "2"}, { name : "3"}, { name : "4"}, { name : "5"}, { name : "6"}, { name : "7"}, { name : "8"}, { name : "9"},]
const  Q3_1_choices=[{ name : "0. छाप्रो"},{ name : "1. एक"},{ name : "2. दुइ"},{ name : "3. तीन"},{ name : "4. चार"},{ name : "5. पाँच सो भन्दा बढी"},]
const  Q3_2_choices=[{ name : "1. टाटी"},{ name : "2. खर"},{ name : "3. स्लेट"},{ name : "4. खपडा"},{ name : "5. टीन वा जस्तापाता"},{ name : "6. आर.सी.सी वा आर.बि.सी."},{ name : "8. माटोले छाएको"},{ name : "9. अन्य"},]
const  Q3_3_choices=[{ name : "1. बाँस"},{ name : "2. काठ"},{ name : "3. माटो जोडाई"},{ name : "4. सिमेन्ट जोडाई"},{ name : "5. आर.सी.सी वा आर.बि.सी."},{ name : "6. काँचो र्इँटा"},]
const  Q3_4_choices=[{ name : "1. हालै मर्मत गरेको"},{ name : "2. हालै तला थपेको"},{ name : "3. जिर्ण"},{ name : "4. भित्तामा चिरा"},{ name : "5. हालै निर्माण गरेको"},{ name : "6. केहि गरेको छैन"},]
const  Q3_5_choices=[{ name : "1. ०-५ वर्ष"},{ name : "2. ६-१० वर्ष"},{ name : "3. ११-२० वर्ष"},{ name : "4. २१-३० वर्ष"},{ name : "5. ३१-४० वर्ष"},{ name : "6. ४१-५० वर्ष "},{ name : "7. ५० वर्ष भन्दा माथि"},]
const  Q3_6_choices=[{ name : "1. माटो र ढुंगा"},{ name : "2. सिमेन्ट र ढुंगा"},{ name : "3. फ्रेम स्ट्रक्चर"},{ name : "4. लोड बेरिंग"},{ name : "5. काठको खम्बा"},{ name : "6. सिमेन्ट र ईटा"},{ name : "7. अन्य ( खुलाउने)"},]
const  Q5_choices=[{ name : "1.नगरपालिकामा स्थायी रुपमा बस्ने वासिन्दा"},{ name : "2. नगरपालिकामा स्थायी बसोबास भई कारण विशेषले अन्यत्र बसोबास गर्ने।"},{ name : "3. नगरपालिकामा ६ महिना भन्दा बढी समय तर अस्थायी रुपमा भाडामा बस्ने ।"},{ name : "4. नगरपालिकामा अस्थायी रुपमा बस्ने विद्याथीहरु, कर्मचारी, शिक्षक लगायत विभिन्न पेशाकर्मी, कामदार जो ६ महिना भन्दा कम समय तर अस्थायी रुपमा बसोबास गर्दछन् उनीहरुको हकमा खण्ड क र ख को मात्र विवरण ।"},]
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
const  Q30_2_choices=[{ name : "1.       बचत तथा ऋण"},{ name : "2.       संस्थागत नेतृत्व"},{ name : "3.       लैंगिक समबिकस"},{ name : "4.       स्वास्थ्य"},{ name : "5.       परिवार नियोजन"},{ name : "6.       खानेपानी सरसफाई"},{ name : "7.       वन व्यवस्थापन"},{ name : "8.       फोहोरमैला व्यवस्थापन"},{ name : "9.       सिप बिकास"},{ name : "10.    अन्य"},{ name : "11.    छैन"},]
const  Q32_choices=[{ name : "1. शारिरीक अपाङ्ग  "},{ name : "2. दृष्टिविहिन"},{ name : "3. बहिरा"},{ name : "4. सुस्त मनस्थिति"},{ name : "5. बहुअपाङ्गता"},{ name : "6. दीर्घरोगी"},{ name : "7. केही छैन् "},]
const  Q33_choices=[{ name : "1. पूर्ण अशक्त (रातो रंगको)"},{ name : "2. अति अशक्त (नीलो रगको)"},{ name : "3. मध्यम अपांगता (पहेंलो रंगको)"},{ name : "4. सामान्य अपांगता (सेतो रगका)"},]
const  Q34_choices=[{ name : "1. निजी"},{ name : "2. भाडा"},{ name : "3. सार्वजनिक जग्गामा"},{ name : "4. भोगचलनमा रहेको तर स्थायी पूर्जा प्राप्त भै नसकेको"},{ name : "5. संस्थागत"},{ name : "6. सुकुम बासी "},{ name : "7. ऐलानी"},{ name : "8. अन्य"},]
const  Q35_1_choices=[{ name : "1. थाहाँ नभएर"},{ name : "2. टाँडा भएर"},{ name : "3. गर्न मन नभएर"},{ name : "4. समयको अभाब भएर"},]
const  Q37_choices=[{ name : "1. सामूदायिक । सरकारी"},{ name : "2. नीजि (बोर्डिङ्ग)"},{ name : "3. दुवै"},{ name : "4. मदर्शा"},{ name : "5. बालबालिका नभयको"},]
const  Q40_choices=[{ name : "1. कालोपत्रे"},{ name : "2. ग्राभेल"},{ name : "3. गोरेटो"},{ name : "4. कच्ची"},{ name : "5. ढुङ्गा वा ईट्टा बिच्छाएको"},{ name : "6. कंक्रिट/ढलान"},]
const  Q41_choices=[{ name : "1. न.पा.क्षेत्र भित्र र बाहिर दुवै ठाउँमा जग्गा भएको"},{ name : "2. न.पा.क्षेत्र भित्र जग्गा भएको "},{ name : "3. न.पा.क्षेत्र बाहिर जग्गा भएको"},{ name : "4. जग्गा नभएको "},]
const  Q41_1_choices=[{ name : "1. खेत छैन"},{ name : "2. पूर्ण असिंचित खेत छ"},{ name : "3. २५ प्रतिसत सिंचित खेत छ"},{ name : "4. ५० प्रतिसत सिंचित खेत छ"},{ name : "5. ७५ प्रतिसत सिंचित खेत छ"},{ name : "6. १०० प्रतिसत सिंचित खेत छ"},]
const  Q41_2_choices=[{ name : "1. हजुर बुबा /हजुर आमा"},{ name : "2. बुबा /आमा"},{ name : "3. काका /काकी"},{ name : "4. दाजु /भाई /बुहारी /भाउजु "},{ name : "5. आफ्नै नाममा"},{ name : "6. श्रीमान / श्रीमती"},{ name : "6. अन्य"},]
const  Q41_3_choices=[{ name : "1. ऐलानी /सार्वजनिक"},{ name : "2. अधिया ठेका"},{ name : "3. मोहियानी"},{ name : "4. भाडामा"},{ name : "5. सुकुम बासी"},{ name : "6. अन्य  (भए खुलाउर्ने )"},]
const  Q48_a_choices=[{ name : "1. पाइपबाट "},{ name : "2. ढाकिएको इनार/कुवा"},{ name : "3. नढाकिएको इनार/कुवा"},{ name : "4. ट्यूववेल/वोरिङ्ग/ हेन्डपम्प"},{ name : "5. ढुङ्गेधारा/मूल"},{ name : "6. नदी/खोला"},{ name : "7. अन्य (खुलाउने)"},{ name : "8. सहायकस्रोत छैन"},]
const  Q48_1_choices=[{ name : "1. राम्रो"},{ name : "2. ठिकै"},{ name : "3. नराम्रो"},]
const  Q48_2_choices=[{ name : "1. उमालेको"},{ name : "2. फिल्टर"},{ name : "3. Water Guard"},{ name : "4. क्लोरिन"},{ name : "5. प्रशोधन गदैन"},]
const  Q49_choices=[{ name : "1. निजी "},{ name : "2. सार्वजनिक"},{ name : "3. सामुदायिक"},{ name : "4. अर्काको घरको धारा"},{ name : "5. अन्य"},]
const  Q50_choices=[{ name : "1. ०–५ मिनेट "},{ name : "2. ५–१५ मिनेट"},{ name : "3. १५–३० मिनेट"},{ name : "4. ३०–६० मिनेट"},{ name : "5. ६० मिनेट भन्दा बढी"},]
const  Q55_choices=[{ name : "1. घर भित्र छ"},{ name : "2. बाहिर छ"},{ name : "3. छँदै छैन  "},]
const  Q56_choices=[{ name : "1. फ्लस भएको (सार्वजनिक ढल)"},{ name : "2. फ्लस भएको (सेप्टिक ट्यांक)"},{ name : "3. सामुदायिक/सार्वजनिक चर्पी"},{ name : "4. साधारण चर्पी"},{ name : "5. इकोस्यन चर्पी "},{ name : "6. खुला मैदान/जंगल/खोला छेउ"},]
const  Q59_choices=[{ name : "1. सेप्टिक ट्याङ्क "},{ name : "2. साधारण खाल्डो खनी"},{ name : "3. तरकारी /करेसा बारीमा"},{ name : "4. नदी वा खोल्सामा"},{ name : "5. अव्यवस्थित/ छैन"},{ name : "6. सतह ढल"},{ name : "7. नाला"},]
const  Q60_choices=[{ name : "1. आफ्नै घर कम्पाउण्डभित्र जलाउने/गाड्ने"},{ name : "2. फोहर थुपार्ने ठाउँमा/कण्टेनरमा....  "},{ name : "3. घरमा नै लिन आउँछ"},{ name : "4. कम्पोष्ट मल बनाउने"},{ name : "5. सडकमा"},{ name : "6. सार्वजनिक स्थलमा"},{ name : "7. नदी वा खोल्सामा"},{ name : "8. अन्य"},]
const  Q61_choices=[{ name : "1. काठ/दाउरा"},{ name : "2. गोबर/गुइठा"},{ name : "3. मट्टितेल"},{ name : "4. एल.पी.ग्याँस"},{ name : "5. गोबर ग्याँसर बायोग्यास"},{ name : "6. बिजुली"},{ name : "7. सोलार"},{ name : "8. अन्य"},]
const  Q62_choices=[{ name : "१ सुधारियको चुलो"},{ name : "२ परम्परागत चुलो"},]
const  Q63_choices=[{ name : "1. बिजुली"},{ name : "2. मट्टितेल"},{ name : "3. सोलार बत्ती"},{ name : "4. वायोग्यास"},{ name : "5. अन्य"},]
const  Q66_choices=[{ name : "1. धान"},{ name : "2. मकै"},{ name : "3. गहु"},{ name : "4. कोदो"},{ name : "5. दाल"},{ name : "6. रहर"},{ name : "7. मुसरो"},{ name : "8. चना"},{ name : "9. सिमी"},{ name : "10. भट्टमास"},{ name : "11. तोरी/सस्र्यु"},{ name : "12. आलस/तिल"},{ name : "13. सूर्यमुखी"},{ name : "14. आलु"},{ name : "15. बन्दा/काउली/रायो"},{ name : "16. बोडी"},{ name : "17. गोलभेंडा"},{ name : "18. काँक्रो, लौका, फर्सी"},{ name : "19. परबल, कुन्द्रुक, काँक्रो"},{ name : "20. करेला, घिरौला, चिचिण्डो"},{ name : "21. अदुवा/वेसार"},{ name : "22. प्याज/लसुन"},{ name : "23. च्याउ"},{ name : "24. आँप/लिची"},{ name : "25. केरा/मेवा"},{ name : "26. सुन्तता/कागती (अमिलोजात)"},{ name : "27. स्याउ/आरुवखडा"},{ name : "28. किवी"},{ name : "29. फुलखेति"},{ name : "30. पशुपक्षी पालन"},{ name : "31. जडिबुटी"},{ name : "32. कुनै पनि छैन"},]
const  Q67_choices=[{ name : "1. गाई/गोरु"},{ name : "2. भैसी /राँगो"},{ name : "3. खसी बोका"},{ name : "5. बंगुर/सुंगुर "},{ name : "6. हाँस/कुखुरा"},{ name : "7. टर्की"},{ name : "8. केहि पनि छैन"},]
const  Q67_7_choices=[{ name : "1. माछापालन"},{ name : "2. मौरीपालन"},{ name : "3. केहि छैन"},]
const  Q68_choices=[{ name : "1. वर्षभरि नै पुग्ने र बचत समेत हुने"},{ name : "2. १०–१२ महिना सम्म"},{ name : "3. ७–९ महिना सम्म"},{ name : "4. ४–६ महिना सम्म"},{ name : "5. ३ महिना भन्दा कम"},{ name : "6. उत्पादन गर्दिन/ छैन"},]
const  Q69_1_choices=[{ name : "1. स्थानीय बजार"},{ name : "2. अन्यत्र गा।पा।न.पा"},{ name : "3. भारत"},{ name : "3. अन्य"},]
const  Q73_choices=[{ name : "1. सञ्चित धनको प्रयोग गरेको"},{ name : "2. पैचो/सापटी लिएको"},{ name : "3. ऋण लिएको"},{ name : "4. चल/अचल सम्पत्ति बिक्री गरेको"},{ name : "5. अन्य"},]
const  Q75_choices=[{ name : "1. बैंक"},{ name : "2. समूह बचत तथा ऋण"},{ name : "3. बचत समूह"},{ name : "4. अन्य वित्तीय संस्थाबाट"},{ name : "5. व्यक्ति विशेषबाट (साहु)"},]
const  Q79_choices=[{ name : "1. बचत तथा ऋण समुह "},{ name : "2. आमा समुह"},{ name : "3. वित्तीय संस्था"},{ name : "4. सहकारी"},{ name : "5. टोल विकास संस्था"},{ name : "6. सामुदायिक वन"},{ name : "7. महिला समूह"},{ name : "8. कृषि समूह"},{ name : "9. पशु समूह"},{ name : "10. अन्य"},]
const  Q86_choices=[{ name : "1. रोजगारी"},{ name : "2. शिक्षा"},{ name : "3. आर्थिक अवसर"},{ name : "4. सुरक्षा"},{ name : "5. नोकरी र पेशा र व्यवसाय"},{ name : "6. विवाह"},{ name : "7. अन्य पारिवारिक कारण"},{ name : "8. सुबिधाको लागि"},{ name : "9.  स्वास्थ्य सुधार को लागि"},{ name : "10. अन्य"},]
const  Q88_4_choices=[{ name : "1. स्थायी "},{ name : "2. अस्थायी"},]
const  Q85_choices=[{ name : "1. यहि जिल्ला उल्लेख गर्नुहोस्"},{ name : "2. अन्य जिल्ला उल्लेख गर्नुहोस्"},{ name : "3. विदेश नाम उल्लेख गर्नुहोस्"},]
const  Q88_5_choices=[{ name : "1. अध्ययन/तालिम"},{ name : "2. जागिर/रोजगारी"},{ name : "3. वैदेशिक रोजगारी"},{ name : "4. शान्ति सुरक्षा"},{ name : "5. अन्य"},]
const  Q88_6_choices=[{ name : "1. अर्को न.पा /गा.पा...... "},{ name : "2. अर्को जिल्ला ................"},{ name : "3. विदेश........................."},]
const  Q90_choices=[{ name : "1.वित्तीय संस्था"},{ name : "2. हुण्डी"},]
const  Q91_choices=[{ name : "1. सरकारी स्वास्थ्य संस्था/(अस्पताल)"},{ name : "2. धामी झाँक्री"},{ name : "3. निजी क्षेत्रका स्वास्थ्य संस्था"},{ name : "4. प्राकृतिक चिकित्सा/(आयुर्वेदीक)"},{ name : "5. औषधी पसल"},{ name : "6. अन्य"},]
const  Q93_choices=[{ name : "1. गर्भवती महिला नभएको"},{ name : "2. कहिलेकाँही वा समस्या पर्दा मात्र"},{ name : "3. नियमित रुपमा तोकिएबमोजिम लिने गरेको"},{ name : "4. स्वास्थ्य जाँच नगराएको"},]
const  Q94_choices=[{ name : "1. कहाँ जाने भन्ने थाहा नभएर"},{ name : "2. सेवा शुल्क तिर्न नसकेर"},{ name : "3. सेवा दिने संस्था टाढा भएर "},{ name : "4. परिवारको अनुमति नपाएर"},{ name : "5. अन्य"},]
const  Q95_choices=[{ name : "1.घर"},{ name : "2. निजी स्वास्थ्य संस्था"},{ name : "3. सरकारी स्वास्थ्य संस्था"},{ name : "4. सामुदायिक स्वास्थ्य संस्था"},]
const  Q109_1_choices=[{ name : "1. महिलाले मात्र निर्णय गर्ने"},{ name : "2. पुरुष मात्र निर्याय गर्ने"},{ name : "3. दुबै मिलेर निर्णय गर्ने"},]
const  Q111_choices=[{ name : "1. जग्गा"},{ name : "2. घर"},{ name : "3. घर र जग्गा"},{ name : "4. सवारी साधन"},{ name : "5. अन्य"},]
const  Q116_choices=[{ name : "1.  छ"},{ name : "2.  छैन"},{ name : "3. थाहा छैन"},]
const  Q129_choices=[{ name : "1. खडेरी"},{ name : "2. शीतलहर"},{ name : "3. हावाहुरी"},{ name : "4. चट्यांग"},{ name : "5. बाडी"},{ name : "6. आगलागी"},{ name : "7. जैविक किरा कृषिमा"},{ name : "8.  भूकम्प"},{ name : "9. छैन"},]
const  Q150_1_choices=[{ name : "1. दुग्घ व्यवसायी"},{ name : "2. टेलर्स ÷सिलाई ,कटाई"},{ name : "3. सुनचाँदी व्यवसायी"},{ name : "4. भाडा व्यवसायी"},{ name : "5. होटल व्यवसायी"},{ name : "6. फेन्सी व्यवसायी"},{ name : "7. क्लिनिक तथा औषधी व्यवसायी"},{ name : "8. तरकारी तथा फलफूल व्यवसायी"},{ name : "9. इलेक्ट्रोनिक व्यवसायी"},{ name : "10. माछामासु पसल, व्यवसायी"},{ name : "11. हेयर सैलुंग तथा सौन्दर्यकला व्यवसायी"},{ name : "12. उद्योग"},{ name : "13. आर्ट व्यवसायी"},{ name : "14. बेकरी तथा मिष्ठान्न व्यवसायी"},{ name : "15. वाल मनोरञ्जन"},{ name : "16. बंगुर पालन"},{ name : "17. बोडिंग स्कुल संचालन"},{ name : "18. ठेक्कापट्टा"},{ name : "19. जुत्ता पसल"},{ name : "20. फोटो स्टुडियो"},{ name : "21. फर्निचर"},{ name : "22. किनारा पसल तथा व्यवसायी"},{ name : "23. सि.डि.पसल"},{ name : "24. पुल हाउस"},{ name : "25. अटो वर्कसप"},{ name : "26. राइस मिल"},{ name : "27. घडि रेडियो टि.भी मर्मत"},{ name : "28. पेट्रोल पम्प"},{ name : "29. मसला उद्योग"},{ name : "30. चस्मा पसल"},{ name : "31. खोज अनुसन्धान सेन्टर"},{ name : "32. खाजाघर तथा चिया पसल"},{ name : "33. ढुवानी सेवा"},{ name : "34. ट्युसन सेन्टर"},{ name : "35. हाउजिंग"},{ name : "36. कार्पेट पसल"},{ name : "37. सरसफाइ तथा फोहोर मैला संकलन"},{ name : "38. नर्सरी फुल व्यवसायी"},{ name : "39. ग्यास डिलर"},{ name : "40. कानुन व्यवसायी र परामर्श सेवा"},{ name : "41. निर्माण व्यवसायी तथा सप्लायर्स"},{ name : "42. मल बिउ उत्पादन"},{ name : "43. कम्प्युटर ट्रेनिंग सेन्टर साईवर व्यवसायी"},{ name : "44. सिसा पसल"},{ name : "45. पुस्तक व्यवसायी तथा फोटोकपी"},{ name : "46. मनी टान्सफर"},{ name : "47. सहकारी"},{ name : "48. बैक"},{ name : "49. बिज्ञापन मिडिया र केवल सेवा"},{ name : "50. कागज उद्योग तथा छापाखाना"},{ name : "51. पानी फिल्टर"},{ name : "52. पार्टी प्यालेस"},{ name : "53. भेटनरी"},{ name : "54. अन्य"},]
const  Q151_1_choices=[{ name : "1. डाक्टर"},{ name : "2. इन्जिनियर"},{ name : "3. ओवारसियारा"},{ name : "4. जे टि ए"},{ name : "5. नर्स"},{ name : "6. H. A/ C M A"},{ name : "7. भेटेनरी"},{ name : "8. अमिन"},{ name : "9. पाइलट"},{ name : "10. होटेल व्यवस्थापन"},{ name : "11. ल्याब"},{ name : "12. रेडियोलोजी"},{ name : "13. आई. टि"},{ name : "14. अन्य खुलाउनुहोस"},]


    return (
        <>
        <Link to={`/household/`}> <h4>Back to Household Table</h4></Link>
        <div className="p-grid">
           
            <div className="p-col-12">
            <div className="card p-fluid">
            
            <Toast ref={toast} />

<div className="p-field">
                    <label htmlFor="Ward">वडा न</label>
                    <InputNumber id="Ward" disabled={disabled ? 'disabled' : null} value={record && record.Ward}  className='.p-field' onChange={(e) => onInputChange(e, 'Ward')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Tol">गाउँ टोल/बस्तीको नाम </label>
                    <InputText id="Tol" disabled={disabled ? 'disabled' : null} value={record && record.Tol} className='.p-field' onChange={(e) => onInputChange(e, 'Tol')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="HouseCode">घर नं </label>
                    <InputText id="HouseCode" disabled={disabled ? 'disabled' : null} value={record && record.HouseCode} className='.p-field' onChange={(e) => onInputChange(e, 'HouseCode')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="RoadName">सडकको नामः  </label>
                    <InputText id="RoadName" disabled={disabled ? 'disabled' : null} value={record && record.RoadName} className='.p-field' onChange={(e) => onInputChange(e, 'RoadName')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Latitude">Latitude</label>
                    <InputNumber id="Latitude" disabled={disabled ? 'disabled' : null} value={record && record.Latitude} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Latitude')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Longitude">Longitude</label>                    <InputNumber id="Longitude" disabled={disabled ? 'disabled' : null} value={record && record.Longitude} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Longitude')}  />                      </div>
{/* <div className="p-field">
                    <label htmlFor="Funcational_Type">घरको प्रयोजन प्रकार (बहुउत्तर सम्भव छ)</label>
                    <MultiSelect  value={Funcational_Type} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Funcational_Type');setFuncational_Type(e.value)}} options={Fun_Type_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Funcational_Type })} />
                    {submitted && !record.Funcational_Type&& <small className="p-invalid">घरको प्रयोजन प्रकार (बहुउत्तर सम्भव छ) is required.</small>}  
                    </div> */}
<div className="p-field">
                    <label htmlFor="Funcational_Type_other">घरको प्रयोजन प्रकार (अन्य)</label>
                    <InputText id="Funcational_Type_other" disabled={disabled ? 'disabled' : null} value={record && record.Funcational_Type_other} className='.p-field' onChange={(e) => onInputChange(e, 'Funcational_Type_other')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q3_1">Q3_1. तला(Storey)</label>
                    <Dropdown value={Q3_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q3_1');setQ3_1(e.value)}} options={Q3_1_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q3_1 })} />
                    {submitted && !record.Q3_1&& <small className="p-invalid">Q3_1. तला(Storey) is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q3_2">Q3_2. छानाको किसिम</label>
                    <Dropdown value={Q3_2} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q3_2');setQ3_2(e.value)}} options={Q3_2_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q3_2 })} />
                    {submitted && !record.Q3_2&& <small className="p-invalid">Q3_2. छानाको किसिम is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q3_3">Q3_3. गारोको किसिम</label>                    <Dropdown value={Q3_3} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q3_3');setQ3_3(e.value)}} options={Q3_3_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q3_3 })} />                    {submitted && !record.Q3_3&& <small className="p-invalid">Q3_3. गारोको किसिम is required.</small>}                      </div>
<div className="p-field">
                    <label htmlFor="Q3_4">Q3_4. घरको अवस्था</label>
                    <Dropdown value={Q3_4} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q3_4');setQ3_4(e.value)}} options={Q3_4_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q3_4 })} />
                    {submitted && !record.Q3_4&& <small className="p-invalid">Q3_4. घरको अवस्था is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q3_5">Q3_5. घरको उमेर</label>
                    <Dropdown value={Q3_5} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q3_5');setQ3_5(e.value)}} options={Q3_5_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q3_5 })} />
                    {submitted && !record.Q3_5&& <small className="p-invalid">Q3_5. घरको उमेर is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q3_6">Q3_6. घरको जग कस्तो प्रकारको छ? </label>
                    <Dropdown value={Q3_6} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q3_6');setQ3_6(e.value)}} options={Q3_6_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q3_6 })} />
                    {submitted && !record.Q3_6&& <small className="p-invalid">Q3_6. घरको जग कस्तो प्रकारको छ?  is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q3_61"> Q3_61. घरको जग  प्रकारको अन्य भए लेखनुहोस? </label>                    <InputText id="Q3_61" disabled={disabled ? 'disabled' : null} value={record && record.Q3_61} className='.p-field' onChange={(e) => onInputChange(e, 'Q3_61')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q5">Q5. परिवार र बसोबासको किसिम</label>
                    <Dropdown value={Q5} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q5');setQ5(e.value)}} options={Q5_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q5 })} />
                    {submitted && !record.Q5&& <small className="p-invalid">Q5. परिवार र बसोबासको किसिम is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q6">Q6. एकै घर मा कति ओटा परिवार (Family) बस्नु हुन्छ?</label>
                    <InputText id="Q6" disabled={disabled ? 'disabled' : null} value={record && record.Q6} className='.p-field' onChange={(e) => onInputChange(e, 'Q6')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q7">Q7. परिवारमूलीको पूरा नाम थर </label>
                    <InputText id="Q7" disabled={disabled ? 'disabled' : null} value={record && record.Q7} className='.p-field' onChange={(e) => onInputChange(e, 'Q7')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q7_1">Q7.1. घर मुलीको पुरा नाम थर</label>
                    <InputText id="Q7_1" disabled={disabled ? 'disabled' : null} value={record && record.Q7_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q7_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q8">Q8. परिवारमूलीको लिङ्ग के हो?</label>
                    <Dropdown value={Q8} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q8');setQ8(e.value)}} options={gender_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q8 })} />
                    {submitted && !record.Q8&& <small className="p-invalid">Q8. परिवारमूलीको लिङ्ग के हो? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q11">Q11. उत्तरदाता परिवारमूली हो?</label>                    <Dropdown value={Q11} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q11');setQ11(e.value)}} options={ho_hoina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q11 })} />                    {submitted && !record.Q11&& <small className="p-invalid">Q11. उत्तरदाता परिवारमूली हो? is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q9">Q9. उत्तरदाताको पूरा नाम थर </label>
                    <InputText id="Q9" disabled={disabled ? 'disabled' : null} value={record && record.Q9} className='.p-field' onChange={(e) => onInputChange(e, 'Q9')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q10">Q10. उत्तरदाताको लिङ्ग के हो?</label>
                    <Dropdown value={Q10} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q10');setQ10(e.value)}} options={gender_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q10 })} />
                    {submitted && !record.Q10&& <small className="p-invalid">Q10. उत्तरदाताको लिङ्ग के हो? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="total_pop">total_pop. जम्मा परिवार सदस्य संख्या</label>
                    <InputNumber id="total_pop" disabled={disabled ? 'disabled' : null} value={record && record.total_pop}  className='.p-field' onChange={(e) => onInputChange(e, 'total_pop')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q37">q37. बालबच्चालाई कून स्कूलमा पढाउनु हुन्छ ?</label>
                    <Dropdown value={Q37} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q37');setQ37(e.value)}} options={Q37_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q37 })} />
                    {submitted && !record.Q37&& <small className="p-invalid">q37. बालबच्चालाई कून स्कूलमा पढाउनु हुन्छ ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q37_1">Q37_1. स्कूल सम्म पुग्न कति समय लाग्छ (मिनेटमा लेख्नुहोस)</label>                    <InputNumber id="Q37_1" disabled={disabled ? 'disabled' : null} value={record && record.Q37_1}  className='.p-field' onChange={(e) => onInputChange(e, 'Q37_1')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q35">Q35. तपाईको परिबारमा ब्यक्तिगत घटना विवरण जन्म /मृत्यु/बसाईसराई/विवाह/सम्बन्ध विच्छेद  दर्ता गर्नु भएको छ?</label>
                    <Dropdown value={Q35} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q35');setQ35(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q35 })} />
                    {submitted && !record.Q35&& <small className="p-invalid">Q35. तपाईको परिबारमा ब्यक्तिगत घटना विवरण जन्म /मृत्यु/बसाईसराई/विवाह/सम्बन्ध विच्छेद  दर्ता गर्नु भएको छ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q35_1">Q35. यदि छैन भने किन गर्नु भएन</label>
                    <Dropdown value={Q35_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q35_1');setQ35_1(e.value)}} options={Q35_1_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q35_1 })} />
                    {submitted && !record.Q35_1&& <small className="p-invalid">Q35. यदि छैन भने किन गर्नु भएन is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q34">Q34. तपाई वा परिवार बसोवास गरेको घर/भवनको स्वामित्वको अवस्था कस्तो हो </label>
                    <Dropdown value={Q34} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q34');setQ34(e.value)}} options={Q34_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q34 })} />
                    {submitted && !record.Q34&& <small className="p-invalid">Q34. तपाई वा परिवार बसोवास गरेको घर/भवनको स्वामित्वको अवस्था कस्तो हो  is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q34_1">Q34_. अन्य भए उल्लेख गर्ने</label>                    <InputText id="Q34_1" disabled={disabled ? 'disabled' : null} value={record && record.Q34_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q34_1')}  />                      </div>
<div className="p-field">
                    <label htmlFor="Q36">Q36. तपाईले बसोवास गरेको घर/भवन बाहेक तपाई वा परिवारको स्वामित्वमा यस नगरपालिकामा अन्य भवन पनि छ </label>
                    <Dropdown value={Q36} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q36');setQ36(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q36 })} />
                    {submitted && !record.Q36&& <small className="p-invalid">Q36. तपाईले बसोवास गरेको घर/भवन बाहेक तपाई वा परिवारको स्वामित्वमा यस नगरपालिकामा अन्य भवन पनि छ  is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q39">Q39. तपाईको घरसम्म मोटरबाटोको सुविधा छ ?</label>
                    <Dropdown value={Q39} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q39');setQ39(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q39 })} />
                    {submitted && !record.Q39&& <small className="p-invalid">Q39. तपाईको घरसम्म मोटरबाटोको सुविधा छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q40">Q40. तपाईको घर सम्म जाने सडकको किसिम कस्तो छ ?</label>
                    <Dropdown value={Q40} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q40');setQ40(e.value)}} options={Q40_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q40 })} />
                    {submitted && !record.Q40&& <small className="p-invalid">Q40. तपाईको घर सम्म जाने सडकको किसिम कस्तो छ ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q41">Q41. नेपाल भित्र तपाई वा परिवारको स्वामित्वमा जग्गा/जमीन/घडेरी छ ?</label>                    <Dropdown value={Q41} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q41');setQ41(e.value)}} options={Q41_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q41 })} />                    {submitted && !record.Q41&& <small className="p-invalid">Q41. नेपाल भित्र तपाई वा परिवारको स्वामित्वमा जग्गा/जमीन/घडेरी छ ? is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q41_2">Q41.2 यदि छ भने कस्को नाममा छ</label>
                    <Dropdown value={Q41_2} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q41_2');setQ41_2(e.value)}} options={Q41_2_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q41_2 })} />
                    {submitted && !record.Q41_2&& <small className="p-invalid">Q41.2 यदि छ भने कस्को नाममा छ is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q41_3">Q41.3 यदि छैन भने बसोबस गरीरहेको जमिन /जग्गा कस्तो प्रकारको हो </label>
                    <Dropdown value={Q41_3} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q41_3');setQ41_3(e.value)}} options={Q41_3_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q41_3 })} />
                    {submitted && !record.Q41_3&& <small className="p-invalid">Q41.3 यदि छैन भने बसोबस गरीरहेको जमिन /जग्गा कस्तो प्रकारको हो  is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q41_1">Q41_1. तपाइको आफ्नो खेत छ कि छैन यदि छ भने खेत कति प्रतिसत सिंचित खेत छ?</label>
                    <Dropdown value={Q41_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q41_1');setQ41_1(e.value)}} options={Q41_1_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q41_1 })} />
                    {submitted && !record.Q41_1&& <small className="p-invalid">Q41_1. तपाइको आफ्नो खेत छ कि छैन यदि छ भने खेत कति प्रतिसत सिंचित खेत छ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q42_1_1">Q42_1_1. बिघा</label>                    <InputNumber id="Q42_1_1" disabled={disabled ? 'disabled' : null} value={record && record.Q42_1_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q42_1_1')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q42_1_2">Q42_1_2. कट्ठा</label>
                    <InputNumber id="Q42_1_2" disabled={disabled ? 'disabled' : null} value={record && record.Q42_1_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q42_1_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q42_1_3">Q42_1_3. धुर</label>
                    <InputNumber id="Q42_1_3" disabled={disabled ? 'disabled' : null} value={record && record.Q42_1_3} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q42_1_3')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q42_3_1">Q42_3_1. बिघा</label>
                    <InputNumber id="Q42_3_1" disabled={disabled ? 'disabled' : null} value={record && record.Q42_3_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q42_3_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q42_3_2">Q42_3_2. कट्ठा</label>
                    <InputNumber id="Q42_3_2" disabled={disabled ? 'disabled' : null} value={record && record.Q42_3_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q42_3_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q42_3_3">Q42_3_3. धुर</label>
                    <InputNumber id="Q42_3_3" disabled={disabled ? 'disabled' : null} value={record && record.Q42_3_3} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q42_3_3')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q43">Q43. उक्त विवरणमा महिला सदस्यको नाममा स्वामित्व रहेको छ ?</label>                    <Dropdown value={Q43} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q43');setQ43(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q43 })} />                    {submitted && !record.Q43&& <small className="p-invalid">Q43. उक्त विवरणमा महिला सदस्यको नाममा स्वामित्व रहेको छ ? is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q44_1_1">Q44_1_1. बिघा</label>
                    <InputNumber id="Q44_1_1" disabled={disabled ? 'disabled' : null} value={record && record.Q44_1_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q44_1_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q44_1_2">Q44_1_2. कट्ठा</label>
                    <InputNumber id="Q44_1_2" disabled={disabled ? 'disabled' : null} value={record && record.Q44_1_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q44_1_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q44_1_3">Q44_1_3. धुर</label>
                    <InputNumber id="Q44_1_3" disabled={disabled ? 'disabled' : null} value={record && record.Q44_1_3} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q44_1_3')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q44_3_1">Q44_3_1. बिघा</label>
                    <InputNumber id="Q44_3_1" disabled={disabled ? 'disabled' : null} value={record && record.Q44_3_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q44_3_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q44_3_2">Q44_3_2. कट्ठा</label>
                    <InputNumber id="Q44_3_2" disabled={disabled ? 'disabled' : null} value={record && record.Q44_3_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q44_3_2')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q44_3_3">Q44_3_3. धुर</label>                    <InputNumber id="Q44_3_3" disabled={disabled ? 'disabled' : null} value={record && record.Q44_3_3} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q44_3_3')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q45">Q45. उक्त विवरणमा महिला सदस्यको नाममा स्वामित्व रहेको छ ?</label>
                    <Dropdown value={Q45} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q45');setQ45(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q45 })} />
                    {submitted && !record.Q45&& <small className="p-invalid">Q45. उक्त विवरणमा महिला सदस्यको नाममा स्वामित्व रहेको छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q48_a">Q48_a. परिवारको खानेपानीको मुख्यस्रोत कुन हो ?</label>
                    <Dropdown value={Q48_a} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q48_a');setQ48_a(e.value)}} options={Q48_a_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q48_a })} />
                    {submitted && !record.Q48_a&& <small className="p-invalid">Q48_a. परिवारको खानेपानीको मुख्यस्रोत कुन हो ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q48_c">Q48_c. स्रोत अन्य (खुलाउने)</label>
                    <InputText id="Q48_c" disabled={disabled ? 'disabled' : null} value={record && record.Q48_c} className='.p-field' onChange={(e) => onInputChange(e, 'Q48_c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q48_a1">Q48_a1. मुख्यस्रोत को पानि को गुणस्तर कस्तो छ ?</label>                    <Dropdown value={Q48_a1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q48_a1');setQ48_a1(e.value)}} options={Q48_1_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q48_a1 })} />                    {submitted && !record.Q48_a1&& <small className="p-invalid">Q48_a1. मुख्यस्रोत को पानि को गुणस्तर कस्तो छ ? is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q48_a2">Q48_a2. मुख्यश्रोतको पानीको प्रशोधन कसरी गर्नुहुन्छ??</label>
                    <Dropdown value={Q48_a2} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q48_a2');setQ48_a2(e.value)}} options={Q48_2_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q48_a2 })} />
                    {submitted && !record.Q48_a2&& <small className="p-invalid">Q48_a2. मुख्यश्रोतको पानीको प्रशोधन कसरी गर्नुहुन्छ?? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q48_a3">Q48_a3. मुख्यस्रोत बाट पानीको पर्याप्त आउछ?</label>
                    <Dropdown value={Q48_a3} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q48_a3');setQ48_a3(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q48_a3 })} />
                    {submitted && !record.Q48_a3&& <small className="p-invalid">Q48_a3. मुख्यस्रोत बाट पानीको पर्याप्त आउछ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q49">Q49. पाइपबाट आउने पानी प्रयोग गर्नुहुन्छ भने त्यसको स्वामित्व कसको हो ?</label>                    <Dropdown value={Q49} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q49');setQ49(e.value)}} options={Q49_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q49 })} />                    {submitted && !record.Q49&& <small className="p-invalid">Q49. पाइपबाट आउने पानी प्रयोग गर्नुहुन्छ भने त्यसको स्वामित्व कसको हो ? is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q50">Q50. खानेपानीको स्रोत सम्म गएर पानी लिएर आउन कति समय लाग्छ ?</label>
                    <Dropdown value={Q50} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q50');setQ50(e.value)}} options={Q50_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q50 })} />
                    {submitted && !record.Q50&& <small className="p-invalid">Q50. खानेपानीको स्रोत सम्म गएर पानी लिएर आउन कति समय लाग्छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q55">Q55. आफ्नो स्वामित्वको चर्पी छ ?</label>
                    <Dropdown value={Q55} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q55');setQ55(e.value)}} options={Q55_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q55 })} />
                    {submitted && !record.Q55&& <small className="p-invalid">Q55. आफ्नो स्वामित्वको चर्पी छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q55_1">Q55.1. आफ्नो स्वामित्वको चर्पी छभने प्रयोगमा छ छैन ?</label>
                    <Dropdown value={Q55_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q55_1');setQ55_1(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q55_1 })} />
                    {submitted && !record.Q55_1&& <small className="p-invalid">Q55.1. आफ्नो स्वामित्वको चर्पी छभने प्रयोगमा छ छैन ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q56">Q56. तपाईको परिवारले कस्तो चर्पी प्रयोग गर्नुहुन्छ ?</label>                    <Dropdown value={Q56} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q56');setQ56(e.value)}} options={Q56_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q56 })} />                    {submitted && !record.Q56&& <small className="p-invalid">Q56. तपाईको परिवारले कस्तो चर्पी प्रयोग गर्नुहुन्छ ? is required.</small>}                      </div>
<div className="p-field">
                    <label htmlFor="Q59">Q59. फोहर पानीको व्यवस्थापन कसरी गर्नुभएको छ ?</label>
                    <Dropdown value={Q59} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q59');setQ59(e.value)}} options={Q59_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q59 })} />
                    {submitted && !record.Q59&& <small className="p-invalid">Q59. फोहर पानीको व्यवस्थापन कसरी गर्नुभएको छ ? is required.</small>}  
                    </div>
{/* <div className="p-field">
                    <label htmlFor="Q60">Q60. तपाईको घरबाट निस्कने ठोस फोहरमैला कसरी बिसर्जन गर्नुहुन्छ ?  (बहुउत्तर सम्भव छ)</label>
                    <MultiSelect  value={Q60} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q60');setQ60(e.value)}} options={Q60_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q60 })} />
                    {submitted && !record.Q60&& <small className="p-invalid">Q60. तपाईको घरबाट निस्कने ठोस फोहरमैला कसरी बिसर्जन गर्नुहुन्छ ?  (बहुउत्तर सम्भव छ) is required.</small>}  
                    </div> */}
<div className="p-field">
                    <label htmlFor="Q60_1">Q60_1. अन्य भए उल्लेख गर्ने</label>
                    <InputText id="Q60_1" disabled={disabled ? 'disabled' : null} value={record && record.Q60_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q60_1')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q61">Q61. तपाईको परिवारमा खाना पकाउन अक्सर (मुख्य रुपमा) कुन इन्धन प्रयोग गर्नुहुन्छ ?</label>                    <Dropdown value={Q61} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q61');setQ61(e.value)}} options={Q61_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q61 })} />                    {submitted && !record.Q61&& <small className="p-invalid">Q61. तपाईको परिवारमा खाना पकाउन अक्सर (मुख्य रुपमा) कुन इन्धन प्रयोग गर्नुहुन्छ ? is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q62">Q62. यदि काठ/दाउरार गोबर/गुइठा (मुख्य रुपमा) इन्धन प्रयोग गर्नुहुन्छ भने कस्तो प्रकारको चुलो प्रयोग गर्नुहुन्छ ?</label>
                    <Dropdown value={Q62} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q62');setQ62(e.value)}} options={Q62_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q62 })} />
                    {submitted && !record.Q62&& <small className="p-invalid">Q62. यदि काठ/दाउरार गोबर/गुइठा (मुख्य रुपमा) इन्धन प्रयोग गर्नुहुन्छ भने कस्तो प्रकारको चुलो प्रयोग गर्नुहुन्छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q63">Q63. तपाईको परिवारमा बत्ती बाल्न अक्सर (मुख्य रुपमा) कुन श्रोत प्रयोग गर्नुहुन्छ ?</label>
                    <Dropdown value={Q63} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q63');setQ63(e.value)}} options={Q63_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q63 })} />
                    {submitted && !record.Q63&& <small className="p-invalid">Q63. तपाईको परिवारमा बत्ती बाल्न अक्सर (मुख्य रुपमा) कुन श्रोत प्रयोग गर्नुहुन्छ ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q65">Q65. यदि बिजुलीको प्रयोग गर्नुभएको छ भने, आफ्नै घरमा बिजुलीको मिटर जडान भएको छ ?</label>                    <Dropdown value={Q65} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q65');setQ65(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q65 })} />                    {submitted && !record.Q65&& <small className="p-invalid">Q65. यदि बिजुलीको प्रयोग गर्नुभएको छ भने, आफ्नै घरमा बिजुलीको मिटर जडान भएको छ ? is required.</small>}                      </div>

{/* <div className="p-field">
                    <label htmlFor="Q66">Q66. तपाईको परिवारले मुख्यतया के–कस्तो कृषि उत्पादन गर्छ ? (बहुउत्तर सम्भव छ) </label>
                    <MultiSelect  value={Q66} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q66');setQ66(e.value)}} options={Q66_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q66 })} />
                    {submitted && !record.Q66&& <small className="p-invalid">Q66. तपाईको परिवारले मुख्यतया के–कस्तो कृषि उत्पादन गर्छ ? (बहुउत्तर सम्भव छ)  is required.</small>}  
                    </div> */}
<div className="p-field">
                    <label htmlFor="Q66_1a">Q66_1a. बाली लगाएको जग्गाको क्षेत्रफल (बिघामा)</label>
                    <InputNumber id="Q66_1a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_1a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_1a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_1a_1">Q66_1a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_1a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_1a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_1a_1')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_1a_2">Q66_1a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>                    <InputNumber id="Q66_1a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_1a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_1a_2')}  />                      </div>
<div className="p-field">
                    <label htmlFor="Q66_1b">Q66_1b. बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_1b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_1b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_1b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_1c">Q66_1c. विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_1c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_1c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_1c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_2a">Q66_2a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>
                    <InputNumber id="Q66_2a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_2a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_2a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_2a_1">Q66_2a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_2a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_2a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_2a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_2a_2">Q66_2a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_2a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_2a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_2a_2')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_2b">Q66_2b. बालीको उत्पादन परिमाण  के जीमा</label>                    <InputNumber id="Q66_2b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_2b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_2b')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_2c">Q66_2c. विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_2c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_2c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_2c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_3a">Q66_3a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>
                    <InputNumber id="Q66_3a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_3a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_3a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_3a_1">Q66_3a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_3a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_3a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_3a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_3a_2">Q66_3a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_3a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_3a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_3a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_3b">Q66_3b. बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_3b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_3b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_3b')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_3c">Q66_3c. विक्री परिमाण (के जी)</label>                    <InputNumber id="Q66_3c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_3c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_3c')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_4a">Q66_4a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>
                    <InputNumber id="Q66_4a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_4a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_4a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_4a_1">Q66_4a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_4a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_4a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_4a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_4a_2">Q66_4a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_4a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_4a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_4a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_4b">Q66_4b. बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_4b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_4b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_4b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_4c">Q66_4b. विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_4c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_4c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_4c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_5a">Q66_5a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_5a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_5a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_5a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_5a_1">Q66_5a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_5a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_5a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_5a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_5a_2">Q66_5a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_5a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_5a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_5a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_5b">Q66_5b. बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_5b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_5b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_5b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_5c">Q66_5c. विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_5c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_5c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_5c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_6a">Q66_6a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>
                    <InputNumber id="Q66_6a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_6a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_6a')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_6a_1">Q66_6a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>                    <InputNumber id="Q66_6a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_6a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_6a_1')}  />                      </div>
<div className="p-field">
                    <label htmlFor="Q66_6a_2">Q66_6a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_6a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_6a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_6a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_6b">Q66_6b. बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_6b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_6b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_6b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_6c">Q66_6c. विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_6c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_6c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_6c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_7a">Q66_7a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>
                    <InputNumber id="Q66_7a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_7a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_7a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_7a_1">Q66_7a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_7a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_7a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_7a_1')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_7a_2">Q66_7a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>                    <InputNumber id="Q66_7a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_7a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_7a_2')}  />                      </div>
<div className="p-field">
                    <label htmlFor="Q66_7b">Q66_7b. बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_7b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_7b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_7b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_7c">Q66_7c. विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_7c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_7c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_7c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_8a">Q66_8a. बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>
                    <InputNumber id="Q66_8a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_8a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_8a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_8a_1">Q66_8a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_8a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_8a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_8a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_8a_2">Q66_8a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_8a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_8a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_8a_2')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_8b">Q66_8b. बालीको उत्पादन परिमाण के जीमा</label>                    <InputNumber id="Q66_8b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_8b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_8b')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_8c">Q66_8c. विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_8c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_8c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_8c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_9a">Q66_9a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>
                    <InputNumber id="Q66_9a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_9a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_9a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_9a_1">Q66_9a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_9a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_9a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_9a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_9a_2">Q66_9a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_9a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_9a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_9a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_9b">Q66_9b.  बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_9b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_9b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_9b')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_9c">Q66_9c.  विक्री परिमाण (के जी)</label>                    <InputNumber id="Q66_9c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_9c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_9c')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_10a">Q66_10a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>
                    <InputNumber id="Q66_10a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_10a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_10a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_10a_1">Q66_10a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_10a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_10a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_10a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_10a_2">Q66_10a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_10a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_10a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_10a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_10b">Q66_10b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_10b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_10b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_10b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_10c">Q66_10c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_10c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_10c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_10c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_11a">Q66_11a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_11a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_11a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_11a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_11a_1">Q66_11a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_11a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_11a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_11a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_11a_2">Q66_11a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_11a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_11a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_11a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_11b">Q66_11b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_11b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_11b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_11b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_11c">Q66_11c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_11c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_11c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_11c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_12a">Q66_12a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_12a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_12a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_12a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_12a_1">Q66_12a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_12a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_12a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_12a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_12a_2">Q66_12a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_12a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_12a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_12a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_12b">Q66_12b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_12b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_12b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_12b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q61_12c">Q61_12c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q61_12c" disabled={disabled ? 'disabled' : null} value={record && record.Q61_12c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q61_12c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_13a">Q66_13a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_13a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_13a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_13a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_13a_1">Q66_13a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_13a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_13a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_13a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_13a_2">Q66_13a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_13a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_13a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_13a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_13b">Q66_13b.  बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_13b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_13b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_13b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_13c">Q66_13c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_13c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_13c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_13c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_14a">Q66_14a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_14a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_14a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_14a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_14a_1">Q66_14a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_14a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_14a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_14a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_14a_2">Q66_14a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_14a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_14a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_14a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_14b">Q66_14b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_14b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_14b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_14b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_14c">Q66_14c.  विक्री परिमाण  के जीमा</label>
                    <InputNumber id="Q66_14c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_14c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_14c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_15a">Q66_15a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_15a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_15a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_15a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_15a_1">Q66_15a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_15a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_15a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_15a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_15a_2">Q66_15a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_15a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_15a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_15a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_15b">Q66_15b.  बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_15b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_15b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_15b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_15c">Q66_15c.  विक्री परिमाण  के जीमा</label>
                    <InputNumber id="Q66_15c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_15c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_15c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_16a">Q66_16a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_16a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_16a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_16a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_16a_1">Q66_16a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_16a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_16a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_16a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_16a_2">Q66_16a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_16a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_16a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_16a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_16b">Q66_16b.  बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_16b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_16b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_16b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_16c">Q66_16c.  विक्री परिमाण  के जीमा</label>
                    <InputNumber id="Q66_16c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_16c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_16c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_17a">Q66_17a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_17a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_17a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_17a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_17a_1">Q66_17a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_17a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_17a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_17a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_17a_2">Q66_17a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_17a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_17a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_17a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_17b">Q66_17b.  बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_17b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_17b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_17b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_17c">Q66_17c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_17c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_17c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_17c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_18a">Q66_18a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_18a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_18a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_18a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_18a_1">Q66_18a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_18a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_18a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_18a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_18a_2">Q66_18a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_18a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_18a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_18a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_18b">Q66_18b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_18b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_18b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_18b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_18c">Q66_18c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_18c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_18c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_18c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_19a">Q66_19a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_19a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_19a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_19a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_19a_1">Q66_19a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_19a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_19a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_19a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_19a_2">Q66_19a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_19a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_19a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_19a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_19b">Q66_19b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_19b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_19b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_19b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_19c">Q66_19c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_19c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_19c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_19c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_20a">Q66_20a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_20a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_20a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_20a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_20a_1">Q66_20a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_20a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_20a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_20a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_20a_2">Q66_20a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_20a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_20a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_20a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_20b">Q66_20b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_20b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_20b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_20b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_20c">Q66_20c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_20c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_20c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_20c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_21a">Q66_21a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_21a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_21a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_21a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_21a_1">Q66_21a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_21a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_21a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_21a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_21a_2">Q66_21a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_21a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_21a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_21a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_21b">Q66_21b.  बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_21b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_21b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_21b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_21c">Q66_21c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_21c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_21c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_21c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_22a">Q66_22a.  बाली लगाएको जग्गाको क्षेत्रफल (बिघामा)</label>                    <InputNumber id="Q66_22a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_22a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_22a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_22a_1">Q66_22a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_22a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_22a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_22a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_22a_2">Q66_22a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_22a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_22a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_22a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_22b">Q66_22b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_22b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_22b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_22b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_22c">Q66_22c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_22c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_22c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_22c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_23a">Q66_23a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_23a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_23a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_23a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_23a_1">Q66_23a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_23a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_23a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_23a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_23a_2">Q66_23a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_23a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_23a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_23a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_23b">Q66_23b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_23b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_23b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_23b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_23c">Q66_23c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_23c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_23c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_23c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_24a">Q66_24a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_24a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_24a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_24a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_24a_1">Q66_24a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_24a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_24a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_24a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_24a_2">Q66_24a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_24a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_24a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_24a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_24b">Q66_24b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_24b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_24b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_24b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_24c">Q66_24c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_24c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_24c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_24c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_25a">Q66_25a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_25a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_25a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_25a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_25a_1">Q66_25a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_25a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_25a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_25a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_25a_2">Q66_25a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_25a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_25a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_25a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_25b">Q66_25b.  बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_25b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_25b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_25b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_25c">Q66_25c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_25c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_25c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_25c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_26a">Q66_26a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_26a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_26a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_26a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_26a_1">Q66_26a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_26a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_26a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_26a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_26a_2">Q66_26a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_26a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_26a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_26a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_26b">Q66_26b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_26b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_26b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_26b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_26c">Q66_26c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_26c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_26c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_26c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_27a">Q66_27a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_27a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_27a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_27a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_27a_1">Q66_27a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_27a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_27a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_27a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_27a_2">Q66_27a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_27a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_27a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_27a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_27b">Q66_27b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_27b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_27b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_27b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_27c">Q66_27c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_27c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_27c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_27c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_28a">Q66_28a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_28a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_28a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_28a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_28a_1">Q66_28a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_28a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_28a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_28a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_28a_2">Q66_28a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_28a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_28a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_28a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_28b">Q66_28b.  बालीको उत्पादन परिमाण के जीमा</label>
                    <InputNumber id="Q66_28b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_28b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_28b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_28c">Q66_28c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_28c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_28c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_28c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_29a">Q66_29a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_29a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_29a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_29a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_29a_1">Q66_29a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_29a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_29a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_29a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_29a_2">Q66_29a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_29a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_29a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_29a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_29b">Q66_29b.  बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_29b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_29b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_29b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_29c">Q66_29c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_29c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_29c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_29c')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q66_31a">Q66_31a.  बाली लगाएको जग्गाको क्षेत्रफल(बिघामा)</label>                    <InputNumber id="Q66_31a" disabled={disabled ? 'disabled' : null} value={record && record.Q66_31a} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_31a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q66_31a_1">Q66_31a_1. बाली लगाएको जग्गाको क्षेत्रफल (कठ्ठा)</label>
                    <InputNumber id="Q66_31a_1" disabled={disabled ? 'disabled' : null} value={record && record.Q66_31a_1} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_31a_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_31a_2">Q66_31a_2. बाली लगाएको जग्गाको क्षेत्रफल (धुर)</label>
                    <InputNumber id="Q66_31a_2" disabled={disabled ? 'disabled' : null} value={record && record.Q66_31a_2} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_31a_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_31b">Q66_31b.  बालीको उत्पादन परिमाण  के जीमा</label>
                    <InputNumber id="Q66_31b" disabled={disabled ? 'disabled' : null} value={record && record.Q66_31b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_31b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q66_31c">Q66_31c.  विक्री परिमाण (के जी)</label>
                    <InputNumber id="Q66_31c" disabled={disabled ? 'disabled' : null} value={record && record.Q66_31c} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q66_31c')}  />  
                    </div>
{/* <div className="p-field">                    <label htmlFor="Q67">Q67. तपाईको परिवारको स्वामित्वमा चौपाया तथा पशुपक्षी के के छन् ?</label>                    <MultiSelect  value={Q67} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q67');setQ67(e.value)}} options={Q67_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q67 })} />                    {submitted && !record.Q67&& <small className="p-invalid">Q67. तपाईको परिवारको स्वामित्वमा चौपाया तथा पशुपक्षी के के छन् ? is required.</small>}                      </div> */}

<div className="p-field">
                    <label htmlFor="Q67_1a">Q67_1a. कति छ ?</label>
                    <InputNumber id="Q67_1a" disabled={disabled ? 'disabled' : null} value={record && record.Q67_1a}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_1a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_1b">Q67_1b. ढुध उत्पादन (लिटर)</label>
                    <InputNumber id="Q67_1b" disabled={disabled ? 'disabled' : null} value={record && record.Q67_1b}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_1b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_1f">Q67_1f. हाड/छाला उत्पादन (के जी)</label>
                    <InputNumber id="Q67_1f" disabled={disabled ? 'disabled' : null} value={record && record.Q67_1f}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_1f')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_1g">Q67_1g. बिक्रीबाट बार्षिक अम्दामी रू</label>
                    <InputNumber id="Q67_1g" disabled={disabled ? 'disabled' : null} value={record && record.Q67_1g}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_1g')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_2a">Q67_2a. कति छ ?</label>
                    <InputNumber id="Q67_2a" disabled={disabled ? 'disabled' : null} value={record && record.Q67_2a}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_2a')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q67_2b">Q67_2b. ढुध उत्पादन (लिटर)</label>                    <InputNumber id="Q67_2b" disabled={disabled ? 'disabled' : null} value={record && record.Q67_2b}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_2b')}  />                      </div>
<div className="p-field">
                    <label htmlFor="Q67_2c">Q67_2c. मासु उत्पादन (के जी)</label>
                    <InputNumber id="Q67_2c" disabled={disabled ? 'disabled' : null} value={record && record.Q67_2c}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_2c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_2f">Q67_2f. हाड/छाला उत्पादन (के जी)</label>
                    <InputNumber id="Q67_2f" disabled={disabled ? 'disabled' : null} value={record && record.Q67_2f}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_2f')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_2g">Q67_2g. बिक्रीबाट बार्षिक अम्दामी रू</label>
                    <InputNumber id="Q67_2g" disabled={disabled ? 'disabled' : null} value={record && record.Q67_2g}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_2g')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_3a">Q67_3a. कति छ ?</label>
                    <InputNumber id="Q67_3a" disabled={disabled ? 'disabled' : null} value={record && record.Q67_3a}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_3a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_3c">Q67_3c. मासु उत्पादन (के जी)</label>
                    <InputNumber id="Q67_3c" disabled={disabled ? 'disabled' : null} value={record && record.Q67_3c}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_3c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_3g">Q67_3g. बिक्रीबाट बार्षिक अम्दामी रू</label>
                    <InputNumber id="Q67_3g" disabled={disabled ? 'disabled' : null} value={record && record.Q67_3g}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_3g')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q67_5a">Q67_5a. कति छ ?</label>                    <InputNumber id="Q67_5a" disabled={disabled ? 'disabled' : null} value={record && record.Q67_5a}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_5a')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q67_5c">Q67_5c. मासु उत्पादन (के जी)</label>
                    <InputNumber id="Q67_5c" disabled={disabled ? 'disabled' : null} value={record && record.Q67_5c}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_5c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_5e">Q67_5e. उन उत्पादन (के जी)</label>
                    <InputNumber id="Q67_5e" disabled={disabled ? 'disabled' : null} value={record && record.Q67_5e}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_5e')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_5g">Q67_5g. बिक्रीबाट बार्षिक अम्दामी रू</label>
                    <InputNumber id="Q67_5g" disabled={disabled ? 'disabled' : null} value={record && record.Q67_5g}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_5g')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_6a">Q67_6a.  कति छ ?</label>
                    <InputNumber id="Q67_6a" disabled={disabled ? 'disabled' : null} value={record && record.Q67_6a}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_6a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_6c">Q67_6c. मासु उत्पादन (के जी)</label>
                    <InputNumber id="Q67_6c" disabled={disabled ? 'disabled' : null} value={record && record.Q67_6c}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_6c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_6d">Q67_6d. अन्डा (संख्या)</label>
                    <InputNumber id="Q67_6d" disabled={disabled ? 'disabled' : null} value={record && record.Q67_6d}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_6d')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q67_6g">Q67_6g. बिक्रीबाट बार्षिक अम्दामी रू</label>                    <InputNumber id="Q67_6g" disabled={disabled ? 'disabled' : null} value={record && record.Q67_6g}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_6g')}  />                      </div>
<div className="p-field">
                    <label htmlFor="Q67_7a">Q67_7a.  कति छ ?</label>
                    <InputNumber id="Q67_7a" disabled={disabled ? 'disabled' : null} value={record && record.Q67_7a}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_7a')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_7c">Q67_7c. मासु उत्पादन (के जी)</label>
                    <InputNumber id="Q67_7c" disabled={disabled ? 'disabled' : null} value={record && record.Q67_7c}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_7c')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_7d">Q67_7d. अन्डा (संख्या)</label>
                    <InputNumber id="Q67_7d" disabled={disabled ? 'disabled' : null} value={record && record.Q67_7d}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_7d')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_7g">Q67_7g. बिक्रीबाट बार्षिक अम्दामी रू</label>
                    <InputNumber id="Q67_7g" disabled={disabled ? 'disabled' : null} value={record && record.Q67_7g}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_7g')}  />  
                    </div>
{/* <div className="p-field">
                    <label htmlFor="Q67_8">Q67_8. तपाइको परिवारमा माछा, मौरी गरिएको छ</label>
                    <MultiSelect  value={Q67_8} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q67_8');setQ67_8(e.value)}} options={Q67_7_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q67_8 })} />
                    {submitted && !record.Q67_8&& <small className="p-invalid">Q67_8. तपाइको परिवारमा माछा, मौरी गरिएको छ is required.</small>}  
                    </div> */}
<div className="p-field">                    <label htmlFor="Q67_8a">Q67_7a. माछापालन पोखरी संख्या</label>                    <InputNumber id="Q67_8a" disabled={disabled ? 'disabled' : null} value={record && record.Q67_8a}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_8a')}  />                      </div>
<div className="p-field">
                    <label htmlFor="Q67_8b">Q67_7b. पोखरीको क्षेत्रफल(हेक्टर )</label>
                    <InputNumber id="Q67_8b" disabled={disabled ? 'disabled' : null} value={record && record.Q67_8b} mode="decimal" minFractionDigits={5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_8b')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_8d">Q67_7d. बार्षिक उत्पादन(केजि)</label>
                    <InputNumber id="Q67_8d" disabled={disabled ? 'disabled' : null} value={record && record.Q67_8d}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_8d')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_8e">Q67_7e. मौरी घार संख्याः</label>
                    <InputNumber id="Q67_8e" disabled={disabled ? 'disabled' : null} value={record && record.Q67_8e}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_8e')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q67_8f">Q67_7f. बार्षिक मह उत्पादन(केजि)</label>
                    <InputNumber id="Q67_8f" disabled={disabled ? 'disabled' : null} value={record && record.Q67_8f}  className='.p-field' onChange={(e) => onInputChange(e, 'Q67_8f')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q68">Q68. तपाईको परिवारलाई आफ्नो कृषि उत्पादनबाट कति महिना खान पुग्छ ? (आफ्नो परिवारमा खेती गर्ने जमिन भएका तथा अरुको जमिनमा खेती गर्ने परिवारहरुसँग सोध्ने)</label>                    <Dropdown value={Q68} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q68');setQ68(e.value)}} options={Q68_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q68 })} />                    {submitted && !record.Q68&& <small className="p-invalid">Q68. तपाईको परिवारलाई आफ्नो कृषि उत्पादनबाट कति महिना खान पुग्छ ? (आफ्नो परिवारमा खेती गर्ने जमिन भएका तथा अरुको जमिनमा खेती गर्ने परिवारहरुसँग सोध्ने) is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q69">Q69. तपाईको घरको बाँकी कृषि उत्पादन बजारमा बेच्नुहुन्छ ?</label>
                    <Dropdown value={Q69} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q69');setQ69(e.value)}} options={bechchu_bechdina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q69 })} />
                    {submitted && !record.Q69&& <small className="p-invalid">Q69. तपाईको घरको बाँकी कृषि उत्पादन बजारमा बेच्नुहुन्छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q69_1">Q69_1. बेच्नुहुन्छ भने कहाँ बेच्नुहुन्छ ?</label>
                    <Dropdown value={Q69_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q69_1');setQ69_1(e.value)}} options={Q69_1_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q69_1 })} />
                    {submitted && !record.Q69_1&& <small className="p-invalid">Q69_1. बेच्नुहुन्छ भने कहाँ बेच्नुहुन्छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q69_2">Q69_2.तपाइको जग्गा बाजो छ, यदि छ भने कति वर्ष देखि बाजो राख्नु भाको छ ?</label>
                    <InputNumber id="Q69_2" disabled={disabled ? 'disabled' : null} value={record && record.Q69_2}  className='.p-field' onChange={(e) => onInputChange(e, 'Q69_2')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q150">Q150. तपाईले वा परिवारको कुनै सदस्यले कुनै व्यवसाय गर्नु भएको छ</label>                    <Dropdown value={Q150} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q150');setQ150(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q150 })} />                    {submitted && !record.Q150&& <small className="p-invalid">Q150. तपाईले वा परिवारको कुनै सदस्यले कुनै व्यवसाय गर्नु भएको छ is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q150_1">Q150.1 यदि छ भने क व्यवसाय गर्नु भएको छ</label>
                    <Dropdown value={Q150_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q150_1');setQ150_1(e.value)}} options={Q150_1_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q150_1 })} />
                    {submitted && !record.Q150_1&& <small className="p-invalid">Q150.1 यदि छ भने क व्यवसाय गर्नु भएको छ is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q150_2">Q150.e यदि व्यवसाय अन्य भए लेख्नुहोस</label>
                    <InputText id="Q150_2" disabled={disabled ? 'disabled' : null} value={record && record.Q150_2} className='.p-field' onChange={(e) => onInputChange(e, 'Q150_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q150_3">Q150.2 व्यवसाय गर्न पान नम्बर लिनु भाको छ ?</label>
                    <Dropdown value={Q150_3} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q150_3');setQ150_3(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q150_3 })} />
                    {submitted && !record.Q150_3&& <small className="p-invalid">Q150.2 व्यवसाय गर्न पान नम्बर लिनु भाको छ ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q70_1">Q70_1. खानपान खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>                    <InputNumber id="Q70_1" disabled={disabled ? 'disabled' : null} value={record && record.Q70_1}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_1')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q70_2">Q70_2. लाउन (लत्ताकपडा) खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>
                    <InputNumber id="Q70_2" disabled={disabled ? 'disabled' : null} value={record && record.Q70_2}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q70_3">Q70_3. औषधी खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>
                    <InputNumber id="Q70_3" disabled={disabled ? 'disabled' : null} value={record && record.Q70_3}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_3')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q70_4">Q70_4. पढाई (बच्चाहरुको) खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>
                    <InputNumber id="Q70_4" disabled={disabled ? 'disabled' : null} value={record && record.Q70_4}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_4')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q70_5">Q70_5. ईन्धन खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>
                    <InputNumber id="Q70_5" disabled={disabled ? 'disabled' : null} value={record && record.Q70_5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_5')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q70_6">Q70_6. मनोरन्जन खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>
                    <InputNumber id="Q70_6" disabled={disabled ? 'disabled' : null} value={record && record.Q70_6}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_6')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q70_7">Q70_7. यातायात खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>                    <InputNumber id="Q70_7" disabled={disabled ? 'disabled' : null} value={record && record.Q70_7}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_7')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q70_8">Q70_8. चाडपर्व खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>
                    <InputNumber id="Q70_8" disabled={disabled ? 'disabled' : null} value={record && record.Q70_8}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_8')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q70_9">Q70_9. घरभाडा खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>
                    <InputNumber id="Q70_9" disabled={disabled ? 'disabled' : null} value={record && record.Q70_9}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_9')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q70_10">Q70_10. कृषि सामाग्री खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>
                    <InputNumber id="Q70_10" disabled={disabled ? 'disabled' : null} value={record && record.Q70_10}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_10')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q70_11">Q70_11. अन्य खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>
                    <InputNumber id="Q70_11" disabled={disabled ? 'disabled' : null} value={record && record.Q70_11}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_11')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q70_12">Q70_12. जम्मा खर्च हुने मासिक औसत खर्च (रुपैयाँ)</label>
                    <InputNumber id="Q70_12" disabled={disabled ? 'disabled' : null} value={record && record.Q70_12}  className='.p-field' onChange={(e) => onInputChange(e, 'Q70_12')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q71_1">Q71_1. कृषि तथा फलफूल मासिक औसत आम्दानी (रुपैयाँ)</label>                    <InputNumber id="Q71_1" disabled={disabled ? 'disabled' : null} value={record && record.Q71_1}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_1')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q71_2">Q71_2. व्यापार/व्यवसाय मासिक औसत आम्दानी (रुपैयाँ)</label>
                    <InputNumber id="Q71_2" disabled={disabled ? 'disabled' : null} value={record && record.Q71_2}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q71_3">Q71_3. सेवा/नोकरी मासिक औसत आम्दानी (रुपैयाँ)</label>
                    <InputNumber id="Q71_3" disabled={disabled ? 'disabled' : null} value={record && record.Q71_3}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_3')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q71_4">Q71_4. ज्याला/मजदुरी मासिक औसत आम्दानी (रुपैयाँ)</label>
                    <InputNumber id="Q71_4" disabled={disabled ? 'disabled' : null} value={record && record.Q71_4}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_4')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q71_5">Q71_5. विप्रेषण (विदेशबाट पठाएको रकम) मासिक औसत आम्दानी (रुपैयाँ)</label>
                    <InputNumber id="Q71_5" disabled={disabled ? 'disabled' : null} value={record && record.Q71_5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_5')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q71_6">Q71_6. घर भाडा बापत प्राप्त रकम मासिक औसत आम्दानी (रुपैयाँ)</label>
                    <InputNumber id="Q71_6" disabled={disabled ? 'disabled' : null} value={record && record.Q71_6}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_6')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q71_7">Q71_7. उद्योग मासिक औसत आम्दानी (रुपैयाँ)</label>                    <InputNumber id="Q71_7" disabled={disabled ? 'disabled' : null} value={record && record.Q71_7}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_7')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q71_8">Q71_8. व्याज मासिक औसत आम्दानी (रुपैयाँ)</label>
                    <InputNumber id="Q71_8" disabled={disabled ? 'disabled' : null} value={record && record.Q71_8}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_8')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q71_9">Q71_9. पेन्सन मासिक औसत आम्दानी (रुपैयाँ)</label>
                    <InputNumber id="Q71_9" disabled={disabled ? 'disabled' : null} value={record && record.Q71_9}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_9')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q71_10">Q71_10. सवारी साधन मासिक औसत आम्दानी (रुपैयाँ)</label>
                    <InputNumber id="Q71_10" disabled={disabled ? 'disabled' : null} value={record && record.Q71_10}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_10')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q71_11">Q71_11.पशुपालन</label>
                    <InputNumber id="Q71_11" disabled={disabled ? 'disabled' : null} value={record && record.Q71_11}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_11')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q71_12">Q71_12. अन्य मासिक औसत आम्दानी (रुपैयाँ)</label>
                    <InputNumber id="Q71_12" disabled={disabled ? 'disabled' : null} value={record && record.Q71_12}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_12')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q71_13">Q71_12. जम्मा खर्च हुने मासिक औसत खर्च (रुपैयाँ)= र     जम्मा मासिक औसत आम्दानी (रुपैयाँ)=</label>                    <InputNumber id="Q71_13" disabled={disabled ? 'disabled' : null} value={record && record.Q71_13}  className='.p-field' onChange={(e) => onInputChange(e, 'Q71_13')}  />                      </div>
<div className="p-field">
                    <label htmlFor="Q72">Q72. तपाईको कुल आम्दानीले खर्च धान्न पुग्छ ?</label>
                    <Dropdown value={Q72} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q72');setQ72(e.value)}} options={pugcha_pugdaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q72 })} />
                    {submitted && !record.Q72&& <small className="p-invalid">Q72. तपाईको कुल आम्दानीले खर्च धान्न पुग्छ ? is required.</small>}  
                    </div>
{/* <div className="p-field">
                    <label htmlFor="Q73">Q73. यदि तपाईको परिवारको कुल वार्षिक आम्दानीले विगत १ वर्षमा परिवार धान्न नपुगेको भए, नपुग अवधिको लागि खर्च धान्ने व्यवस्था कसरी मिलाउनुभयो ? (बहुउत्तर सम्भव छ)</label>
                    <MultiSelect  value={Q73} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q73');setQ73(e.value)}} options={Q73_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q73 })} />
                    {submitted && !record.Q73&& <small className="p-invalid">Q73. यदि तपाईको परिवारको कुल वार्षिक आम्दानीले विगत १ वर्षमा परिवार धान्न नपुगेको भए, नपुग अवधिको लागि खर्च धान्ने व्यवस्था कसरी मिलाउनुभयो ? (बहुउत्तर सम्भव छ) is required.</small>}  
                    </div> */}
<div className="p-field">
                    <label htmlFor="Q73_1">Q73_1. अन्य भए खुलाउनुहोस्</label>
                    <InputText id="Q73_1" disabled={disabled ? 'disabled' : null} value={record && record.Q73_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q73_1')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q75">Q75. यदि  ऋण छ भने, कहाँबाट ऋण लिनु भएको हो ?</label>                    <Dropdown value={Q75} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q75');setQ75(e.value)}} options={Q75_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q75 })} />                    {submitted && !record.Q75&& <small className="p-invalid">Q75. यदि  ऋण छ भने, कहाँबाट ऋण लिनु भएको हो ? is required.</small>}                      </div>
<div className="p-field">
                    <label htmlFor="Q78">Q78. तपाईको परिवार वा परिवारका सदस्य कुनै सामाजिक समूहको सदस्य वा समुहमा आवद्ध हुनुहुन्छ ? </label>
                    <Dropdown value={Q78} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q78');setQ78(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q78 })} />
                    {submitted && !record.Q78&& <small className="p-invalid">Q78. तपाईको परिवार वा परिवारका सदस्य कुनै सामाजिक समूहको सदस्य वा समुहमा आवद्ध हुनुहुन्छ ?  is required.</small>}  
                    </div>
{/* <div className="p-field">
                    <label htmlFor="Q79">Q79. यदि हुनुहुन्छ भने कस्तो संस्था/समुहमा आबद्व हुनुहुन्छ ? (बहुउत्तर सम्भव छ)</label>
                    <MultiSelect  value={Q79} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q79');setQ79(e.value)}} options={Q79_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q79 })} />
                    {submitted && !record.Q79&& <small className="p-invalid">Q79. यदि हुनुहुन्छ भने कस्तो संस्था/समुहमा आबद्व हुनुहुन्छ ? (बहुउत्तर सम्भव छ) is required.</small>}  
                    </div> */}
<div className="p-field">
                    <label htmlFor="Q80">Q80. यदि हुनुहुन्छ भने प्रतिमहिना कति रकम जम्मा गर्नुहुन्छ ? </label>
                    <InputNumber id="Q80" disabled={disabled ? 'disabled' : null} value={record && record.Q80}  className='.p-field' onChange={(e) => onInputChange(e, 'Q80')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q81_1">Q81_1. रेडियो</label>                    <Dropdown value={Q81_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_1');setQ81_1(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_1 })} />                    {submitted && !record.Q81_1&& <small className="p-invalid">Q81_1. रेडियो is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q81_2">Q81_2. टेलिभिजन</label>
                    <Dropdown value={Q81_2} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_2');setQ81_2(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_2 })} />
                    {submitted && !record.Q81_2&& <small className="p-invalid">Q81_2. टेलिभिजन is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q81_3">Q81_3. केवल लाईन जोडेको</label>
                    <Dropdown value={Q81_3} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_3');setQ81_3(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_3 })} />
                    {submitted && !record.Q81_3&& <small className="p-invalid">Q81_3. केवल लाईन जोडेको is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q81_4">Q81_4. टेलिफोन/मोबाइल </label>
                    <Dropdown value={Q81_4} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_4');setQ81_4(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_4 })} />
                    {submitted && !record.Q81_4&& <small className="p-invalid">Q81_4. टेलिफोन/मोबाइल  is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q81_5">Q81_5. साइकल</label>                    <Dropdown value={Q81_5} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_5');setQ81_5(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_5 })} />                    {submitted && !record.Q81_5&& <small className="p-invalid">Q81_5. साइकल is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q81_6">Q81_6. मोटरसाइकल</label>
                    <Dropdown value={Q81_6} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_6');setQ81_6(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_6 })} />
                    {submitted && !record.Q81_6&& <small className="p-invalid">Q81_6. मोटरसाइकल is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q81_7">Q81_7. कार/जिप/भ्यान</label>
                    <Dropdown value={Q81_7} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_7');setQ81_7(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_7 })} />
                    {submitted && !record.Q81_7&& <small className="p-invalid">Q81_7. कार/जिप/भ्यान is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q81_8">Q81_8. सोलार</label>
                    <Dropdown value={Q81_8} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_8');setQ81_8(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_8 })} />
                    {submitted && !record.Q81_8&& <small className="p-invalid">Q81_8. सोलार is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q81_9">Q81_9. इन्भर्टर</label>                    <Dropdown value={Q81_9} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_9');setQ81_9(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_9 })} />                    {submitted && !record.Q81_9&& <small className="p-invalid">Q81_9. इन्भर्टर is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q81_10">Q81_10. जेनेरेटर</label>
                    <Dropdown value={Q81_10} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_10');setQ81_10(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_10 })} />
                    {submitted && !record.Q81_10&& <small className="p-invalid">Q81_10. जेनेरेटर is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q81_11">Q81_11. कम्प्युटर</label>
                    <Dropdown value={Q81_11} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_11');setQ81_11(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_11 })} />
                    {submitted && !record.Q81_11&& <small className="p-invalid">Q81_11. कम्प्युटर is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q81_12">Q81_12. स्मार्ट फोन</label>
                    <Dropdown value={Q81_12} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_12');setQ81_12(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_12 })} />
                    {submitted && !record.Q81_12&& <small className="p-invalid">Q81_12. स्मार्ट फोन is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q81_13">Q81_13. इन्टरनेट</label>                    <Dropdown value={Q81_13} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q81_13');setQ81_13(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q81_13 })} />                    {submitted && !record.Q81_13&& <small className="p-invalid">Q81_13. इन्टरनेट is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q83">Q83. तपाईको परिवार अन्य स्थानबाट यस नगरपालिकामा बसाई सरेर आएको हो ?</label>
                    <Dropdown value={Q83} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q83');setQ83(e.value)}} options={ho_hoina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q83 })} />
                    {submitted && !record.Q83&& <small className="p-invalid">Q83. तपाईको परिवार अन्य स्थानबाट यस नगरपालिकामा बसाई सरेर आएको हो ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q84">Q84. यदि हो भने यहां बसोबास गरेको कति बर्ष भयो ?  </label>
                    <InputNumber id="Q84" disabled={disabled ? 'disabled' : null} value={record && record.Q84}  className='.p-field' onChange={(e) => onInputChange(e, 'Q84')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q85">Q85. कुन स्थानबाट आउनुभएको हो ?</label>
                    <Dropdown value={Q85} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q85');setQ85(e.value)}} options={Q85_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q85 })} />
                    {submitted && !record.Q85&& <small className="p-invalid">Q85. कुन स्थानबाट आउनुभएको हो ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q85_1">Q85_1.  नाम उल्लेख गर्नुहोस्</label>
                    <InputText id="Q85_1" disabled={disabled ? 'disabled' : null} value={record && record.Q85_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q85_1')}  />  
                    </div>
{/* <div className="p-field">                    <label htmlFor="Q86">Q86. यहाँ बसाई सर्नुको कारण के होला ? </label>                    <MultiSelect  value={Q86} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q86');setQ86(e.value)}} options={Q86_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q86 })} />                    {submitted && !record.Q86&& <small className="p-invalid">Q86. यहाँ बसाई सर्नुको कारण के होला ?  is required.</small>}                      </div> */}

<div className="p-field">
                    <label htmlFor="Q86_1">Q86_1. अन्य भए खुलाउनुहोस्</label>
                    <InputText id="Q86_1" disabled={disabled ? 'disabled' : null} value={record && record.Q86_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q86_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q89">Q89. वैदेशिक रोजगारीको कारणले परिवारको कुनै सदस्य विदेशमा बसोबास गर्नुहुन्छ भने सोबाट रेमिटेन्स पाउनुहुन्छ ?</label>
                    <Dropdown value={Q89} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q89');setQ89(e.value)}} options={huncha_hudaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q89 })} />
                    {submitted && !record.Q89&& <small className="p-invalid">Q89. वैदेशिक रोजगारीको कारणले परिवारको कुनै सदस्य विदेशमा बसोबास गर्नुहुन्छ भने सोबाट रेमिटेन्स पाउनुहुन्छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q90">Q90. वैदेशिक रोजगारीबाट रकम प्राप्त गर्ने गरेको छ भने के को मार्फत पाउनुहुन्छ ?</label>
                    <Dropdown value={Q90} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q90');setQ90(e.value)}} options={Q90_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q90 })} />
                    {submitted && !record.Q90&& <small className="p-invalid">Q90. वैदेशिक रोजगारीबाट रकम प्राप्त गर्ने गरेको छ भने के को मार्फत पाउनुहुन्छ ? is required.</small>}  
                    </div>
{/* <div className="p-field">                    <label htmlFor="Q91">Q91. तपाई वा तपाईको परिवारका सदस्यहरु विरामी हुँदा उपचारको लागि प्राय कहाँकहाँ जानुहुन्छ ?(बहुउत्तर सम्भव छ)</label>                    <MultiSelect  value={Q91} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q91');setQ91(e.value)}} options={Q91_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q91 })} />                    {submitted && !record.Q91&& <small className="p-invalid">Q91. तपाई वा तपाईको परिवारका सदस्यहरु विरामी हुँदा उपचारको लागि प्राय कहाँकहाँ जानुहुन्छ ?(बहुउत्तर सम्भव छ) is required.</small>}                      </div> */}

<div className="p-field">
                    <label htmlFor="Q91_1">Q91_1. अन्य भए उल्लेख गर्ने</label>
                    <InputText id="Q91_1" disabled={disabled ? 'disabled' : null} value={record && record.Q91_1} className='.p-field' onChange={(e) => onInputChange(e, 'Q91_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q92">Q92. तपाई वा तपाईको परिवारको सदस्यहरुलाई नियमित रुपमा स्वास्थ्य परिक्षण गराउने चलन छ ? </label>
                    <Dropdown value={Q92} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q92');setQ92(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q92 })} />
                    {submitted && !record.Q92&& <small className="p-invalid">Q92. तपाई वा तपाईको परिवारको सदस्यहरुलाई नियमित रुपमा स्वास्थ्य परिक्षण गराउने चलन छ ?  is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q93">Q93. गत १२ महिनामा तपाईको परिवारमा गर्भवती महिलाले नियमित रुपमा तालिम प्राप्त स्वास्थ्यकर्मीहरुबाट स्वास्थ्य जाँच गराउनुभएको छ ?</label>
                    <Dropdown value={Q93} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q93');setQ93(e.value)}} options={Q93_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q93 })} />
                    {submitted && !record.Q93&& <small className="p-invalid">Q93. गत १२ महिनामा तपाईको परिवारमा गर्भवती महिलाले नियमित रुपमा तालिम प्राप्त स्वास्थ्यकर्मीहरुबाट स्वास्थ्य जाँच गराउनुभएको छ ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q94">Q94. यदि नगराइएको भए, किन स्वास्थ्य जाँच नगराउनु भएको हो ? </label>                    <Dropdown value={Q94} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q94');setQ94(e.value)}} options={Q94_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q94 })} />                    {submitted && !record.Q94&& <small className="p-invalid">Q94. यदि नगराइएको भए, किन स्वास्थ्य जाँच नगराउनु भएको हो ?  is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q95">Q95. गत १ वर्षमा तपाईको परिवारको महिलाले बच्चा जन्माउनु भएको भए कहाँ जन्माउनुभयो? </label>
                    <Dropdown value={Q95} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q95');setQ95(e.value)}} options={Q95_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q95 })} />
                    {submitted && !record.Q95&& <small className="p-invalid">Q95. गत १ वर्षमा तपाईको परिवारको महिलाले बच्चा जन्माउनु भएको भए कहाँ जन्माउनुभयो?  is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q98_1">Q98_1. तपाईको परिवारमा ५ वर्ष मुनिका केटाकेटी छन्?</label>
                    <Dropdown value={Q98_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q98_1');setQ98_1(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q98_1 })} />
                    {submitted && !record.Q98_1&& <small className="p-invalid">Q98_1. तपाईको परिवारमा ५ वर्ष मुनिका केटाकेटी छन्? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q101_1">Q101_1. ५ वर्ष भन्दा मुनिको वृद्धि अनुगमन र मापन हुन्छ</label>                    <Dropdown value={Q101_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q101_1');setQ101_1(e.value)}} options={huncha_hudaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q101_1 })} />                    {submitted && !record.Q101_1&& <small className="p-invalid">Q101_1. ५ वर्ष भन्दा मुनिको वृद्धि अनुगमन र मापन हुन्छ is required.</small>}                      </div>
<div className="p-field">
                    <label htmlFor="Q101_2">Q101_2. गर्भवती महिलाको लागि आइरन चक्की लिने गरेको छ? </label>
                    <Dropdown value={Q101_2} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q101_2');setQ101_2(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q101_2 })} />
                    {submitted && !record.Q101_2&& <small className="p-invalid">Q101_2. गर्भवती महिलाको लागि आइरन चक्की लिने गरेको छ?  is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q101_5">Q101_5. ६ महिना देखि ५ वर्ष सम्मका बच्चालाई भिटामिन ए खुवाउने गरेको छ?</label>
                    <Dropdown value={Q101_5} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q101_5');setQ101_5(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q101_5 })} />
                    {submitted && !record.Q101_5&& <small className="p-invalid">Q101_5. ६ महिना देखि ५ वर्ष सम्मका बच्चालाई भिटामिन ए खुवाउने गरेको छ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q101_6">Q101_6. १ वर्ष देखि ५ वर्ष सम्मका बच्चालाई  जुकाको औषधी खुवाएको छ ?</label>                    <Dropdown value={Q101_6} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q101_6');setQ101_6(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q101_6 })} />                    {submitted && !record.Q101_6&& <small className="p-invalid">Q101_6. १ वर्ष देखि ५ वर्ष सम्मका बच्चालाई  जुकाको औषधी खुवाएको छ ? is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q109_1">Q109_1. घरयासी</label>
                    <Dropdown value={Q109_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q109_1');setQ109_1(e.value)}} options={Q109_1_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q109_1 })} />
                    {submitted && !record.Q109_1&& <small className="p-invalid">Q109_1. घरयासी is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q109_2">Q109_2. सामुदायिक/सामाजिक</label>
                    <Dropdown value={Q109_2} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q109_2');setQ109_2(e.value)}} options={Q109_1_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q109_2 })} />
                    {submitted && !record.Q109_2&& <small className="p-invalid">Q109_2. सामुदायिक/सामाजिक is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q109_3">Q109_3. घर जग्गा किनबेच</label>
                    <Dropdown value={Q109_3} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q109_3');setQ109_3(e.value)}} options={Q109_1_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q109_3 })} />
                    {submitted && !record.Q109_3&& <small className="p-invalid">Q109_3. घर जग्गा किनबेच is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q110">Q110. तपाईको परिवारमा महिलाको नाममा चल/अचल सम्पतिहरु छ ?</label>                    <Dropdown value={Q110} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q110');setQ110(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q110 })} />                    {submitted && !record.Q110&& <small className="p-invalid">Q110. तपाईको परिवारमा महिलाको नाममा चल/अचल सम्पतिहरु छ ? is required.</small>}                      </div>

{/* <div className="p-field">
                    <label htmlFor="Q111">Q111. छ भने कुन सम्पत्तिमा महिला स्वामित्व छ?</label>
                    <MultiSelect  value={Q111} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q111');setQ111(e.value)}} options={Q111_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q111 })} />
                    {submitted && !record.Q111&& <small className="p-invalid">Q111. छ भने कुन सम्पत्तिमा महिला स्वामित्व छ? is required.</small>}  
                    </div> */}
<div className="p-field">
                    <label htmlFor="Q112">Q112. तपाईलाई भवन संहिताको बारेमा थाहा छ?</label>
                    <Dropdown value={Q112} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q112');setQ112(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q112 })} />
                    {submitted && !record.Q112&& <small className="p-invalid">Q112. तपाईलाई भवन संहिताको बारेमा थाहा छ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q114">Q114. तपाईले घर निर्माण गर्दा नपाबाट अनुमतिपत्र र नक्सापास लिनु भएको छ?</label>                    <Dropdown value={Q114} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q114');setQ114(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q114 })} />                    {submitted && !record.Q114&& <small className="p-invalid">Q114. तपाईले घर निर्माण गर्दा नपाबाट अनुमतिपत्र र नक्सापास लिनु भएको छ? is required.</small>}                      </div>
<div className="p-field">
                    <label htmlFor="Q114_1">Q114_1. तपाइँको घर भूकम्प प्रतिरोधी छ?</label>
                    <Dropdown value={Q114_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q114_1');setQ114_1(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q114_1 })} />
                    {submitted && !record.Q114_1&& <small className="p-invalid">Q114_1. तपाइँको घर भूकम्प प्रतिरोधी छ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q115">Q115. तपाईको घरछेउमा खुल्ला र सुरक्षित क्षेत्र छ?  </label>
                    <Dropdown value={Q115} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q115');setQ115(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q115 })} />
                    {submitted && !record.Q115&& <small className="p-invalid">Q115. तपाईको घरछेउमा खुल्ला र सुरक्षित क्षेत्र छ?   is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q116">Q116. तपाईको घर प्राकृतिक प्रकोप जस्तै बाढी आदिको जोखिम क्षेत्रमा छ/छैन ?</label>
                    <Dropdown value={Q116} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q116');setQ116(e.value)}} options={Q116_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q116 })} />
                    {submitted && !record.Q116&& <small className="p-invalid">Q116. तपाईको घर प्राकृतिक प्रकोप जस्तै बाढी आदिको जोखिम क्षेत्रमा छ/छैन ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q117">Q117. के तपाईले टि.भि रेडियो लगाएतका सञ्चार माध्यम मार्फत भूकम्प, पहिरो, बाडी आदिकोजोखिम न्युनिकरणका लागि प्रभावकारी सूचना प्राप्त गर्नु भएको छ ?</label>                    <Dropdown value={Q117} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q117');setQ117(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q117 })} />                    {submitted && !record.Q117&& <small className="p-invalid">Q117. के तपाईले टि.भि रेडियो लगाएतका सञ्चार माध्यम मार्फत भूकम्प, पहिरो, बाडी आदिकोजोखिम न्युनिकरणका लागि प्रभावकारी सूचना प्राप्त गर्नु भएको छ ? is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q118">Q118. भुकम्प आएको बेला तपाईको घर भित्रका सुरक्षित स्थानहरु पहिचान गर्नु भएको छ ?</label>
                    <Dropdown value={Q118} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q118');setQ118(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q118 })} />
                    {submitted && !record.Q118&& <small className="p-invalid">Q118. भुकम्प आएको बेला तपाईको घर भित्रका सुरक्षित स्थानहरु पहिचान गर्नु भएको छ ? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q119">Q119. के तपाईले आपतकालिन समयमा काम लाग्ने संसाधनहरु जुटाएर राख्नु भएको छ ?</label>
                    <Dropdown value={Q119} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q119');setQ119(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q119 })} />
                    {submitted && !record.Q119&& <small className="p-invalid">Q119. के तपाईले आपतकालिन समयमा काम लाग्ने संसाधनहरु जुटाएर राख्नु भएको छ ? is required.</small>}  
                    </div>
<div className="p-field">                    <label htmlFor="Q127_1">Q127_. तपाईको घर/ भवनले कुनै समयमा बाडी थामेको छ?</label>                    <Dropdown value={Q127_1} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q127_1');setQ127_1(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q127_1 })} />                    {submitted && !record.Q127_1&& <small className="p-invalid">Q127_. तपाईको घर/ भवनले कुनै समयमा बाडी थामेको छ? is required.</small>}                      </div>
{/* <div className="p-field">
                    <label htmlFor="Q129">Q129.  प्रकोपबाट तपाईको परिवारको कुनै सदस्यको मृत्यु वा घाइते भएको छ?</label>
                    <MultiSelect  value={Q129} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q129');setQ129(e.value)}} options={Q129_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q129 })} />
                    {submitted && !record.Q129&& <small className="p-invalid">Q129.  प्रकोपबाट तपाईको परिवारको कुनै सदस्यको मृत्यु वा घाइते भएको छ? is required.</small>}  
                    </div> */}
<div className="p-field">
                    <label htmlFor="Q129_1">Q129_1.खडेरी मृत्यु हुनेको संख्या</label>
                    <InputNumber id="Q129_1" disabled={disabled ? 'disabled' : null} value={record && record.Q129_1}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_1')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q129_2">Q129_2.खडेरी घाइते हुनेको संख्या</label>
                    <InputNumber id="Q129_2" disabled={disabled ? 'disabled' : null} value={record && record.Q129_2}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_2')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q129_3">Q129_3.हावाहुरी मृत्यु हुनेको संख्या</label>
                    <InputNumber id="Q129_3" disabled={disabled ? 'disabled' : null} value={record && record.Q129_3}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_3')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q129_4">Q129_4.हावाहुरी घाइते हुनेको संख्या</label>                    <InputNumber id="Q129_4" disabled={disabled ? 'disabled' : null} value={record && record.Q129_4}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_4')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q129_5">Q129_5.चट्यांग मृत्यु हुनेको संख्या</label>
                    <InputNumber id="Q129_5" disabled={disabled ? 'disabled' : null} value={record && record.Q129_5}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_5')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q129_6">Q129_6. चट्यांग घाइते हुनेको संख्या</label>
                    <InputNumber id="Q129_6" disabled={disabled ? 'disabled' : null} value={record && record.Q129_6}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_6')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q129_9">Q129_9.बाडी मृत्यु हुनेको संख्या</label>
                    <InputNumber id="Q129_9" disabled={disabled ? 'disabled' : null} value={record && record.Q129_9}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_9')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q129_10">Q129_10. बाडी घाइते हुनेको संख्या </label>
                    <InputNumber id="Q129_10" disabled={disabled ? 'disabled' : null} value={record && record.Q129_10}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_10')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q129_13">Q129_13.आगलागी मृत्यु हुनेको संख्या</label>
                    <InputNumber id="Q129_13" disabled={disabled ? 'disabled' : null} value={record && record.Q129_13}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_13')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q129_14">Q129_14.आगलागी घाइते हुनेको संख्या </label>                    <InputNumber id="Q129_14" disabled={disabled ? 'disabled' : null} value={record && record.Q129_14}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_14')}  />                      </div>

<div className="p-field">
                    <label htmlFor="Q129_15">Q129_15.भूकम्पबाट मृत्यु हुनेको संख्या</label>
                    <InputNumber id="Q129_15" disabled={disabled ? 'disabled' : null} value={record && record.Q129_15}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_15')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q129_16">Q129_16.भूकम्पबाट घाइते हुनेको संख्या</label>
                    <InputNumber id="Q129_16" disabled={disabled ? 'disabled' : null} value={record && record.Q129_16}  className='.p-field' onChange={(e) => onInputChange(e, 'Q129_16')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q130">Q130. तपाईको घर/भवनमा कुनै समयमा आगो लागेको थियो?</label>
                    <Dropdown value={Q130} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q130');setQ130(e.value)}} options={thiyo_thiyena_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q130 })} />
                    {submitted && !record.Q130&& <small className="p-invalid">Q130. तपाईको घर/भवनमा कुनै समयमा आगो लागेको थियो? is required.</small>}  
                    </div>
<div className="p-field">
                    <label htmlFor="Q131">Q131. थियो भने कति पटक.....</label>
                    <InputText id="Q131" disabled={disabled ? 'disabled' : null} value={record && record.Q131} className='.p-field' onChange={(e) => onInputChange(e, 'Q131')}  />  
                    </div>
<div className="p-field">                    <label htmlFor="Q132">Q132. यो क्षेत्रमा कुनै समयमा महामारीको समस्या थियो?</label>                    <Dropdown value={Q132} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q132');setQ132(e.value)}} options={thiyo_thiyena_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q132 })} />                    {submitted && !record.Q132&& <small className="p-invalid">Q132. यो क्षेत्रमा कुनै समयमा महामारीको समस्या थियो? is required.</small>}                      </div>

<div className="p-field">
                    <label htmlFor="Q133">Q133. महामारीले तपाईको परिवारको कति जना सदस्यलाई असर गरेको थियो?</label>
                    <InputNumber id="Q133" disabled={disabled ? 'disabled' : null} value={record && record.Q133}  className='.p-field' onChange={(e) => onInputChange(e, 'Q133')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="Q135">Q135. तपाईको परिवारको कुनै सदस्यले विपद व्यवस्थापन, प्राथमिक उपचार, उद्दार को तालिम लिनुभएको छ?</label>
                    <Dropdown value={Q135} disabled={disabled ? 'disabled' : null} onChange={(e) => { onDroupdownChange(e, 'Q135');setQ135(e.value)}} options={cha_chaina_choices} optionLabel="name" placeholder="Select"required className={classNames({ 'p-invalid': submitted && !record.Q135 })} />
                    {submitted && !record.Q135&& <small className="p-invalid">Q135. तपाईको परिवारको कुनै सदस्यले विपद व्यवस्थापन, प्राथमिक उपचार, उद्दार को तालिम लिनुभएको छ? is required.</small>}  
                    </div>
                    <div className="p-field">
                    <label htmlFor="phonenumber">phonenumber</label>
                    <InputText id="phonenumber" disabled={disabled ? 'disabled' : null} value={record && record.phonenumber} className='.p-field' onChange={(e) => onInputChange(e, 'phonenumber')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="username">username</label>
                    <InputText id="username" disabled={disabled ? 'disabled' : null} value={record && record.username} className='.p-field' onChange={(e) => onInputChange(e, 'username')}  />  
                    </div>
{/* <div className="p-field">
                    <label htmlFor="instanceID">instanceID</label>
                    <InputText id="instanceID" disabled={disabled ? 'disabled' : null} value={record && record.instanceID} className='.p-field' onChange={(e) => onInputChange(e, 'instanceID')}  />  
                    </div>
<div className="p-field">
                    <label htmlFor="KEY">KEY</label>
                    <InputText id="KEY" disabled={disabled ? 'disabled' : null} value={record && record.KEY} className='.p-field' onChange={(e) => onInputChange(e, 'KEY')}  />  
                    </div> */}




                    {/* <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} /> */}
                    <Button label="Submit" icon="pi pi-check" className="p-button-text" onClick={saveRecord} />
                </div>
            </div>
        </div></>
    );
}
