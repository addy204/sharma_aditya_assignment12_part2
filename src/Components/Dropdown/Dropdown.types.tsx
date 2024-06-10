export interface DropdownProps {
    options: string[];
    onChange: (value: string) => void;
    visible?: boolean;
    disabled?: boolean;
    bgColor?: string;
   }