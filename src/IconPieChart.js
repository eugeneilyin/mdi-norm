import { createThemedIcon } from './utils/createThemedIcon'
import { IconPieChartFilled } from './IconPieChartFilled'
import { IconPieChartOutlined } from './IconPieChartOutlined'
import { IconPieChartRounded } from './IconPieChartRounded'
import { IconPieChartSharp } from './IconPieChartSharp'
import { IconPieChartTwoTone } from './IconPieChartTwoTone'

export const IconPieChart = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPieChartFilled, IconPieChartOutlined, IconPieChartRounded, IconPieChartSharp, IconPieChartTwoTone)
