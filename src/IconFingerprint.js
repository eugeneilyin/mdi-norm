import { createThemedIcon } from './utils/createThemedIcon'
import { IconFingerprintFilled } from './IconFingerprintFilled'
import { IconFingerprintOutlined } from './IconFingerprintOutlined'
import { IconFingerprintRounded } from './IconFingerprintRounded'
import { IconFingerprintSharp } from './IconFingerprintSharp'
import { IconFingerprintTwoTone } from './IconFingerprintTwoTone'

export const IconFingerprint = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFingerprintFilled, IconFingerprintOutlined, IconFingerprintRounded, IconFingerprintSharp, IconFingerprintTwoTone)
