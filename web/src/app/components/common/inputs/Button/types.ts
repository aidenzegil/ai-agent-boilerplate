export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &  {
    children: JSX.Element | string
    onClick: () => void;
    variant?: ButtonVariant
    size?: ButtonSize;
}

export enum ButtonSize {
    LARGE = "LARGE",
    MEDIUM = "MEDIUM",
    SMALL = "SMALL"
}

export enum ButtonVariant {
    PRIMARY_FILLED = "PRIMARY_FILLED",
    PRIMARY_OUTLINED = "PRIMARY_OUTLINED",
    SUDO_LINK = "SUDO_LINK"
}