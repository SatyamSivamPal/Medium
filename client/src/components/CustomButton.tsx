import { MouseEventHandler } from "react";

type CustomButtonParams = {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const CustomButton = (params: CustomButtonParams) => {
    return (
        <div>
            <button type="button" className="text-white w-80 mt-6 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-9 py-2.5" onClick={params.onClick}>{params.label}</button>
        </div>
    )
}