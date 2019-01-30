import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAddAPhoto } from './FilledAddAPhoto'
import { OutlineAddAPhoto } from './OutlineAddAPhoto'
import { RoundAddAPhoto } from './RoundAddAPhoto'
import { SharpAddAPhoto } from './SharpAddAPhoto'
import { TwoToneAddAPhoto } from './TwoToneAddAPhoto'

export const AddAPhoto = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAddAPhoto, OutlineAddAPhoto, RoundAddAPhoto, SharpAddAPhoto, TwoToneAddAPhoto)
