import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDashboard } from './FilledDashboard'
import { OutlineDashboard } from './OutlineDashboard'
import { RoundDashboard } from './RoundDashboard'
import { SharpDashboard } from './SharpDashboard'
import { TwoToneDashboard } from './TwoToneDashboard'

export const Dashboard = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDashboard, OutlineDashboard, RoundDashboard, SharpDashboard, TwoToneDashboard)
