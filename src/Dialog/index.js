import basicClassCreator from '../utils/basicClassCreator';

export { default as Dialog } from './Dialog';
export { default as DialogTitle } from './DialogTitle';
export const DialogContent = basicClassCreator('DialogContent', 'mdl-dialog__content');
export { default as DialogActions } from './DialogActions';
