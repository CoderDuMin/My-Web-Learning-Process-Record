class Person {
  constructor(public name:string,readonly age:number){
    this.name = name
    this.age = age
  }

  eating(){
    console.log(this.name+' is eating')
  }
  say(){
    console.log(`i am ${this.name}, i have ${this.age}`)
  }
}


const p1 = new Person('dumin',16)
console.log(p1)
p1.eating()

const p2 = new Person('yihamin',18)
console.log(p2)
p2.eating()

export {}
