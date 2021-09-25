<template>
  <div>
    <h1>{{msg}}</h1>
    <input type="text" name="userName" v-model="username"/>
    <input type="password" name="passWord" v-model="password"/>
    <button @click="getLogin">login</button>
  </div>
</template>

<script>
export default {
  // name:'登录',
  data(){
    return{
      msg:'welcom login',
      username:'admin',
      password:'123456',
    }
  },
  methods:{
    getLogin(){
      let username = this.username;
      let password = this.password;

      if(username==''&&password==''){
        this.$toasted.show("用户名和密码不为空");
        return
      }

      sessionStorage.setItem('username', 'xiaomi');
      window.location.href = '/'
    }
  }
}
</script>
