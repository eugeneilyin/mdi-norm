import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWbCloudy } from './FilledWbCloudy'
import { OutlineWbCloudy } from './OutlineWbCloudy'
import { RoundWbCloudy } from './RoundWbCloudy'
import { SharpWbCloudy } from './SharpWbCloudy'
import { TwoToneWbCloudy } from './TwoToneWbCloudy'

export const WbCloudy = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWbCloudy, OutlineWbCloudy, RoundWbCloudy, SharpWbCloudy, TwoToneWbCloudy)
