import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTextsms } from './FilledTextsms'
import { OutlineTextsms } from './OutlineTextsms'
import { RoundTextsms } from './RoundTextsms'
import { SharpTextsms } from './SharpTextsms'
import { TwoToneTextsms } from './TwoToneTextsms'

export const Textsms = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTextsms, OutlineTextsms, RoundTextsms, SharpTextsms, TwoToneTextsms)
