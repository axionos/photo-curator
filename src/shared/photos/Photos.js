import React from 'react';
import { GridList, GridListTile, GridListTileBar, ListSubheader } from '@material-ui/core'

function Photos(props) {
  return (
    <>
      <GridList cellHeight={200} cols={5} className={props.classes.gridList}>
        {props.photos.map((photo) => (
          <GridListTile key={photo.id} className={props.classes.gridListTile}>
            <a href={photo.src.original} target="_blank">
              <img src={photo.src.large} className={props.classes.photo} alt={photo.photographer} />
              <GridListTileBar
                title={photo.title}
                subtitle={
                  <span>
                    Photo by: {photo.photographer} on Pexels
                    <br />
                    {photo.photographer_url}
                  </span>
                }
              />
            </a>
          </GridListTile>
        ))}
      </GridList>
    </>
  );
}
export default Photos;
