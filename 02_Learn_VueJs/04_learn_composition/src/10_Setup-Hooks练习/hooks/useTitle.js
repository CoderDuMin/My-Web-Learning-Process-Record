import { ref, watch } from "vue";

export function useTitle(name){
  const title = ref(name)
  watch(title,(newValue,oldValue) => {
    document.title = newValue
  },{
    immediate:true
  })

  return title
}