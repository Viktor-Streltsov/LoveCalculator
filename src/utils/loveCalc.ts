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

  // Спецусловие: одна дата — 23.02 (год не важен),
  // вторая — любой день с 01.12 по 25.12 (год не важен) — всегда 100%
  const getDayMonth = (value: string): { day: number; month: number } | null => {
    // Формат из <input type="date"> — YYYY-MM-DD
    const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (isoMatch) {
      const [, , mm, dd] = isoMatch
      return { day: Number(dd), month: Number(mm) }
    }
    // Формат DD.MM.YYYY
    const dotMatch = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)
    if (dotMatch) {
      const [, dd, mm] = dotMatch
      return { day: Number(dd), month: Number(mm) }
    }
    return null
  }

  const isFeb23 = (dm: { day: number; month: number } | null) =>
      !!dm && dm.month === 2 && dm.day === 23

  const isDecRange = (dm: { day: number; month: number } | null) =>
      !!dm && dm.month === 12 && dm.day >= 1 && dm.day <= 25

  const aDm = getDayMonth(a)
  const bDm = getDayMonth(b)

  if ((isFeb23(aDm) && isDecRange(bDm)) || (isDecRange(aDm) && isFeb23(bDm))) {
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