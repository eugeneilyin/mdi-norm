import { createThemedIcon } from './utils/createThemedIcon'
import { IconBallotFilled } from './IconBallotFilled'
import { IconBallotOutlined } from './IconBallotOutlined'
import { IconBallotRounded } from './IconBallotRounded'
import { IconBallotSharp } from './IconBallotSharp'
import { IconBallotTwoTone } from './IconBallotTwoTone'

export const IconBallot = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBallotFilled, IconBallotOutlined, IconBallotRounded, IconBallotSharp, IconBallotTwoTone)
