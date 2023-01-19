import { ref } from 'vue'

export function useScrollPosition(){
  const scrollX = ref(0)
  const scrollY = ref(0)
  window.addEventListener('scroll',()=>{
    scrollX.value = window.scrollX
    scrollY.value = window.scrollY
  })
  return {
    scrollX,
    scrollY
  }
}