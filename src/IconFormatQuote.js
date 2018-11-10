import { createThemedIcon } from './utils/createThemedIcon'
import { IconFormatQuoteFilled } from './IconFormatQuoteFilled'
import { IconFormatQuoteOutlined } from './IconFormatQuoteOutlined'
import { IconFormatQuoteRounded } from './IconFormatQuoteRounded'
import { IconFormatQuoteSharp } from './IconFormatQuoteSharp'
import { IconFormatQuoteTwoTone } from './IconFormatQuoteTwoTone'

export const IconFormatQuote = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFormatQuoteFilled, IconFormatQuoteOutlined, IconFormatQuoteRounded, IconFormatQuoteSharp, IconFormatQuoteTwoTone)
