import { createThemedIcon } from './utils/createThemedIcon'
import { FilledEnhancedEncryption } from './FilledEnhancedEncryption'
import { OutlineEnhancedEncryption } from './OutlineEnhancedEncryption'
import { RoundEnhancedEncryption } from './RoundEnhancedEncryption'
import { SharpEnhancedEncryption } from './SharpEnhancedEncryption'
import { TwoToneEnhancedEncryption } from './TwoToneEnhancedEncryption'

export const EnhancedEncryption = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledEnhancedEncryption, OutlineEnhancedEncryption, RoundEnhancedEncryption, SharpEnhancedEncryption, TwoToneEnhancedEncryption)
