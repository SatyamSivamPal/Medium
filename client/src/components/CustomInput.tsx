import { ChangeEvent } from "react";

type CustomInputParams = {
    type: string;
    placeHolder: string;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput = (params: CustomInputParams) => {
    return (
            <div className="w-80 mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">{params.label}</label>
                <input type={params.type} className="bg-slate-200 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none" placeholder={params.placeHolder} required onChange={params.onChange}/>
            </div>
        
    )
}