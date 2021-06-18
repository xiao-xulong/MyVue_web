<template>
    <div>
      <header>
        <img src="../assets/img/page_head.jpg">
      </header>
<h4>{{text.title}}</h4>
      <div v-html="text.content">{{text.content}}</div>
    </div>
</template>

<script>
  import {text_get,text_img_get} from '../request/axios'
  export default {
    name: 'NO4',
   async created () {
      this.text=(await text_get()).data.data
     this.text_img=(await text_img_get()).data.data
     console.log(this.text)
     console.log(this.text_img)
    },
    data(){
      return{
        text:{},
        text_img:{}
      }
    }
  }
</script>

<style scoped>
header  img{

width:100%;
}
  h4{
    text-align: center;
  }
</style>
