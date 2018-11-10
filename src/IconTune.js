import { createThemedIcon } from './utils/createThemedIcon'
import { IconTuneFilled } from './IconTuneFilled'
import { IconTuneOutlined } from './IconTuneOutlined'
import { IconTuneRounded } from './IconTuneRounded'
import { IconTuneSharp } from './IconTuneSharp'
import { IconTuneTwoTone } from './IconTuneTwoTone'

export const IconTune = /*#__PURE__*/ props =>
  createThemedIcon(props, IconTuneFilled, IconTuneOutlined, IconTuneRounded, IconTuneSharp, IconTuneTwoTone)
