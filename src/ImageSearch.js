import { createThemedIcon } from './utils/createThemedIcon'
import { FilledImageSearch } from './FilledImageSearch'
import { OutlineImageSearch } from './OutlineImageSearch'
import { RoundImageSearch } from './RoundImageSearch'
import { SharpImageSearch } from './SharpImageSearch'
import { TwoToneImageSearch } from './TwoToneImageSearch'

export const ImageSearch = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledImageSearch, OutlineImageSearch, RoundImageSearch, SharpImageSearch, TwoToneImageSearch)
