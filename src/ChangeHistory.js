import { createThemedIcon } from './utils/createThemedIcon'
import { FilledChangeHistory } from './FilledChangeHistory'
import { OutlineChangeHistory } from './OutlineChangeHistory'
import { RoundChangeHistory } from './RoundChangeHistory'
import { SharpChangeHistory } from './SharpChangeHistory'
import { TwoToneChangeHistory } from './TwoToneChangeHistory'

export const ChangeHistory = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledChangeHistory, OutlineChangeHistory, RoundChangeHistory, SharpChangeHistory, TwoToneChangeHistory)
