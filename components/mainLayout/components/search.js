import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from 'next/link'

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
      [theme.breakpoints.down('xs')]: {
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
  },
  menu: {
    marginTop: "15px",
    position: "absolute",
    top: "",
    width: "550px",
    height: "auto",
  }
}));







const Search = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className={classes.search} >
      <Input
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={event => handleChange(event)}
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={
          <InputAdornment position="end">
            <Link href={{ pathname: `/search/${value}`, query: { value: `${value}` } }}><IconButton
              aria-label="search"
            >
              <SearchIcon />
            </IconButton></Link>
          </InputAdornment>}
      />
    </div>
  )
}

export default Search;

