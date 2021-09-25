<template>
  <div class="dialog" v-if="showDialog">
    <div class="dialog-shadow"></div>
    <div class="dialog-cont">
      <div class="dia-main">
        <div class="dia-close divFlex" @click="closeDialog">X</div>
        <div class="dia-title divFlex">温馨提示</div>
        <div class="dia-cont divFlex" v-html="oTtext"></div>
        <div class="dia-btn divFlex">
            <button class="btn" @click="getBtn">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // showDialog: false
    };
  },
  computed: {
    showDialog() {
      return this.$store.state.showDialog
    },
    oTtext(){
      return this.$store.state.oTtext
    }
  },
  methods: {
    closeDialog() {
      let obj = {
        showDialog: false,
        oTtext:'',
      }
      this.$store.dispatch('getShowDialog', obj)
    },
    getBtn(){
      let obj = {
        showDialog: false,
        oTtext:'',
      }
      this.$store.dispatch('getShowDialog', obj)
    }
  }
};
</script>

<style>
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog-cont {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-cont .dia-main {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 30%;
  border-radius: 1rem;
  transform: translate(-50%, -50%);

  background-color: #ffffff;
  color: blue;
  overflow-y: auto;
}
.dialog-cont .dia-main .divFlex{
    display: flex;
    justify-content: center;
    align-items: center;
}
.dialog-cont .dia-main .dia-close {
    position: absolute;
    top: 1%;
    right: 1%;
    width: 10%;
    height: 10%;
    color:#000;
        background-color: #cecece;
    border-radius: 2rem;
}
.dialog-cont .dia-main .dia-title {
    position: absolute;
    top: 4%;
    left: 15%;
    width: 70%;
    height: 10%;
    color: #333333;
}
.dialog-cont .dia-main .dia-cont {
    position: absolute;
    top: 14%;
    left: 2%;
    width: 96%;
    height: 66%;
}
.dialog-cont .dia-main .dia-btn {
    position: absolute;
    top: 80%;
    left: 2%;
    width: 96%;
    height: 20%;
}
.dialog-cont .dia-main .dia-btn .btn{
    margin: 0 2%;
    font-size: 15px;
  }
</style>
