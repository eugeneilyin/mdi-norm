import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhoto } from './FilledPhoto'
import { OutlinePhoto } from './OutlinePhoto'
import { RoundPhoto } from './RoundPhoto'
import { SharpPhoto } from './SharpPhoto'
import { TwoTonePhoto } from './TwoTonePhoto'

export const Photo = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhoto, OutlinePhoto, RoundPhoto, SharpPhoto, TwoTonePhoto)
