export interface ModalStatus {
  visible: boolean;
  onClose: () => void;
  selectedValue: string;
  onSelect: (value: string) => void;
}

export interface SelectStatus {
  value: string;
  onPress: () => void;
  isOpen: boolean;
}
