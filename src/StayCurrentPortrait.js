import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStayCurrentPortrait } from './FilledStayCurrentPortrait'
import { OutlineStayCurrentPortrait } from './OutlineStayCurrentPortrait'
import { RoundStayCurrentPortrait } from './RoundStayCurrentPortrait'
import { SharpStayCurrentPortrait } from './SharpStayCurrentPortrait'
import { TwoToneStayCurrentPortrait } from './TwoToneStayCurrentPortrait'

export const StayCurrentPortrait = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStayCurrentPortrait, OutlineStayCurrentPortrait, RoundStayCurrentPortrait, SharpStayCurrentPortrait, TwoToneStayCurrentPortrait)
