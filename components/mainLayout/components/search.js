import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('width'),
      transition: theme.transitions.create('position'),
      marginLeft: 0,
      width: '10%',
      zIndex: '2',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 1),
        width: '100%',
        [theme.breakpoints.down('xs')] : {
          position: 'absolute',
          height: '56px',
        },
        
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        display: 'block',
        backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        width: 'auto',
  
      }
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      height: '40px',
      // display: 'none',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        display: 'block',
        '&:focus': {
          width: '20ch',
        },
      },
    }
  }));







const Search = (props) => {
    const classes = useStyles();
    //const [value, setValue] = React.useState(0);

    return (
        <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    )
}

export default Search;

