import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPlayCircleFilled } from './FilledPlayCircleFilled'
import { OutlinePlayCircleFilled } from './OutlinePlayCircleFilled'
import { RoundPlayCircleFilled } from './RoundPlayCircleFilled'
import { SharpPlayCircleFilled } from './SharpPlayCircleFilled'
import { TwoTonePlayCircleFilled } from './TwoTonePlayCircleFilled'

export const PlayCircleFilled = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPlayCircleFilled, OutlinePlayCircleFilled, RoundPlayCircleFilled, SharpPlayCircleFilled, TwoTonePlayCircleFilled)
