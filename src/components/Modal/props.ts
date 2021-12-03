export interface ModalProps {
  /**
   * Set the Modal ID. Should be unique
   */
  id: string;
  /**
   * Set the Modal ID. Should be unique
   */
  isOpen: boolean;
  /**
   * Set the Modal ID. Should be unique
   */
  onAfterOpen?: () => void;
  /**
   * Set the Modal ID. Should be unique
   */
  onRequestClose?: () => void;
  /**
   * Set the Modal ID. Should be unique
   */
  // title: string;
}
