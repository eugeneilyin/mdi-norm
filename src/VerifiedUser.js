import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVerifiedUser } from './FilledVerifiedUser'
import { OutlineVerifiedUser } from './OutlineVerifiedUser'
import { RoundVerifiedUser } from './RoundVerifiedUser'
import { SharpVerifiedUser } from './SharpVerifiedUser'
import { TwoToneVerifiedUser } from './TwoToneVerifiedUser'

export const VerifiedUser = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVerifiedUser, OutlineVerifiedUser, RoundVerifiedUser, SharpVerifiedUser, TwoToneVerifiedUser)
