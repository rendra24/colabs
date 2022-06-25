export default function Alert({ value, ...props }) {
    return (
        <div {...props} role="alert">
            {value}
        </div>
    )
}