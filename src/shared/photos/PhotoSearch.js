import React from 'react';
import { Button, TextField } from '@material-ui/core';

function PhotoSearch(props) {
  return (
    <div className={props.classes.searchWrapper}>
        <form onSubmit={props.handleSearch} className={props.classes.searchBar} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Type to Search" />
        <Button type="submit" variant="outlined" color="primary">
            Search
        </Button>
        </form>
        <div className={props.classes.pagination}>
        <p>
            {props.data.page} / {props.totalPage}
        </p>
        <Button variant="contained" name="Prev" onClick={props.handleNextPrevButtonClick}>
            Prev
        </Button>
        <Button variant="contained" name="Next" onClick={props.handleNextPrevButtonClick}>
            Next
        </Button>
        </div>
    </div>
  );
}
export default PhotoSearch;
