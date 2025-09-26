export const  TextField = ({id, label, ...props}) => {
    return (
        <fieldset className="flex flex-col space-y-2">
            <label htmlfor={id} className="font-medium">{label}</label>
        <input id={id} className="py-2 px-4 w-full" {...props} />
        </fieldset>
    )
}