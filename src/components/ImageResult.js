import React, { useState } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Dialog
} from "@material-ui/core";
import { ZoomIn } from "@material-ui/icons";

export default function ImageResult(props) {
  const { images } = props;

  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImage] = useState("");

  function handleOpen(img) {
    setOpen(true);
    setCurrentImage(img);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <GridList cols={3}>
        {images.map(img => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt="img" />
            <GridListTileBar
              title={img.tags}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                  <ZoomIn style={{ color: "white" }} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Dialog onClose={handleClose} open={open}>
        <img src={currentImg} alt="current-img" style={{ width: "100%" }} />
      </Dialog>
    </React.Fragment>
  );
}
