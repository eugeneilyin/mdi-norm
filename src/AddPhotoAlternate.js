import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAddPhotoAlternate } from './FilledAddPhotoAlternate'
import { OutlineAddPhotoAlternate } from './OutlineAddPhotoAlternate'
import { RoundAddPhotoAlternate } from './RoundAddPhotoAlternate'
import { SharpAddPhotoAlternate } from './SharpAddPhotoAlternate'
import { TwoToneAddPhotoAlternate } from './TwoToneAddPhotoAlternate'

export const AddPhotoAlternate = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAddPhotoAlternate, OutlineAddPhotoAlternate, RoundAddPhotoAlternate, SharpAddPhotoAlternate, TwoToneAddPhotoAlternate)
