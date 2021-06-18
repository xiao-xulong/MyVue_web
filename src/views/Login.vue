<template>
    <div class="ori">
      <header>
        <div class="peo-icon-box">
      <svg t="1623205421920" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2881" width="200" height="200"><path d="M510.639003 130.983193c-121.685433 0-220.673935 98.992595-220.673935 220.678028 0 88.12406 52.040237 164.125011 126.894062 199.468984C278.472316 591.770811 177.053462 719.715809 177.053462 871.073028c0 9.633405 7.806803 17.432021 17.432021 17.432021 9.625218 0 17.432021-7.798617 17.432021-17.432021 0-164.720575 134.021389-298.733778 298.721499-298.733778 121.685433 0 220.683145-98.992595 220.683145-220.678028S632.324436 130.983193 510.639003 130.983193L510.639003 130.983193zM510.639003 537.475208c-102.462626 0-185.809893-83.359546-185.809893-185.813986 0-102.458533 83.347267-185.813986 185.809893-185.813986 102.46672 0 185.818079 83.355453 185.818079 185.813986C696.457082 454.119755 613.109816 537.475208 510.639003 537.475208L510.639003 537.475208zM510.639003 537.475208" p-id="2882" fill="#1296db"></path><path d="M712.986547 605.824899c-7.66354-5.840008-18.591427-4.393054-24.428366 3.269463-5.855358 7.659447-4.393054 18.587334 3.266393 24.443715 74.701352 57.081043 117.531833 143.66298 117.531833 237.530858 0 9.637498 7.810896 17.436114 17.433044 17.436114 9.633405 0 17.432021-7.798617 17.432021-17.436114C844.221474 766.240425 796.386002 669.561525 712.986547 605.824899L712.986547 605.824899zM712.986547 605.824899" p-id="2883" fill="#1296db"></path></svg>
      </div>
      </header>
      <nav>
        <van-form @submit="onSubmit" class="van-form">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />

            <van-button
              class="van-button"
              block type="info" native-type="submit">登录</van-button>

        </van-form>
      </nav>
    </div>
</template>

<script>

  export default {
    name: 'Login',
    data(){
      return{
        username: '',
        password: '',
      }
    },
    methods:{
      onSubmit(){
this.$store.state.username=this.username;
window.sessionStorage.setItem('token','pG70XSoRwSkGQPQm')
this.$router.push('/Home')

      }
    }
  }

</script>

<style scoped lang="less">
.ori{
  width: 100%;
  height: 100%;
  background-color: #2993f9;
}
  header{
    width: 100%;
    height: 25vh;

    .peo-icon-box{
      position: relative;
     left: 50%;top: 50%;
      transform: translate(-50%,-50%);
      width: 15vh;
      height: 15vh;
      border-radius: 20px;
      background: #ffffff;
      svg{
        width: 10vh;
        height: 10vh;
        position: relative;
        left: 50%;top: 50%;
        transform: translate(-50%,-50%);
      }
    }

  }
  nav{
    .van-form{
      padding:0 5vw;
      .van-button{
        background-color: #5cbffa;
        width: 100%;
        margin-top: 10vh;
      }
    }
  }

</style>
