import basicClassCreator from '../utils/basicClassCreator';

export { default as Card } from './Card';
export const CardText = basicClassCreator('CardText', 'mdl-card__supporting-text');
export const CardMenu = basicClassCreator('CardMenu', 'mdl-card__menu');
export { default as CardTitle } from './CardTitle';
export { default as CardActions } from './CardActions';
export const CardMedia = basicClassCreator('CardMedia', 'mdl-card__media');
