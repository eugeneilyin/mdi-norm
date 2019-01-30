import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSpellcheck } from './FilledSpellcheck'
import { OutlineSpellcheck } from './OutlineSpellcheck'
import { RoundSpellcheck } from './RoundSpellcheck'
import { SharpSpellcheck } from './SharpSpellcheck'
import { TwoToneSpellcheck } from './TwoToneSpellcheck'

export const Spellcheck = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSpellcheck, OutlineSpellcheck, RoundSpellcheck, SharpSpellcheck, TwoToneSpellcheck)
