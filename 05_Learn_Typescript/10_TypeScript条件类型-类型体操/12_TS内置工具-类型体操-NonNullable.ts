type IKun = "sing" | "dance" | "rap" | null | undefined

// 确实keys一定是可以作为key的联合类型

type DMNonNullable<T> = T extends null|undefined ? never : T 

// IKun都变成可选的
type IKuns = NonNullable<IKun>
type IKuns2 = DMNonNullable<IKun>

export {}
