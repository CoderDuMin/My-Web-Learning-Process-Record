
type IDType = string | number 

type toArray<T> = T extends any ? T[] : never


type stringArr = toArray<string>//string[]
type numberArr = toArray<number>//number[]
type mutilArr = toArray<number|string> // string[] | number[]

export {}