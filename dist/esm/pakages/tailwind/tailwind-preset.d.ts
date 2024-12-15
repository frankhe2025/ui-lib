declare const Preset: {
    theme: {
        fontFamily: {
            sans: any[];
            serif: any[];
            mono: any[];
        };
        extend: {
            colors: {
                neutral: {
                    "bg-base": string;
                    "bg-base-disabled": string;
                    bg: string;
                    "bg-weak": string;
                    "bg-strong": string;
                    "bg-strong-disabled": string;
                    border: string;
                    "border-active": string;
                    "border-weak": string;
                    "border-weak-hover": string;
                    "border-disabled": string;
                    text: string;
                    "text-weak": string;
                    "text-subtle": string;
                    "text-strong": string;
                    "text-disabled": string;
                    icon: string;
                    "icon-hover": string;
                    "icon-active": string;
                    "icon-weak": string;
                    "icon-medium": string;
                    "icon-strong": string;
                    "icon-disabled": string;
                };
                action: {
                    bg: string;
                    "bg-hover": string;
                    "bg-active": string;
                    "bg-base-hover": string;
                    "bg-base-active": string;
                    "bg-subtle": string;
                    "bg-weak": string;
                    "bg-disabled": string;
                    border: string;
                    "border-active": string;
                    "border-weak-hover": string;
                    "border-weak-focus": string;
                    text: string;
                    "text-hover": string;
                    "text-active": string;
                    icon: string;
                    "icon-hover": string;
                    "icon-active": string;
                    "icon-weak": string;
                    "icon-disabled": string;
                };
                danger: {
                    bg: string;
                    "bg-hover": string;
                    "bg-active": string;
                    "bg-base-hover": string;
                    "bg-base-active": string;
                    "bg-subtle": string;
                    "bg-weak": string;
                    border: string;
                    "border-active": string;
                    "border-weak-hover": string;
                    text: string;
                    "text-hover": string;
                    "text-active": string;
                    icon: string;
                    "icon-hover": string;
                    "icon-active": string;
                    "icon-weak": string;
                };
                success: {
                    bg: string;
                    "bg-hover": string;
                    "bg-active": string;
                    "bg-base-hover": string;
                    "bg-base-active": string;
                    "bg-subtle": string;
                    "bg-weak": string;
                    border: string;
                    "border-active": string;
                    "border-weak-hover": string;
                    text: string;
                    "text-hover": string;
                    "text-active": string;
                    icon: string;
                    "icon-hover": string;
                    "icon-active": string;
                    "icon-weak": string;
                };
                warning: {
                    bg: string;
                    "bg-hover": string;
                    "bg-active": string;
                    "bg-base-hover": string;
                    "bg-base-active": string;
                    "bg-subtle": string;
                    "bg-weak": string;
                    border: string;
                    "border-active": string;
                    "border-weak-hover": string;
                    text: string;
                    "text-hover": string;
                    "text-active": string;
                    icon: string;
                    "icon-hover": string;
                    "icon-active": string;
                    "icon-weak": string;
                };
                overlay: {
                    "bg-strong": string;
                    "bg-medium": string;
                    "bg-weak": string;
                    "bg-nav": string;
                };
                ccl: {
                    excellent: string;
                    high: string;
                    medium: string;
                    low: string;
                    poor: string;
                    unknown: string;
                };
                severity: {
                    critical: string;
                    high: string;
                    medium: string;
                    low: string;
                    "low-content": string;
                    informational: string;
                };
                risk: {
                    poor: string;
                    medium: string;
                    "medium-content": string;
                    good: string;
                };
                chart: {
                    "1st": string;
                    "2nd": string;
                    "3rd": string;
                    "4th": string;
                    "5th": string;
                    "6th": string;
                    "7th": string;
                    "8th": string;
                    "9th": string;
                    "10th": string;
                    other: string;
                };
            };
            maxWidth: {
                prose: string;
            };
            width: {
                sm: string;
                md: string;
                xl: string;
                "3xl": string;
                "5xl": string;
            };
            zIndex: {
                overlay: string;
                modal: string;
                dropdown: string;
                popover: string;
                tooltip: string;
            };
        };
    };
};
export default Preset;
