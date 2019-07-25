import React from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import { ZoomIn } from "@material-ui/icons";

export default function ImageResult(props) {
  const { images } = props;

  return (
    <GridList cols={3}>
      {images.map(img => (
        <GridListTile key={img.id}>
          <img src={img.largeImageURL} />
          <GridListTileBar
            title={img.tags}
            subtitle={
              <span>
                by <strong>{img.user}</strong>
              </span>
            }
            actionIcon={
              <IconButton>
                <ZoomIn style={{ color: "white" }} />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
}
