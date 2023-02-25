import {faker} from '@faker-js/faker'
const names = Array(10000)

for(let i = 0 ;i<10000;i++){
  names[i] = faker.internet.userName()
}
console.log(names);

export default names