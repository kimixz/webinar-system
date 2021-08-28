import {
  englishNumbers,
  persianNumbers,
  arabicNumbers,
  englishNumbersFinder,
  persianNumbersFinder,
  arabicNumbersFinder,
} from 'constants/constants'

const tiers = [{ id: 1, tier: "نقره‌ای" }, { id: 2, tier: "طلایی" }, { id: 3, tier: "برنز" }, { id: 4, tier: "پلاتین" }]

const types = [{ id: 1, type: "لایو" }, { id: 2, type: "ضبط شده" }]

export const toEnDigit = value => {
  let result = value
  for (let i = 0; i < 10; i += 1) {
    result = result
      .toString()
      .replace(persianNumbersFinder[i], englishNumbers[i])
      .replace(arabicNumbersFinder[i], englishNumbers[i])
  }
  return result
}

export const toFaDigit = value => {
  let result = value
  for (let i = 0; i < 10; i += 1) {
    result = result
      .toString()
      .replace(englishNumbersFinder[i], persianNumbers[i])
      .replace(arabicNumbersFinder[i], persianNumbers[i])
  }
  return result
}

export const toArDigit = value => {
  let result = value
  for (let i = 0; i < 10; i += 1) {
    result = result
      .toString()
      .replace(englishNumbersFinder[i], arabicNumbers[i])
      .replace(persianNumbersFinder[i], arabicNumbers[i])
  }
  return result
}

export const getWebinarTiers = () => tiers
export const getWebinarTier = (id) => tiers.find(tier => tier.id === parseInt(id, 10)).tier

export const getWebinarTypes = () => types

export const getWebinarType = (id) => types.find(type => type.id === parseInt(id, 10)).type