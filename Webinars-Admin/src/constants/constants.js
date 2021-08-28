export const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

export const englishNumbersFinder = [
  /0/g,
  /1/g,
  /2/g,
  /3/g,
  /4/g,
  /5/g,
  /6/g,
  /7/g,
  /8/g,
  /9/g,
]

export const contentTypeArray = [
  { value: 'article', title: 'مقاله' },
  { value: 'wiki', title: 'ویکی' },
  { value: 'news', title: 'اخبار' },
  { value: 'interview', title: 'مصاحبه' },
  { value: 'conference', title: 'همایش' },
  { value: 'clip', title: 'فیلم' },
]

export const contentTypeMapper = {
  article: 'مقاله',
  wiki: 'ویکی',
  news: 'اخبار',
  interview: 'مصاحبه',
  conference: 'همایش',
  clip: 'فیلم',
}

export const statusMapper = {
  NEW: 'جدید',
  ACCEPTED: 'تایید شده',
  REJECTED: 'رد شده',
}
