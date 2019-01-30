import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLanguage } from './FilledLanguage'
import { OutlineLanguage } from './OutlineLanguage'
import { RoundLanguage } from './RoundLanguage'
import { SharpLanguage } from './SharpLanguage'
import { TwoToneLanguage } from './TwoToneLanguage'

export const Language = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLanguage, OutlineLanguage, RoundLanguage, SharpLanguage, TwoToneLanguage)
