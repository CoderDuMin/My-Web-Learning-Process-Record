type IKun = "sing" | "dance" | "rap"

// 确实keys一定是可以作为key的联合类型
type DMExtract<T,K> = T extends K ? T : never
// IKun都变成可选的
type IKuns = Extract<IKun, "rap"|"dance">
type IKuns2 = DMExtract<IKun, "rap"|"jump"|"sing">


export {}
