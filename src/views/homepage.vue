<template>
  <div id="app">
    <slider animation="fade" id="slider">
      <slider-item v-for="(i,index) in list" :key="index">
        <img style="width:100%;" :src="i.picUrl">
      </slider-item>
    </slider>
  </div>
  
</template>

 
<script>
export default {
  name:"index",
  data(){
    return{
      index: 0,
      list: [
            {
              'picUrl': 'http://gw.alicdn.com/imgextra/i2/96/O1CN01EiGkvo1Ca0Y6UsSrX_!!96-0-lubanu.jpg',
              'linkUrl': 'https://h5.m.taobao.com/'
            },
            {
              'picUrl': '//gw.alicdn.com/imgextra/i2/98/O1CN01wnOjRj1CavMBMHZlH_!!98-0-lubanu.jpg',
              'linkUrl': 'https://h5.m.taobao.com/'
            },
            {
              'picUrl': '//gw.alicdn.com/imgextra/i2/119/O1CN01KEfIYA1CkXfuwq6nv_!!119-0-lubanu.jpg',
              'linkUrl': 'https://h5.m.taobao.com/'
            },
            {
              'picUrl': '//gw.alicdn.com/imgextra/i3/18/O1CN01QcqcLg1C0HfhL9kEm_!!18-0-lubanu.jpg',
              'linkUrl': 'https://h5.m.taobao.com/'
            }
          ]
    }
  },
}
</script>
<style scoped>
  #app{
    
  }
  #slider{
    width: 100%;
    height: 45vh;
  }
  @media screen and (max-width: 800px;) {
    #slider{
      height: 30vh;
    }
  }
</style>