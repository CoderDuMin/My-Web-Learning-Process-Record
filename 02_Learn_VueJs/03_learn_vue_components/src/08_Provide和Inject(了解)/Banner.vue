<template>
  <h3>这里是banner组件,姓名{{ name }},年龄{{age}}</h3>
</template>

<script>
export default {
  inject:['name','age']
}
</script>