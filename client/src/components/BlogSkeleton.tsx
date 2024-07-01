import { Appbar } from "./Appbar"


export const BlogSkeleton = () => {
    return (
        <div>
            <Appbar />
            <div role="status" className="animate-pulse">
                <div className="grid grid-cols-12 w-full pt-16 px-16">
                    <div className="col-span-8">
                        <div className="h-7 bg-gray-200 rounded-xl w-full mb-4"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-44  mt-4"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-96  mt-4"></div>
                    </div>
                    <div className="col-span-4 space-y-2 pl-8">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-14"></div>
                        <div className="flex items-center space-x-4 pt-3">
                            <div className="rounded-full bg-gray-200 h-6 w-6">
                                &nbsp;
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="h-2 bg-gray-200 rounded-full  mb-2.5 w-24"></div>
                                <div className="h-4 bg-gray-200 rounded-md  mb-2.5 w-36"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}