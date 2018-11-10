import { createThemedIcon } from './utils/createThemedIcon'
import { IconBarChartFilled } from './IconBarChartFilled'
import { IconBarChartOutlined } from './IconBarChartOutlined'
import { IconBarChartRounded } from './IconBarChartRounded'
import { IconBarChartSharp } from './IconBarChartSharp'
import { IconBarChartTwoTone } from './IconBarChartTwoTone'

export const IconBarChart = /*#__PURE__*/ props =>
  createThemedIcon(props, IconBarChartFilled, IconBarChartOutlined, IconBarChartRounded, IconBarChartSharp, IconBarChartTwoTone)
