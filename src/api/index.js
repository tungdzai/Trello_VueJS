import axios from 'axios'
import store from '../store';
import router from '@/router';
const baseUrl = 'http://vuecourse.zent.edu.vn';

export const apiAxios = axios.create({
  baseURL:`${baseUrl}/api`,
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
})

apiAxios.interceptors.request.use(config => {
  let token = store.state.auth.accessToken
  if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

apiAxios.interceptors.response.use(undefined, (error) => {
  if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry && router.currentRoute.name !== 'Login') {
          store.commit('auth/updateStatusLogin', false)
          store.commit('auth/updateAccessToken', '')
          return router.push({ name: 'Login' })
      }
  }
  return Promise.reject(error);
})

export default {
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
    signout(){
      return apiAxios({
        method:'post',
        url:'auth/logout',  
      })
    },
    infoAuthme(){
      return apiAxios({
        method:'get',
        url:'auth/me',
       
      })
    },
    putupdate(data){
      return apiAxios({
        method:'put',
        url:'users/password',
        data
      })
    },
    postdatauser(formdata){
      return apiAxios({
        method:'post',
        url:'/users',
        data: formdata
      })
    },
    putUpdataPass(data){
      return apiAxios({
        method:'put',
        url:'/users/password',
        data
      })
    },
    getListDirectories() {
      return apiAxios({
          method: 'get',
          url: '/directories',
      })
    },
    postListDirectories(data){
      return apiAxios({
        method:'post',
        url:'/directories',
        data:data
      })
    },
    deleteListDirectories(id){
      return apiAxios({
        method:'delete',
        url:'/directories/'+id
      })
    },
    editTitleDirectories(data,id){
      return apiAxios({
        method:'PUT',
        url:'/directories/'+id,
        data:data 
      })
    },
    postaddCards(data){
      return apiAxios({
        method:'post',
        url:'/cards',
        data:data,
      })
    },
    getlistCard(id){
      return apiAxios({
          method:'get',
          url:'/cards/'+id
        })
    },
    puteditCards(data ,id){
      return apiAxios({
        method:'PUT',
        url:'/cards/'+id,
        data
      })
    },
    deleteCards(id){
      return apiAxios({
        method:'delete',
        url:'/cards/'+id
      })
    },
    postchecklist(data){
      return apiAxios({
        method:'post',
        url:'/check-lists',
        data:data
      })
    },
    puteditchecklists(data,id){
      return apiAxios({
        method:'put',
        url:'/check-lists/'+id,
        data
      })
    },
    deletechecklist(id){
      return apiAxios({
        method:'delete',
        url:'/check-lists/'+id,
      })
    },
    postchecklistchild(data){
      return apiAxios({
        method:'post',
        url:'/check-list-childs',
        data
      })
    },
    putUpdateCheckListChilds(data,id){
      return apiAxios({
        method:'put',
        url:'/check-list-childs/'+id,
        data
      })
    },
    deleteCheckListChilds(id){
      return apiAxios({
        method:'delete',
        url:'/check-list-childs/'+id,
      })
    },
    postLabelsAddCard(data,id){
      return apiAxios({
        method:'post',
        url:'/cards/'+id+'/label',
        data
      })
    },
    putEditLabels(data,id){
      return apiAxios({
        method:'put',
        url:'/labels/'+id,
        data
      })
    },
    delLabel(id){
      return apiAxios({
        method:'delete',
        url:'/labels/'+id
      })
    },
    postFormData(data,id){
      return apiAxios({
        method:'post',
        url:'cards/'+id+'/upload-file',
        data
      })
    },
    putEditFileUpload(data,id){
      return apiAxios({
        method:'PUT',
        url:'/files/'+id,
        data
      })
    },
    DelFileUpLoad(id){
      return apiAxios({
        method:'Delete',
        url:'/files/'+id
      })
    },
    updataDirectories(id,index){
      return apiAxios({
        method:'PUT',
        url:'/directories/'+id+'/index?index='+index,
      })
    },
    putchangecards(data,id){
      return apiAxios({
        method:'PUT',
        url:'/cards/'+id+'/directory',
        data
      })
    }
}