import { faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const getIconFromCategory = (category: string) => {
  switch (category) {
    case 'linkedin':
      return faLinkedin;
    case 'instagram':
      return faInstagramSquare;
    case 'salesNavigator':
      return faCompass;
    case 'mail':
      return faEnvelope;
    default:
      return null;
  }
};
