<template>
    <div>
     <div class="left">
       <ul v-for="pic in left_pics" :key="pic.id" class="left">
         <li>
           <img @click="detail(pic.author,pic.desc,pic.url)" v-lazy="pic.url">
         </li>
       </ul>
     </div>
      <div class="right">
        <ul v-for="pic in right_pics" :key="pic.id" class="right">
          <li>
            <img @click="detail(pic.author,pic.desc,pic.url)" v-lazy="pic.url">
          </li>
        </ul>
      </div>


    </div>
</template>

<script>
  import {pics_get} from '../request/axios'


  export default {
    name: 'Pics',
    async created () {
      this.pics=(await pics_get()).data.data
      this.left_pics=this.pics.filter((item,index)=>{
        return (index%2!=0)
      })
      this.right_pics=this.pics.filter((item,index)=>{
        return (index%2==0)
      })
      console.log(this.left_pics)
      console.log(this.right_pics)

    },
    data(){
      return{
        pics:[],
        left_pics:[],
        right_pics:[]

      }

    },
    methods:{
      detail(author,desc,url){
        this.$router.push({name:'Pics_detail',params:{author:author,desc:desc,url:url}
        })
      }

    }
  }
</script>

<style scoped lang="less">
 .left{

  width: 50vw;

   background-color: red;
   float: left;
 }
 .right{
   width: 50vw;
   background-color: green;

   float: right;
 }
img{
  width: 50vw;
vertical-align: middle;
}
ul li{
  float: left;
}
</style>
