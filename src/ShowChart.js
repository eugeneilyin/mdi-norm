import { createThemedIcon } from './utils/createThemedIcon'
import { FilledShowChart } from './FilledShowChart'
import { OutlineShowChart } from './OutlineShowChart'
import { RoundShowChart } from './RoundShowChart'
import { SharpShowChart } from './SharpShowChart'
import { TwoToneShowChart } from './TwoToneShowChart'

export const ShowChart = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledShowChart, OutlineShowChart, RoundShowChart, SharpShowChart, TwoToneShowChart)
