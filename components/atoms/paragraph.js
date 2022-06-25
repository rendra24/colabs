export default function paragraph({ value, ...props }){
    return
    (
        <>
            <p {...props}>{value}</p>
        </>
    )
}