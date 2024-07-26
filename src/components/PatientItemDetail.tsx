
type PatientItemDetailProps = {
    label:string,
    data:string
}

export default function PatientItemDetail({label,data}:PatientItemDetailProps) {
    return (
        <p className=" font-bold mb-3 text-gray-700 first-letter:uppercase">
                {label}:{' '}
                <span className=" font-normal normal-case">
                    {data}
                </span>
            </p>
    )
}
