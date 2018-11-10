import { createThemedIcon } from './utils/createThemedIcon'
import { IconSettingsInputComponentFilled } from './IconSettingsInputComponentFilled'
import { IconSettingsInputComponentOutlined } from './IconSettingsInputComponentOutlined'
import { IconSettingsInputComponentRounded } from './IconSettingsInputComponentRounded'
import { IconSettingsInputComponentSharp } from './IconSettingsInputComponentSharp'
import { IconSettingsInputComponentTwoTone } from './IconSettingsInputComponentTwoTone'

export const IconSettingsInputComponent = /*#__PURE__*/ props =>
  createThemedIcon(props, IconSettingsInputComponentFilled, IconSettingsInputComponentOutlined, IconSettingsInputComponentRounded, IconSettingsInputComponentSharp, IconSettingsInputComponentTwoTone)
