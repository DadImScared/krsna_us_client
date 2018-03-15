
import baseStyles from './base.css';

import btn_google_pressed from '../../images/btn_google_dark_pressed_ios.svg';
import btn_google_dark from '../../images/btn_google_dark_normal_ios.svg';

export default theme => ({
  googleButtonBackground: {
    marginBottom: theme.spacing.unit * 2,
    [`&:active $googleButton`]: {
      content: `url(${btn_google_pressed})`,
      cursor: 'pointer',
      boxShadow: theme.shadows[1]
    }
  },
  googleButton: {
    content: `url(${btn_google_dark})`
  },
  ...baseStyles(theme)
});
