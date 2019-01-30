import { createThemedIcon } from './utils/createThemedIcon'
import { FilledVideogameAsset } from './FilledVideogameAsset'
import { OutlineVideogameAsset } from './OutlineVideogameAsset'
import { RoundVideogameAsset } from './RoundVideogameAsset'
import { SharpVideogameAsset } from './SharpVideogameAsset'
import { TwoToneVideogameAsset } from './TwoToneVideogameAsset'

export const VideogameAsset = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledVideogameAsset, OutlineVideogameAsset, RoundVideogameAsset, SharpVideogameAsset, TwoToneVideogameAsset)
