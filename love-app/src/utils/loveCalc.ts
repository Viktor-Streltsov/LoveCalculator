export function calcNameLovePercent(firstName: string, secondName: string): number {
  const normalize = (value: unknown) =>
    (value ?? '')
      .toString()
      .trim()
      .toLowerCase()

  const a = normalize(firstName)
  const b = normalize(secondName)

  if (!a || !b) return 0

  const combined = `${a}|${b}`
  let sum = 0

  for (let i = 0; i < combined.length; i += 1) {
    const code = combined.charCodeAt(i)
    sum += code * (i + 7)
  }

  const percent = sum % 101
  return percent
}

export default calcNameLovePercent

