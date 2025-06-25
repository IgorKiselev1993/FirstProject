export interface ModalStatusProps {
  visible: boolean;
  onClose: () => void;
  selectedValue: string;
  onSelect: (value: string) => void;
}

export interface SelectStatusProps {
  value: string;
  onPress: () => void;
  isOpen: boolean;
}
