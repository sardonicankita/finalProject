const axios = require('axios');

function getData(){
    var config = {
        method: 'get',
        url: 'http://localhost:3000/api/orders-lookup/services/v4/orders?orderNo=200001001037715',
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'WM_CONSUMER.ID': '2d0a30c7-b4cc-45d1-b451-d93535f5a92d', 
          'WM_CONSUMER.TENANT_ID': '0', 
          'WM_SVC.ENV': 'teflon', 
          'WM_SVC.NAME': 'order-service', 
          'WM_SVC.VERSION': '4.0.0', 
          'X-Request-ID': '1234_3bb32b5d-32e9-4d0a-ace6-e682edddd348', 
          'WM_QOS.CORRELATION_ID': '1234'
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

}
getData()
module.exports={getData}