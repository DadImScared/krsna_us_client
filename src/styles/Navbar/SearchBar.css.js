
export default (theme) => ({
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  input: {
    width: '100%'
  },
  toolbar: {
    paddingLeft: 12,
    paddingRight: 12
  },
  inkbar: {
    '&:after': {
      borderBottomColor: theme.palette.secondary.main
    }
  },
  formLabel: {
    paddingLeft: theme.spacing.unit * 2
  },
  checkedBox: {
    color: theme.palette.secondary.main,
    '& span:first-child': {
      height: '15px',
      width: '15px',
      backgroundColor: theme.palette.text.primary
    }
  },
  menuItem: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '4px'
    }
  }
});
