export const createThemedIcon = /*#__PURE__*/
  ({ theme, ...rest }, filled, outlined, rounded, sharp, twoTone) =>
    theme === 'outlined' ? outlined(rest) :
      theme === 'rounded' ? rounded(rest) :
        theme === 'sharp' ? sharp(rest) :
          theme === 'two-tone' ? twoTone(rest) :
            filled(rest)
