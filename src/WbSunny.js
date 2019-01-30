import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWbSunny } from './FilledWbSunny'
import { OutlineWbSunny } from './OutlineWbSunny'
import { RoundWbSunny } from './RoundWbSunny'
import { SharpWbSunny } from './SharpWbSunny'
import { TwoToneWbSunny } from './TwoToneWbSunny'

export const WbSunny = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWbSunny, OutlineWbSunny, RoundWbSunny, SharpWbSunny, TwoToneWbSunny)
