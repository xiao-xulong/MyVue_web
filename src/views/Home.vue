<template>

<div>
<header>

<a href="javascript:void(0);" class="menu-icon" @click.stop="menu_appear">
  <svg t="1623224729314" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2501" ><path d="M840.544 716.8c7.04 0 12.8 5.76 12.8 12.8v42.656a12.8 12.8 0 0 1-12.8 12.8H183.456a12.8 12.8 0 0 1-12.8-12.8V729.6c0-7.04 5.76-12.8 12.8-12.8h657.088z m0-238.944c7.04 0 12.8 5.76 12.8 12.8v42.688a12.8 12.8 0 0 1-12.8 12.8H183.456a12.8 12.8 0 0 1-12.8-12.8v-42.688c0-7.04 5.76-12.8 12.8-12.8h657.088z m0-238.912c7.04 0 12.8 5.728 12.8 12.8V294.4a12.8 12.8 0 0 1-12.8 12.8H183.456a12.8 12.8 0 0 1-12.8-12.8V251.744c0-7.072 5.76-12.8 12.8-12.8h657.088z" p-id="2502" fill="#ffffff"></path></svg>
</a>
  <span>
    {{topbar_name}}

  </span>
  <a href="javascript:void(0);" class="search" @click="city_choose">
    <svg t="1623224809439" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4224" ><path d="M889.6 829.44l-170.666667-170.666667a104.106667 104.106667 0 0 0-18.346666-14.933333l-42.666667-29.44A298.666667 298.666667 0 1 0 426.666667 725.333333a298.666667 298.666667 0 0 0 186.453333-65.28l32 42.666667a110.933333 110.933333 0 0 0 12.8 15.36l170.666667 170.666667a21.333333 21.333333 0 0 0 30.293333 0l29.866667-29.866667a21.333333 21.333333 0 0 0 0.853333-29.44zM426.666667 640a213.333333 213.333333 0 1 1 213.333333-213.333333 213.333333 213.333333 0 0 1-213.333333 213.333333z" p-id="4225" fill="#ffffff"></path></svg>
  </a>
</header>
  <div class="menu" ref="menu">

    <div class="user_info">
   <div class="user_pic">
     <img src="../assets/img/user_pic.jpeg">
   </div>
<div class="username">
  {{$store.state.username}}
</div>
 </div>
    <div class="menu_list">
    <ul v-for="(item,index) in menu_list" :key="item.id">
      <li >
        <a   ref="aindex" href="#"  :path="path"  @click="menu_list_change(index)">
        <span class="menu_list_icon">
          <van-icon size="7vw" class="van-icon" :name="menu_list_icons[item.id]" />
        </span>
         <span class="menu_list_name"> {{item.name}}</span>
      </a>
      </li>

    </ul>
    </div>
  </div>
  <div class="routers">
<router-view/>
  </div>
</div>
</template>

<script>
  import { Dialog } from 'vant';
  import { Field } from 'vant';
  import { Toast } from 'vant';
export default {
//
// mounted () {
//   console.log(this.$refs.field)
//
//  // const menu_list= document.querySelectorAll('a')
//  //  console.log(menu_list);
//   // for (let i=0;i<;i++){
//   //
//   // }
//   //
//   // if (this.menu_list[index].path==this.$route.path){
//   //   this.$refs.aindex[index].childNodes[0].style.color='#ffffff'
//   //   this.$refs.aindex[index].childNodes[0].style.background='#03a4eb'
//   //   this.$refs.aindex[index].childNodes[1].style.color='#03a4eb'
//   //   // this.menu_disappear();
//   //   this.$router.push(this.menu_list[index].path)
//   // }
//
// },

  name: 'Home',

data(){
      return{
        menu_list:[
          {name:"美图美语",id:1,path:'/Pics'},
          {name:"天气预报",id:2,path:'/Weather'},
          {name:"世界晨报",id:3,path:'/News'},
          {name:"每日散文",id:4,path:'/Article'}
        ],
        menu_list_icons:{
          1:'star-o',
          2:'bullhorn-o',
          3:'newspaper-o',
          4:'records'
        },
        menu_flag:false,
        path:this.$route.path,
        topbar_name:'美图美语'
      }
    },

    watch:{
  menu_flag(){
    console.log(this.menu_flag+'watch')
    let menu_disappear=()=>{
      const tmenu=  document.getElementsByClassName('menu')
      if (this.menu_flag==true){
        this.menu_flag=!this.menu_flag
        console.log(this.menu_flag+"取反")
        if(this.menu_flag==false) {
          tmenu[0].style.transform = 'translate(0vw)'
          console.log(this.menu_flag+"4")
          document.removeEventListener("click", menu_disappear);
        }
      }
    }
    document.addEventListener("click", menu_disappear);

  }
},
    methods:{
      menu_list_change(index){
        for (let i=0;i<this.$refs.aindex.length;i++){
          this.$refs.aindex[i].childNodes[0].style.color=''
          this.$refs.aindex[i].childNodes[0].style.background=''
          this.$refs.aindex[i].childNodes[1].style.color=''
        }
        this.$refs.aindex[index].childNodes[0].style.color='#ffffff'
        this.$refs.aindex[index].childNodes[0].style.background='#03a4eb'
        this.$refs.aindex[index].childNodes[1].style.color='#03a4eb'
       // this.menu_disappear();
        this.$router.push(this.menu_list[index].path)
    this.topbar_name=this.menu_list[index].name
      },
      menu_appear(){
        this.$refs.menu.style.transform='translate(70vw)'
        this.menu_flag=true
        console.log(this.menu_flag+"1")


        const menu_list=  this.$refs.aindex
        for (let i=0;i<menu_list.length;i++){
       if(this.menu_list[i].path==this.$route.path){
         menu_list[i].childNodes[0].style.color='#ffffff'
         menu_list[i].childNodes[0].style.background='#03a4eb'
         menu_list[i].childNodes[1].style.color='#03a4eb'
       }
        }
        console.log(menu_list);
      },
      // // menu_disappear(){
      // //   if (this.menu_flag==true){
      // //     this.$refs.menu.style.transform='translate(0vw)'
      // //     this.menu_flag=false;
      // //   }
      //
      // }
      city_choose(){
        if (this.$route.path=='/Weather'){
         this.$store.state.wea.show=!this.$store.state.wea.show;

        }

      },

    }
  }
</script>

<style scoped lang="less">
header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 10vh;
  background-color: #03a9f4;
  display: flex;

.menu-icon{
flex: 1.5;
  height: 10vh;
  svg{
    width: 10vw;
    height: 10vh;
  position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
  span{
    flex: 7;
    height: 10vh;
    text-align: center;
    line-height: 10vh;
    color: white;
    font-size: x-large;
  }
  .search{
    flex: 1.5;
    height: 10vh;
    svg{
      width: 10vw;
      height: 10vh;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }

  }
}
  .menu{
    position: fixed;
    left: -70vw;
    top: 0;
    width: 70vw;
    height: 100vh;
    background-color: #222629;
    opacity: 0.95;
    transition:transform 1s;
    -moz-transition:transform 1s ; /* Firefox 4 */
    -webkit-transition:transform 1s; /* Safari and Chrome */
    -o-transition:transform 1s; /* Opera */
    z-index: 2;
  .user_info{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #262c30;
    .user_pic{
flex: 7;
      img{
        width: 25vw;
        height:25vw;
        border-radius: 50%;
     position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .username{
      flex: 3;
      text-align: center;
      color: white;

      font-size: larger;
    }
  }
    .menu_list{
      display: flex;
      height: 100%;
      background: #222629;
      flex-direction: column;
      li{

        display: block;

height: 12vw;

        border-bottom:  solid #3c4040;
        padding-left: 3vw;
        a{
          color: #99a3a9;
          &:hover{
     color: #02a9f3;
            .menu_list_icon{
              background-color: #02a9f3;
              color: white;
            }

          }
          .menu_list_icon_active{
            background: #02a9f3!important;
            color: white;
          }
          .menu_list_icon{
    position: relative;
            top: 1vw;
            display: inline-block;
            width: 10vw;
            height:10vw;
            background-color: #373c41;
            border-radius: 50%;

            text-align: center;

            .van-icon{
line-height: 10vw;

            }
          }
          .menu_list_name{
            padding-left: 2vw;
            font-weight: bold;
            font-size: 4vw;line-height: 11vw;

          }
        }
      }
    }

  }
  .routers{
    padding-top: 10vh;
    height: 100%;
  }

</style>
