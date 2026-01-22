import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";

const Button = ({
    children,
    variant = "primary",
    size = "lg",
    className = "",
    isLoading = false,
    icon: Icon = null,
    iconAfter: IconAfter = null,
    disabled = false,
    type = "button",
    as: Component = "button",
    onClick,
    ...props
}) => {
    const isText = variant === "text";

    // Base Styles
    const baseStyles = isText
        ? "inline-flex items-center text-sm font-bold text-sky-500 hover:text-sky-600  uppercase gap-1 p-0"
        : "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200   disabled:opacity-60 disabled:cursor-not-allowed  rounded-full";

    // Variant Styles (Colors/Themes)
    const variants = {
        primary: "bg-primary text-white hover:bg-primaryHover shadow-[0_10px_30px_rgba(0,163,224,0.4)] hover:shadow-[0_12px_40px_rgba(0,163,224,0.5)]",
        text: "",
    };

    const variantClasses = isText ? "" : (variants[variant] || variants.primary);
    const sizeClasses = isText ? "" : (sizes[size] || sizes.md);

    return (
        <Component
            type={Component === "button" ? type : undefined}
            className={`${baseStyles} ${variantClasses} ${sizeClasses} ${className}`}
            onClick={onClick}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
            )}
            {!isLoading && Icon && <Icon className="mr-2 h-4 w-4" />}
            <span>{children}</span>
            {!isLoading && IconAfter && <IconAfter className="ml-2 h-4 w-4" />}
            {isText && !IconAfter && <HiArrowRight className="ml-1 h-3 w-3" />}
        </Component>
    );
};

const sizes = {
    xs: "px-4 py-1.5 text-[10px]",
    sm: "px-5 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-sm",
    xl: "px-8 py-3.5 text-lg",
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    icon: PropTypes.elementType,
    iconAfter: PropTypes.elementType,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    as: PropTypes.elementType,
    onClick: PropTypes.func,
};

export default Button;
