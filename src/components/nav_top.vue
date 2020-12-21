<template>
  <div class="ls-navigator">
    <a v-for="item in navigator" :key="item.index" :class="['ls-navigator-items',item.class]" @click="changeNavi(item.id)">
      <i :class="item.iconClass"></i>
      <a>{{item.name}}</a>
    </a>
  </div>
</template>
<script>
export default {
  name:"navigator",
  data: function(){
    return{
      navigator:[
        {id:0,name:"二手交易",url:"",class:"select",iconClass:"el-icon-goods"},
        {id:1,name:"交友天地",url:"",class:"unselect",iconClass:"el-icon-mobile"},
        {id:2,name:"失物招领",url:"",class:"unselect",iconClass:"el-icon-guide"},
        {id:3,name:"沈大怪谈",url:"",class:"unselect",iconClass:"el-icon-chat-dot-square"},
        {id:4,name:"个人页面",url:"",class:"unselect",iconClass:"el-icon-discount"}
      ],
      target:0,
    }
  },
  methods:{
    changeNavi(e){
      this.navigator[this.target].class = "unselect"
      this.target = e
      this.navigator[this.target].class = "select"
    }
  }
}
</script>
<style scoped>
.ls-navigator{
  background-color: rgba(255, 255, 255, 0.501);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
}
.ls-navigator:hover{
  background-color: rgba(255, 255, 255, 0.938);
}
.ls-navigator > .ls-navigator-items{
  display: inline-block;
  height: 50px;
  line-height: 50px;
  max-width: 200px;
  width: 15%;
  cursor: pointer;
  text-align: center;
  user-select: none;
  font-size: 1rem;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
.ls-navigator > .ls-navigator-items > a{
  display: inline;
  margin-left: 6px;
}
.ls-navigator > .select{
  color: #67C23A;
}
.ls-navigator > .ls-navigator-items:hover{
  color: #67C23A;
}
@media screen and (max-width: 800px) {
  .ls-navigator{
    all:initial; 
    text-align: center;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    width:100%;
    display: block;
    position: fixed;
    bottom: 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    overflow: hidden;
  }
  .ls-navigator:hover{
    background-color: white;
  }
  .ls-navigator > .ls-navigator-items{
    width: 20%;
    height: 70px;
    line-height: 70px;
    font-size: 1.3rem;
  }
  .ls-navigator > .ls-navigator-items > a{
    display: none;
  }
}
</style>