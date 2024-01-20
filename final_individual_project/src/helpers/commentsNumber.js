export const commentsNumber = (num) => {
  const string = num?.toString()
  const lastChar = string?.charAt(string.length - 1)
  let result
  if (num === 0) {
    result = 'Отзывов пока нет'
  } else if (lastChar === '1' && !(num === 11)) {
    result = num + ' отзыв'
  } else if (lastChar === '2' && !(num === 12)) {
    result = num + ' отзыва'
  } else if (lastChar === '3' && !(num === 13)) {
    result = num + ' отзыва'
  } else if (lastChar === '4' && !(num === 14)) {
    result = num + ' отзыва'
  } else {
    result = num + ' отзывов'
  }
  return result
}
