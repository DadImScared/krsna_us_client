
export default (theme) => ({
  suggestionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.unit,
    [theme.breakpoints.up('md')]: {
      width: '50%',
      margin: `0 auto ${theme.spacing.unit}px`
    },
    [`${theme.breakpoints.up('md')} and (orientation: landscape)`]: {
      width: '80%'
    }
  },
  link: {
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing.unit
    }
  },
  spacing: {
    marginRight: theme.spacing.unit
  }
});
