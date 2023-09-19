import axios from 'axios'
const access_token='e9413bcdc5dc1c45cfb4d339e6328665b586574d';
const ip='http://127.0.0.1:8000'
export class ApiService {
    
    getHousehold(ward,search,limit,offset,ordering,id,KEY) {
      let apiUrl = `${ip}/api/household/?Ward=${ward}&search=${search}&limit=${limit}&offset=${offset}&ordering=${ordering}&id=${id}&KEY=${KEY}`;
      
        return axios.get(apiUrl, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          })

          .then((res) =>  {
            console.log('API Response:', res.data)
            return res.data
            
        })
          .catch((error) => {
            console.error(error)
          })
    }
    // Function to create a new Household (POST request)
    createHousehold(data) {
      let apiUrl = `${ip}/api/household/`;

      return axios.post(apiUrl, data, {
          headers: {
              'Authorization': `token ${access_token}`,
              'Content-Type': 'application/json', // Set the content type to JSON
          }
      })
      .then((res) => {
          console.log('API Response:', res.data);
          return res.data;
      })
      .catch((error) => {
          console.error(error);
      });
  }

    getPersonal(ward,search,limit,offset,ordering,id,PARENT_KEY) {
        let apiUrl = `${ip}/api/personal/?Ward=${ward}&search=${search}&limit=${limit}&offset=${offset}&ordering=${ordering}&id=${id}&PARENT_KEY=${PARENT_KEY}`;
        
          return axios.get(apiUrl, {
              headers: {
                'Authorization': `token ${access_token}`
              }
            })
  
            .then((res) =>  {
              console.log('API Response:', res.data)
              return res.data
              
          })
            .catch((error) => {
              console.error(error)
            })
      }
  
    getAnalysis(model,question,ward){
      let apiUrl = `${ip}/api/analysis/?model=${model}`;
      if (ward !== 'All' & ward!== 0 & ward!=="NaN") {
        apiUrl += `&ward=${encodeURIComponent(ward)}`;
      }
      if (question !== NaN & question!=="" ) {
        apiUrl += `&Q=${encodeURIComponent(question)}`;
      }
      
      return axios.get(apiUrl, {
            headers: {
              'Authorization': `token ${access_token}`
            }
          })
          .then((res) => {
          // console.log('API Response:', res); // Log the entire response
          return res.data.result})
          .catch((error) => {
            console.error(error)
          })
    }
    
}