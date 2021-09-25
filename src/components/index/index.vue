<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <p>组件案例</p>
      <button @click="test1">自定义弹框</button>
      <button @click="test2">自带飘窗</button>
    </div>

    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to My Vue.js App"
    };
  },
  created: function() {
    // this.$http.get('getChannelStat?channel_name=&page=1&token=2and1543992763').then(res => {
    //   console.log(res.data)
    // }).catch(err => {
    //   console.log(err)
    // })

    // const user_id = this.$route.params.id
    // this.getUser(user_id)
  },

  // beforeRouteUpdate 导航守卫
  // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  // }
  // 当 id 变化后重新加载数据（二级导航才生效）
  beforeRouteUpdate (to, from, next) {
    // this.getUser(to.params.id)
    // next()
  },

  methods: {
    test1() {
      this.$dialog("弹框测试", true);

      // this.$store.commit('getShowDialog',{
      //   showDialog: true,
      //   oTtext:'111',
      // })
    },
    test2() {
      this.$toasted.show("飘窗案例，内容-消失时间等自定义");
      // this.$toasted.show("hello,toast",{duration:3000})
      // this.$toasted.show("hello,toast",function(){
      //     alert(1)
      // })
    },

    // getUser (id) {
    //   const path = `/users/${id}`
    //   this.$axios.get(path)
    //     .then((response) => {
    //       this.user = response.data
    //     })
    //     .catch((error) => {
    //       // eslint-disable-next-line
    //       console.error(error)
    //     });
    // }
  }
};
</script>


<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
