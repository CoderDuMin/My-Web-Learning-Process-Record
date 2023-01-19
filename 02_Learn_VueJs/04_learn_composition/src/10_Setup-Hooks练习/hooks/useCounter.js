import { ref, onMounted } from 'vue'

export function useCounter(){
  const counter = ref(0)
  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }
  onMounted(()=>{
    setTimeout(() => {
      counter.value = 100
    }, 1000);
  })

  return {
    counter,
    increment,
    decrement
  }
}