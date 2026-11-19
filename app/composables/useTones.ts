// Shades of green used by AppButton, StudentCard and the page decorations.
export const TONES: Record<string, { bg: string; fg: string }> = {
  forest: { bg: '#3b5220', fg: '#fffdf3' },
  moss:   { bg: '#5f7d2e', fg: '#fffdf3' },
  olive:  { bg: '#7a9a3f', fg: '#fffdf3' },
  lime:   { bg: '#a9c46c', fg: '#2c3a17' },
  sage:   { bg: '#cfe0a3', fg: '#2c3a17' },
  mint:   { bg: '#e6efc9', fg: '#2c3a17' }
}

// Accepts a tone name ("moss") or any CSS color ("#5f7d2e").
export const toneOf = (color?: string) => {
  if (!color) return TONES.moss!
  return TONES[color] ?? { bg: color, fg: '#fffdf3' }
}
