import { createThemedIcon } from './utils/createThemedIcon'
import { IconReportFilled } from './IconReportFilled'
import { IconReportOutlined } from './IconReportOutlined'
import { IconReportRounded } from './IconReportRounded'
import { IconReportSharp } from './IconReportSharp'
import { IconReportTwoTone } from './IconReportTwoTone'

export const IconReport = /*#__PURE__*/ props =>
  createThemedIcon(props, IconReportFilled, IconReportOutlined, IconReportRounded, IconReportSharp, IconReportTwoTone)
