export interface IModalStatusProps {
  visible: boolean;
  onClose: () => void;
  selectedValue: string;
  onSelect: (value: string) => void;
}

export const statusList = ['Published', 'Draft'];

export interface ISelectStatusProps {
  value: string;
  onPress: () => void;
  isOpen: boolean;
}
