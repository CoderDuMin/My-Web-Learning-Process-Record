function getMoreWordFormArticle(article = '') {
  if (!article) return;
  let maxNum = 0
  let maxWord = ''
  let wordList = article.trim().toLowerCase().match(/[a-z]+/g)
  let box = []
  wordList.forEach((word) => {
    if (box.indexOf(word) != -1) {
      box.push(word)
    }
    const num = wordList.filter(item => item === word).length
    if (num > maxNum) {
      maxNum = num
      maxWord = word
    }
  })
  return maxWord
}
const article = "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting librariesIf you d like to learn more about Vue before diving in we created a video walking through the core principles and a sample project If you are an experienced frontend developer and want to know how Vue compares to other libraries/frameworks, checkout the Comparison with Other Frameworks"
const words = getMoreWordFormArticle(article)
console.log(words);

const art2 = 'my name is goodman , my age old ,but my '
const words2 = getMoreWordFormArticle(art2)
console.log(words2)