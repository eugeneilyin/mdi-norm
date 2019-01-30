import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStayPrimaryLandscape } from './FilledStayPrimaryLandscape'
import { OutlineStayPrimaryLandscape } from './OutlineStayPrimaryLandscape'
import { RoundStayPrimaryLandscape } from './RoundStayPrimaryLandscape'
import { SharpStayPrimaryLandscape } from './SharpStayPrimaryLandscape'
import { TwoToneStayPrimaryLandscape } from './TwoToneStayPrimaryLandscape'

export const StayPrimaryLandscape = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStayPrimaryLandscape, OutlineStayPrimaryLandscape, RoundStayPrimaryLandscape, SharpStayPrimaryLandscape, TwoToneStayPrimaryLandscape)
