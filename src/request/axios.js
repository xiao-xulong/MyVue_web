import axios from 'axios'
//获取首页图片
  const pics =axios.create({
  baseURL: 'https://gank.io/api/v2/data/category',
  timeout: 3000,
  headers: {'X-Custom-Header': 'foobar'}
});
function pics_get () {
  return  pics.get('/Girl/type/Girl/page/1/count/50')
}

const weather =axios.create({
  baseURL: '//api.help.bj.cn/',
  timeout: 3000,

});
function weather_get (city_name) {
  return  weather.get(`apis/weather2d/`,{params:{
    id:city_name
    }})
}

const weather_t =axios.create({
  baseURL: 'https://v2.alapi.cn/api',
  timeout: 3000,

});
function weather_t_get (city_name) {
  return  weather_t.get(`/weather/forecast`,{params:{
      location:city_name,"token":`pG70XSoRwSkGQPQm`
    }})
}



const news =axios.create({
  baseURL: 'https://v2.alapi.cn/api',
  timeout: 3000
} );
function news_get() {
  return  news.get(`/zaobao`,{params:{"token":`pG70XSoRwSkGQPQm`,"format":`json`}})
}

const text =axios.create({
  baseURL: 'https://v2.alapi.cn/api',
  timeout: 3000
} );
function text_get() {
  return  text.get(`/mryw/random`,{params:{"token":`pG70XSoRwSkGQPQm`}})
}

const text_img =axios.create({
  baseURL: 'https://v2.alapi.cn/api',
  timeout: 3000
} );
function text_img_get() {
  return  text.get(`/one/photo`,{params:{"token":`pG70XSoRwSkGQPQm`}})
}

export {pics_get,weather_get,news_get,weather_t_get,text_get,text_img_get};



