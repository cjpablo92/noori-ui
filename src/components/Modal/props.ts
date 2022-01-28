export interface ModalProps {
  /**
   * Set the Modal ID. Should be unique
   */
  id: string;
  /**
   * Set the Modal open state.
   */
  isOpen: boolean;
  /**
   * Set a Modal function that will be triggered after open.
   */
  onAfterOpen?: () => void;
  /**
   * Set a Modal function that will be triggered on close.
   */
  onRequestClose?: () => void;
  /**
   * Set the Modal title.
   */
  title?: string | undefined;
  /**
   * Set the Modal parent. Required for testing.
   * more info: https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme
   */
  appElement?: any;
}
