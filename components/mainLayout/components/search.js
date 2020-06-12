import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from 'next/link'
import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        position: 'relative',
        height: '56px',
        width: "100%"
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Hidden mdUp><IconButton onClick={handleClickOpen}><SearchIcon /></IconButton>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Search</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="search"
              label="Search"
              type="text"
              onChange={event => handleChange(event)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
            <Link href={{ pathname: `/search/${value}`, query: { value: `${value}` } }}>
              <Button onClick={handleClose} color="primary">
                Search
              </Button>
            </Link>
          </DialogActions>
        </Dialog>

      </Hidden>

      <Hidden smDown>
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
      </Hidden>
    </div>
  )
}

export default Search;

