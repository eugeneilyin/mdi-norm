import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEuroSymbol } from './FilledEuroSymbol'
import { OutlineEuroSymbol } from './OutlineEuroSymbol'
import { RoundEuroSymbol } from './RoundEuroSymbol'
import { SharpEuroSymbol } from './SharpEuroSymbol'
import { TwoToneEuroSymbol } from './TwoToneEuroSymbol'

export const EuroSymbol = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEuroSymbol, OutlineEuroSymbol, RoundEuroSymbol, SharpEuroSymbol, TwoToneEuroSymbol)
