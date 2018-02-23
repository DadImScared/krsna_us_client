
export const playlistForm = (theme) => ({
  formContainer: {
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: '50%',
      margin: '0 auto'
    },
    [`${theme.breakpoints.up('md')} and (orientation: landscape)`]: {
      width: '80%'
    }
  }
});
