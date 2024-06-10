export interface RadioButtonProps {
    name: string;
    options: string[];
    onChange: (value: string) => void;
    visible?: boolean;
    disabled?: boolean;
    bgColor?: string;
   }