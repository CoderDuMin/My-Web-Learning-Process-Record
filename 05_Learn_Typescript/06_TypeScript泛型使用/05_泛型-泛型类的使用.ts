class Person<Type>{
  constructor(public name:Type,public age:number){

  }
}

const p1:Person<number> = new Person(111,12)

const p2 = new Person<string>('aaa',12)

console.log(p1)
console.log(p2)

export {}