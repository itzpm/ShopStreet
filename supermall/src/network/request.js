import axios from 'axios'

export function request(config) {
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance1.interceptors.request.use(nconfig => {
    // console.log(nconfig);
    //必须返回不然外面拿不到
    return nconfig
  }, failure => {
    // console.log(failure);
  })

  instance1.interceptors.response.use(res=>{
    // console.log(res);
    return res.data
  },error =>{
    // console.log(error);
  })
  return instance1(config)
}
