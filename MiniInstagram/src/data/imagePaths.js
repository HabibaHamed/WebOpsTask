export const getImages = (name) => {
  switch (name) {
    case 'italy':
      return require('../assets/images/venice.jpg');
    case 'india':
      return require('../assets/images/india.jpg');
    case 'france':
      return require('../assets/images/paris.jpg');
      case 'egypt':
      return require('../assets/images/egypt.jpg');
    case 'default profile':
      return require('../assets/images/profile-picture.png');
  }
};

//export {images};
