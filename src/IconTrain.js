import { createThemedIcon } from './utils/createThemedIcon'
import { IconTrainFilled } from './IconTrainFilled'
import { IconTrainOutlined } from './IconTrainOutlined'
import { IconTrainRounded } from './IconTrainRounded'
import { IconTrainSharp } from './IconTrainSharp'
import { IconTrainTwoTone } from './IconTrainTwoTone'

export const IconTrain = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTrainFilled, IconTrainOutlined, IconTrainRounded, IconTrainSharp, IconTrainTwoTone)
