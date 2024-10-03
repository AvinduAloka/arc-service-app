export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `text-black ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
