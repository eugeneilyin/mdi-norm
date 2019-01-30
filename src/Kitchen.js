import { createThemedIcon } from './utils/createThemedIcon'
import { FilledKitchen } from './FilledKitchen'
import { OutlineKitchen } from './OutlineKitchen'
import { RoundKitchen } from './RoundKitchen'
import { SharpKitchen } from './SharpKitchen'
import { TwoToneKitchen } from './TwoToneKitchen'

export const Kitchen = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledKitchen, OutlineKitchen, RoundKitchen, SharpKitchen, TwoToneKitchen)
