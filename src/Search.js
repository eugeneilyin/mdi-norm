import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSearch } from './FilledSearch'
import { OutlineSearch } from './OutlineSearch'
import { RoundSearch } from './RoundSearch'
import { SharpSearch } from './SharpSearch'
import { TwoToneSearch } from './TwoToneSearch'

export const Search = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSearch, OutlineSearch, RoundSearch, SharpSearch, TwoToneSearch)
