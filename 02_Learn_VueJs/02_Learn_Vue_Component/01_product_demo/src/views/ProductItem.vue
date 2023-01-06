<template>
  <div class="product">
    <h2>我是商品</h2>
    <p>介绍:限时秒杀,只需9.9</p>
    <p>价格:<span>￥{{price}}</span></p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      price:9.9
    }
  }
}
</script>

<style >
.product{
  padding: 5px 10px;
  
}
.product h2{
    background-color: orange;
  }
  .product span{
    color:red;
  }
</style>