import React from 'react';
import Photos from './Photos'
import PhotoSearch from './PhotoSearch';
import { Box, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { createClient } from 'pexels';

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: '100%',
    transform: 'translateZ(0)'
  },
  titleBar: {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  photo: {
    width: '100%',
    minHeight: '100%'
  },
  pagination: {
    textAlign: 'center'
  },
  searchBar: {
    textAlign: 'center'
  },
  title: {
    textAlign: 'center',
    padding: '30px 0',
    background: 'green',
    color: 'white',
    fontFamily: 'Sans-serif',
    fontSize: '1.5em'
  },
  searchWrapper: {
    padding: '50px 0'
  }
});


class PhotoList extends React.Component {
  constructor(props) {
    super(props);

    let initialData;
    let key;
    if (props.initialData) {
      initialData = props.initialData;
    } else {
      initialData = window.__initialData__;
      key = window.__key__;
      delete window.__initialData__;
      delete window.__key__;
    }

    this.state = {
      data: initialData,
      currentPage: initialData.page,
      perPage: initialData.per_page,
      total: initialData.total_results,
      query: '',
      key: key
    };
  }

  handleNextPrevButtonClick = (e) => {
    e.preventDefault();

    const client = createClient(this.state.key);
    const query = document.querySelector('input').value;
    const newPage = e.target.textContent === 'Next' || e.target.name === 'Next' ? this.state.currentPage + 1 : this.state.currentPage - 1;

    if (query === '') {
      client.photos
        .curated({
          per_page: this.state.perPage,
          page: newPage
        })
        .then((photos) => {
          this.setState({
            data: photos,
            currentPage: photos.page
          });
        });
    } else {
      client.photos
        .search({
          query: query,
          per_page: this.state.perPage,
          page: newPage
        })
        .then((photos) => {
          this.setState({
            query: query,
            data: photos,
            currentPage: photos.page
          });
        });
    }
  };

  handleSearch = (e) => {
    e.preventDefault();

    const client = createClient(this.state.key);
    const query = document.querySelector('input').value;

    if (query === '') {
      client.photos
        .curated({
          per_page: this.state.perPage,
          page: 1
        })
        .then((photos) => {
          this.setState({
            data: photos,
            currentPage: photos.page
          });
        });
    } else {
      client.photos
        .search({
          query: query,
          per_page: 10,
          page: 1
        })
        .then((photos) => {
          this.setState({
            query: query,
            data: photos,
            currentPage: photos.page
          });
        });
    }
  };

  render() {
    // console.log('state:', this.state);
    // console.log('useStyles:', useStyles());
    // console.log('useStyles2:', this.props.classes);
    
    const classes = this.props.classes;
    const data = this.state.data;
    const totalPage = Math.ceil(data.total_results / data.per_page);

    return (
      <div className="photo-list">
        <Container maxWidth="lg">
          <Box className={classes.title}>React Photo Curator</Box>
          <PhotoSearch
            classes={classes}
            data={data}
            totalPage={totalPage}
            handleSearch={this.handleSearch}
            handleNextPrevButtonClick={this.handleNextPrevButtonClick}
          />
          <Photos classes={classes} photos={data.photos} />
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(PhotoList);
