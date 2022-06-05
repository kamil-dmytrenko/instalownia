import React from "react";
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const Lightbox = (props) => {
  const options = {
    settings: {

    },
    buttons: {
    showDownloadButton: false,
    showThumbnailsButton: false,
    },
    thumbnails: {
      showThumbnails: true,
      thumbnailsAlignment: 'center',
      thumbnailsContainerBackgroundColor: 'transparent',
      // thumbnailsPosition: 'left',
    }
  };

  return (
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        {props.children}
      </SRLWrapper>
    </SimpleReactLightbox>
  )
};

export default Lightbox
