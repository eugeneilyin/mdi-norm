import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPublish } from './FilledPublish'
import { OutlinePublish } from './OutlinePublish'
import { RoundPublish } from './RoundPublish'
import { SharpPublish } from './SharpPublish'
import { TwoTonePublish } from './TwoTonePublish'

export const Publish = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPublish, OutlinePublish, RoundPublish, SharpPublish, TwoTonePublish)
