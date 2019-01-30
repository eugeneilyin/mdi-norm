import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDns } from './FilledDns'
import { OutlineDns } from './OutlineDns'
import { RoundDns } from './RoundDns'
import { SharpDns } from './SharpDns'
import { TwoToneDns } from './TwoToneDns'

export const Dns = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDns, OutlineDns, RoundDns, SharpDns, TwoToneDns)
