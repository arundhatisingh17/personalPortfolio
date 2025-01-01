
/* helps dynamically import images into different components of the website */


/* helps dynamically import images into different components of the website */

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };

