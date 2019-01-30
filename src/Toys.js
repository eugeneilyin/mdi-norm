import { createThemedIcon } from './utils/createThemedIcon'
import { FilledToys } from './FilledToys'
import { OutlineToys } from './OutlineToys'
import { RoundToys } from './RoundToys'
import { SharpToys } from './SharpToys'
import { TwoToneToys } from './TwoToneToys'

export const Toys = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledToys, OutlineToys, RoundToys, SharpToys, TwoToneToys)
