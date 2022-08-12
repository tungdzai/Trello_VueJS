import axios from 'axios'
const baseUrl = 'http://vuecourse.zent.edu.vn';

export const apiAxios = axios.create({
    baseURL:`${baseUrl}/api`,
    headers: {
      post: {
        'Content-Type': 'application/json'
      }
    }
})
export default {
    getproducts() {
      return apiAxios({
        method: 'get',
        url: '/products'
      })
    },
    
    saveProducts(data){
        return apiAxios({
            method: 'post',
            url: '/products',
            data:data
          })
    }
}