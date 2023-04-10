type IKun = "sing" | "dance" | "rap"

// 确实keys一定是可以作为key的联合类型
type DMExclude<T,K> = T extends K ? never : T  

// IKun都变成可选的
type IKuns = Exclude<IKun, "rap">
type IKuns2 = DMExclude<IKun, "rap">


export {}
