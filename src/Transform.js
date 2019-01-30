import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTransform } from './FilledTransform'
import { OutlineTransform } from './OutlineTransform'
import { RoundTransform } from './RoundTransform'
import { SharpTransform } from './SharpTransform'
import { TwoToneTransform } from './TwoToneTransform'

export const Transform = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTransform, OutlineTransform, RoundTransform, SharpTransform, TwoToneTransform)
