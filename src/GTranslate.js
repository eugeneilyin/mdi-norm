import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGTranslate } from './FilledGTranslate'
import { OutlineGTranslate } from './OutlineGTranslate'
import { RoundGTranslate } from './RoundGTranslate'
import { SharpGTranslate } from './SharpGTranslate'
import { TwoToneGTranslate } from './TwoToneGTranslate'

export const GTranslate = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGTranslate, OutlineGTranslate, RoundGTranslate, SharpGTranslate, TwoToneGTranslate)
