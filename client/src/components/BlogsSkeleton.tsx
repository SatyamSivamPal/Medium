export const BlogsSkeleton = () => {
    return (
        <div>
            <div role="status" className="animate-pulse">
                <div className="mt-3 w-screen max-w-3xl border-b border-slate-200 pb-4 p-4 shadow-sm cursor-pointer">
                    <div className="flex items-center">
                        <div className="rounded-full bg-gray-200 h-4 w-4">
                            &nbsp;
                        </div>
                        <div className="h-2.5 bg-gray-200 rounded-full w-24 ml-2"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full w-16 ml-2"></div>
                    </div>
                    <div className="pt-3">
                        <div className="h-6 bg-gray-200 rounded-full  w-full] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  w-full mb-2.5"></div>
                    </div>
                    <div className="pt-2">
                        <div className="h-2 bg-gray-200 rounded-full  w-20 mb-2.5"></div>
                    </div>
                </div>
            </div>


        </div>
    )
}