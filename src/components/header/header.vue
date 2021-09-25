<template>
  <div>
    <router-link class="logo" to="/"></router-link>
    <ul>
      <li>
        <a>
          <router-link to="/">home</router-link>
        </a>
      </li>
      <li>
        <a>
          <router-link to="/HelloWorld">HelloWorld</router-link>
        </a>
      </li>
 
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 200px;
  height: 200px;
  display: block;
  margin: auto;
  background: url("./../../assets/logo.png");
  background-size: 100% 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
