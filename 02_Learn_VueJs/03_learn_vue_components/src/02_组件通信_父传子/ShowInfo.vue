<template>
  <div class="info-item">
    <h3>项目名:{{name}}</h3>
    <p>项目简介:{{intro}}</p>
    <p>项目区域:{{area}}</p>
    <p>项目人员数:{{num}}</p>
    <p>创建时间:{{gmt}}</p>
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      default:'默认项目'
    },
    intro:{
      type:String,
      default:'项目的默认描述'
    },
    num:{
      type:Number,
      default:10
    },
    gmt:{
      type:String,
      default:'2022-12-05'
    },
    area:{
      type:Array,
      default(){
        return ['福州市','厦门市']
      }
    }
  }
}
</script>

<style scoped>
.info-item{
  padding: 10px;
  margin: 10px;
  border:1px solid #eee;
  border-radius: 5px;
  background-color: #f5f5f5;
}
</style>