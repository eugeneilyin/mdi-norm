import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStayPrimaryPortrait } from './FilledStayPrimaryPortrait'
import { OutlineStayPrimaryPortrait } from './OutlineStayPrimaryPortrait'
import { RoundStayPrimaryPortrait } from './RoundStayPrimaryPortrait'
import { SharpStayPrimaryPortrait } from './SharpStayPrimaryPortrait'
import { TwoToneStayPrimaryPortrait } from './TwoToneStayPrimaryPortrait'

export const StayPrimaryPortrait = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStayPrimaryPortrait, OutlineStayPrimaryPortrait, RoundStayPrimaryPortrait, SharpStayPrimaryPortrait, TwoToneStayPrimaryPortrait)
