/**
 * Indian-locale currency formatter (Cr / L / K abbreviations).
 * Mirrors the simulator math in the reference preview.
 */
export function formatRupees(rupees: number, sign = false): string {
  const s = rupees < 0 ? '−' : sign ? '+' : ''
  const a = Math.abs(rupees)
  const trim = (n: number) => n.toFixed(2).replace(/\.?0+$/, '')

  let body: string
  if (a >= 1e7) body = trim(a / 1e7) + ' Cr'
  else if (a >= 1e5) body = trim(a / 1e5) + 'L'
  else if (a >= 1e3) body = trim(a / 1e3) + 'K'
  else body = trim(a)

  return s + '₹' + body
}
