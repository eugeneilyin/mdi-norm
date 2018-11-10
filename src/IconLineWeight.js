import { createThemedIcon } from './utils/createThemedIcon'
import { IconLineWeightFilled } from './IconLineWeightFilled'
import { IconLineWeightOutlined } from './IconLineWeightOutlined'
import { IconLineWeightRounded } from './IconLineWeightRounded'
import { IconLineWeightSharp } from './IconLineWeightSharp'
import { IconLineWeightTwoTone } from './IconLineWeightTwoTone'

export const IconLineWeight = /*#__PURE__*/ props =>
  createThemedIcon(props, IconLineWeightFilled, IconLineWeightOutlined, IconLineWeightRounded, IconLineWeightSharp, IconLineWeightTwoTone)
