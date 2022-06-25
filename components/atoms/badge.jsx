export default function Badge({ value, ...props }) {
    return (
        <span {...props}>{value}</span>
    )
}