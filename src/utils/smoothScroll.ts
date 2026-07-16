// Luxury ease: cubic-bezier(0.19, 1, 0.22, 1) — matches --ease-luxury CSS var
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function smoothScrollTo(targetY: number, duration = 1100): void {
  const startY = window.scrollY
  const distance = targetY - startY
  if (Math.abs(distance) < 2) return

  const startTime = performance.now()

  function step(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutExpo(progress)
    window.scrollTo(0, startY + distance * eased)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function smoothScrollToElement(id: string, offset = 0, duration = 1100): void {
  const el = document.getElementById(id)
  if (!el) return
  const rect = el.getBoundingClientRect()
  const targetY = window.scrollY + rect.top + offset
  smoothScrollTo(targetY, duration)
}

export function smoothScrollTop(duration = 1100): void {
  smoothScrollTo(0, duration)
}
