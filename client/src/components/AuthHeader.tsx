import { Link } from "react-router-dom"

type authHeaderParams = {
    label: string;
    subLabel: string;
    to: string;
    tolabel: string;
}

export const AuthHeader = (params: authHeaderParams) => {
    return (
        <>
            <div className="text-3xl font-bold">
                {params.label}
            </div>
            <div className="text-slate-400 font-medium">
               {params.subLabel} <Link to={params.to} className="underline">{params.tolabel}</Link>
            </div>
        </>

    )
}