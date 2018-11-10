import { createThemedIcon } from './utils/createThemedIcon'
import { IconPetsFilled } from './IconPetsFilled'
import { IconPetsOutlined } from './IconPetsOutlined'
import { IconPetsRounded } from './IconPetsRounded'
import { IconPetsSharp } from './IconPetsSharp'
import { IconPetsTwoTone } from './IconPetsTwoTone'

export const IconPets = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPetsFilled, IconPetsOutlined, IconPetsRounded, IconPetsSharp, IconPetsTwoTone)
