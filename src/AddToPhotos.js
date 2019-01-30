import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAddToPhotos } from './FilledAddToPhotos'
import { OutlineAddToPhotos } from './OutlineAddToPhotos'
import { RoundAddToPhotos } from './RoundAddToPhotos'
import { SharpAddToPhotos } from './SharpAddToPhotos'
import { TwoToneAddToPhotos } from './TwoToneAddToPhotos'

export const AddToPhotos = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAddToPhotos, OutlineAddToPhotos, RoundAddToPhotos, SharpAddToPhotos, TwoToneAddToPhotos)
