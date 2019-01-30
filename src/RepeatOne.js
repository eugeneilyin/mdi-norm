import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRepeatOne } from './FilledRepeatOne'
import { OutlineRepeatOne } from './OutlineRepeatOne'
import { RoundRepeatOne } from './RoundRepeatOne'
import { SharpRepeatOne } from './SharpRepeatOne'
import { TwoToneRepeatOne } from './TwoToneRepeatOne'

export const RepeatOne = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRepeatOne, OutlineRepeatOne, RoundRepeatOne, SharpRepeatOne, TwoToneRepeatOne)
