import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMap } from './FilledMap'
import { OutlineMap } from './OutlineMap'
import { RoundMap } from './RoundMap'
import { SharpMap } from './SharpMap'
import { TwoToneMap } from './TwoToneMap'

export const Map = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMap, OutlineMap, RoundMap, SharpMap, TwoToneMap)
