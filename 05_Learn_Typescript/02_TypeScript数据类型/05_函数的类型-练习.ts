
type LyricType = {
  time:string,
  text:string
}

function getLyric(lyric:string):LyricType[]{
  let lyricArr:LyricType[] = []

  lyric.split('\n').map(item => {
    let res = item.split('-')
    lyricArr.push({time:res[0],text:res[1]})
  })

  return lyricArr
}

console.log(getLyric("01:23-我真的爱你\n01:25-句句不轻易\n01:36-眼神中飘移"))