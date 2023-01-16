export default {
  data(){
    return {
      message:'hello world'
    }
  },
  created(){
    console.log("created:" + this.message)
    },
}