export default function directiveUnit(app){
  app.directive('unit',{
    mounted(el,bindings){
      let unit = bindings.value
      if(!unit){
        unit = '¥'
      }
      el.textContent = unit + el.textContent
    }
  })
}