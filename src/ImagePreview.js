import { Button, withStyles } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { getFileData } from './file';

function ImagePreview({ file, onRemove, classes }) {
  const [data, setData] = useState();

  useEffect(
    () => {
      getFileData(file).then(setData);
    },
    [file]
  );

  return data ? (
    <div className={classes.root}>
      <img src={data} alt="Profilbild" className={classes.image} />
      <Button variant="contained" className={classes.delete} onClick={onRemove}>
        <DeleteIcon />
      </Button>
    </div>
  ) : null;
}

const styles = ({ spacing }) => ({
  root: {
    position: 'relative',
  },
  image: {
    width: '100%',
  },
  delete: {
    position: 'absolute',
    right: spacing.unit,
    bottom: spacing.unit,
  },
});

export default withStyles(styles)(ImagePreview);
