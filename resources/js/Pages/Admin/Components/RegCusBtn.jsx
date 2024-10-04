export default function RegisterCusButton({
    className = '',
    disabled,
    href,
    children,
    ...props
}) {
    return (
        <a
            {...props}
            className={
                `btn btn-primary w-100 py-5 px-5 bor-radio ${
                    disabled
                } ` + className
            }
            href= {href}
            disabled={disabled}
        >
            {children}
        </a>
    );
}
