import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTexture } from './FilledTexture'
import { OutlineTexture } from './OutlineTexture'
import { RoundTexture } from './RoundTexture'
import { SharpTexture } from './SharpTexture'
import { TwoToneTexture } from './TwoToneTexture'

export const Texture = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTexture, OutlineTexture, RoundTexture, SharpTexture, TwoToneTexture)
