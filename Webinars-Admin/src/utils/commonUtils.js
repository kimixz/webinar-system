import { persianNumbers, englishNumbersFinder } from 'constants/constants'
import jMoment from 'moment-jalaali'

const tiers = [{ id: 1, tier: "نقره‌ای" }, { id: 2, tier: "طلایی" }, { id: 3, tier: "برنز" }, { id: 4, tier: "پلاتین" }]

const types = [{ id: 1, type: "لایو" }, { id: 2, type: "ضبط شده" }]

export const toFaDigit = value => {
  let result = value
  for (let i = 0; i < 10; i += 1) {
    result = result
      .toString()
      .replace(englishNumbersFinder[i], persianNumbers[i])
  }
  return result
}

export const getAdmin = authToken => {
  if (authToken) {
    const payload = authToken.split('.')[1]
    return JSON.parse(window.atob(payload))
  }
  return {}
}

export const getWebinarTiers = () => {
  return tiers
}
export const getWebinarTier = (id) => {
  return tiers.find(tier => tier.id === parseInt(id, 10)).tier
}

export const getWebinarTypes = () => {
  return types
}

export const getWebinarType = (id) => {
  return types.find(type => type.id === parseInt(id, 10)).type
}


export const convertToJalali = time => {
  jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true })
  return jMoment(time).format('jYYYY/jM/jD')
}
export const convertToJalaliWithTime = time => {
  jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true })
  return jMoment(time).format('HH:mm - jYYYY/jMM/jDD ')
}

export const getAdminLevels = () => {
  return [
    { value: 'FULL', title: 'سطح دسترسی کامل' },
    { value: 'LIVE', title: 'سطح دسترسی لایو' },
    { value: 'CONTENT', title: 'سطح دسترسی محتوا' },
    { value: 'PRODUCT', title: 'سطح دسترسی محصولات' },
  ]
}
