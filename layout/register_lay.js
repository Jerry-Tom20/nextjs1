export default function layout2({children}){
    return(
        <div className="flex h-screen bg-midnight">
            <div className="m-auto bg-slate-50 w-3/5 h-4/6 grid lg:grid-cols">

                <div className="grid grid-cols-3 rounded-md drop-shadow-2xl bg-gray-100">

                    <div className="col-span-2 right flex flex-col gap-5 justify-evenly">
                        <div className="text-center py-10">
                            {children}
                        </div>
                    </div>
                    <div className="bg-signgreen rounded-r-md right flex flex-col justify-evenly">
                        <div className="text-center py-10">
                            <div className='text-3xl font-semibold text-gray-50'>Signed Up, Already!</div>
                            <div className="border-2 w-10 rounded mt-3 border-white inline-block mb-2"></div>
                            <div className="text-gray-50 text-sm mx-2">Fill up personal information and start journey with us.</div>
                            <a href={'/login'} className="border-2 border-white rounded-full px-12 py-2 text-gray-50 mt-10 inline-block">Sign In</a>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}