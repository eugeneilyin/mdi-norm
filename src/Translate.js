import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTranslate } from './FilledTranslate'
import { OutlineTranslate } from './OutlineTranslate'
import { RoundTranslate } from './RoundTranslate'
import { SharpTranslate } from './SharpTranslate'
import { TwoToneTranslate } from './TwoToneTranslate'

export const Translate = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTranslate, OutlineTranslate, RoundTranslate, SharpTranslate, TwoToneTranslate)
