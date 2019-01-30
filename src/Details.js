import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDetails } from './FilledDetails'
import { OutlineDetails } from './OutlineDetails'
import { RoundDetails } from './RoundDetails'
import { SharpDetails } from './SharpDetails'
import { TwoToneDetails } from './TwoToneDetails'

export const Details = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDetails, OutlineDetails, RoundDetails, SharpDetails, TwoToneDetails)
