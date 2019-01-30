import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVideocamOff } from './FilledVideocamOff'
import { OutlineVideocamOff } from './OutlineVideocamOff'
import { RoundVideocamOff } from './RoundVideocamOff'
import { SharpVideocamOff } from './SharpVideocamOff'
import { TwoToneVideocamOff } from './TwoToneVideocamOff'

export const VideocamOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVideocamOff, OutlineVideocamOff, RoundVideocamOff, SharpVideocamOff, TwoToneVideocamOff)
