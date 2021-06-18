<template >
<div class="body">

 <header> <img :src="this.url"></header>
  <footer>
  <p>&emsp;&emsp;{{desc}}----{{author}}</p>

</footer>
</div>
</template>

<script>
  export default {
    name: 'detail',
    created () {
      this.author=this.$route.params.author
      this.desc=this.$route.params.desc
      this.url=this.$route.params.url
      console.log(this.author)
      console.log(this.desc)
      console.log(this.url)

    },
    data(){
      return{
        author:'',
        desc:'',
        url:''
      }
    }
  }
</script>

<style scoped lang="less">

header{
   img{
     width: 100vw;
   }

 }
footer{
  height: 100%;
  p{
    display: block;
    color: #1d1f20;
    font-weight: bolder; height: 100%;
  }

}

</style>
