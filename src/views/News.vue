<template>
<div>
<img :src="news.image">
</div>
</template>

<script>
  import {news_get} from '../request/axios'
  export default {
    name: 'NO3',
 async created () {
 // const  result=await this.$http.get('https://v2.alapi.cn/api/zaobao',{params:{"token":'pG70XSoRwSkGQPQm',"format":'json'}})
 //  console.log(result)
   this.news=(await news_get()).data.data
   console.log(this.news)
 //    }


  },
  data(){
      return{
        news:{}
      }
  }
  }
</script>

<style scoped>
img{
  width: 100vw;
}
</style>
