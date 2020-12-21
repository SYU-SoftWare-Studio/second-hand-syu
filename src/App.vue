<template>
  <div id="app">
    <navigator></navigator>  
    <router-view />
  </div>
</template>

<script>
import navigator from "@/components/nav_top.vue"
export default {
  name:"app",
  data(){
    return{
      path:"ws://47.105.168.147:5278",
      socket:""
    }
  },
  mounted(){
    // console.log(typeof(WebSocket));
    if(typeof(WebSocket) == undefined){
      alert("不支持")
    }else{
      console.log("support function");
      this.socket = new WebSocket(this.path)
      this.socket.onopen = this.open
      this.socket.onerror = this.error
      this.socket.onmessage = this.getMessage
    }
  },
  methods:{
    open: function(){
      console.log("connection success");
    },
    error: function(){
      console.log("connection error");
    },
    getMessage: function(msg){
      console.log(msg);
    },
    send: function(){
      let data = "sda"
      this.socket.send(data)
    },
    close:function(){
      console.log("connection shutdown");
    }
  },
  destroyed(){
    this.socket.onclose = this.close
  },
  components:{
    navigator,
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
}
body{
  background-color: #f5f7fa;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 10px;
}
@media screen and (max-width: 800px) {
  #app{
    background-color: darkblue;
    color: white;
  }
}
</style>
