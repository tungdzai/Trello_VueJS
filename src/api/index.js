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
    register(data){
      return apiAxios({
        method:'post',
        url:'auth/register',
        data:data
      })
    },
    login(data){
      return apiAxios({
        method:'post',
        url:'auth/login',
        data:data
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