import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCollections } from './FilledCollections'
import { OutlineCollections } from './OutlineCollections'
import { RoundCollections } from './RoundCollections'
import { SharpCollections } from './SharpCollections'
import { TwoToneCollections } from './TwoToneCollections'

export const Collections = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCollections, OutlineCollections, RoundCollections, SharpCollections, TwoToneCollections)
