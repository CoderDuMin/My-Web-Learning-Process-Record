interface IPerson{
  name:string,
  age:number
}

interface IFool{
  stupid:() => void
}

class Fooler implements IPerson,IFool{
  constructor(public name:string,public age:number){

  }
  stupid(){
    console.log('i am stupid')
  }
}


const f1 = new Fooler('aa',16)
const f2 = new Fooler('bb',18)
const f3 = new Fooler('cc',16)

f2.stupid()

export {}