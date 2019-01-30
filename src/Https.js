import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHttps } from './FilledHttps'
import { OutlineHttps } from './OutlineHttps'
import { RoundHttps } from './RoundHttps'
import { SharpHttps } from './SharpHttps'
import { TwoToneHttps } from './TwoToneHttps'

export const Https = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHttps, OutlineHttps, RoundHttps, SharpHttps, TwoToneHttps)
