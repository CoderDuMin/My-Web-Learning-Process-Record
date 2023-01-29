import dayjs from "dayjs"
export default function directiveTime(app){
  app.directive('ftime',{
    mounted(el,binding){
      let format = binding.value || 'YYYY-MM-DD '
      let timestamp = el.textContent
      if(timestamp.length === 10){
        timestamp = timestamp * 1000
      }
      timestamp = Number(timestamp)
      el.textContent = dayjs(timestamp).format(format)
    }
  })
}