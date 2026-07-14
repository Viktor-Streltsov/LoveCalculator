export function calcNameLovePercent(firstName: string, secondName: string): number {
  const normalize = (value: unknown) =>
      (value ?? '')
          .toString()
          .trim()
          .toLowerCase()

  const a = normalize(firstName)
  const b = normalize(secondName)

  if (!a || !b) return 0

  // Спецусловие: Назира + Виктор (в любом порядке) — всегда 100%
  const specialNames = ['назира', 'виктор']
  if (specialNames.includes(a) && specialNames.includes(b) && a !== b) {
    return 100
  }

  const combined = `${a}|${b}`
  let sum = 0

  for (let i = 0; i < combined.length; i += 1) {
    const code = combined.charCodeAt(i)
    sum += code * (i + 7)
  }

  const percent = sum % 101
  return percent
}

export function calcDateLovePercent(firstDate: string, secondDate: string): number {
  const normalize = (value: string) => value.trim()

  const a = normalize(firstDate)
  const b = normalize(secondDate)

  if (!a || !b) return 0

  // Спецусловие: 23.02.1997 + 22.02.1999 (в любом порядке, поддержка форматов YYYY-MM-DD и DD.MM.YYYY) — всегда 100%
  const toDdMmYyyy = (value: string) => {
    // Формат из <input type="date"> — YYYY-MM-DD
    const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (isoMatch) {
      const [, yyyy, mm, dd] = isoMatch
      return `${dd}.${mm}.${yyyy}`
    }
    return value
  }

  const specialDates = ['23.02.1997', '22.02.1999']
  const aNorm = toDdMmYyyy(a)
  const bNorm = toDdMmYyyy(b)

  if (specialDates.includes(aNorm) && specialDates.includes(bNorm) && aNorm !== bNorm) {
    return 100
  }

  const combined = `${a}|${b}`
  let sum = 0

  for (let i = 0; i < combined.length; i += 1) {
    const code = combined.charCodeAt(i)
    sum += code * (i + 5)
  }

  const percent = sum % 101
  return percent
}

export default calcNameLovePercent