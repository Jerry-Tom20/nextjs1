import {useReducer} from 'react'




export default function AddUserForm(){

    
    return(
        <form>
            <div className="flex place-content-left my-6 gap-20">
                <div className="input-type">
                    <input className="border w-full px-5 py-2 focus:outline-none focus:border-signgreen focus:border-2 rounded" type="text" name="name" placeholder="Name"/>
                </div>
                <div className="input-type">
                    <input className="border w-full px-5 py-2 focus:outline-none focus:border-signgreen focus:border-2 rounded" type="text" name="accnum" placeholder="AccountNo."/>
                </div>
                <div className="input-type">
                    <input className="border w-full px-5 py-2 focus:outline-none focus:border-signgreen focus:border-2 rounded" type="text" name="bname" placeholder="Bank"/>
                </div>
                <div className="input-type">
                    <input className="border w-full px-5 py-2 focus:outline-none focus:border-signgreen focus:border-2 rounded" type="text" name="address" placeholder="Address"/>
                </div>
            </div>

            <div className="flex place-content-left my-6 gap-20">
                <div className="input-type">
                    <input className="border w-full px-5 py-2 focus:outline-none focus:border-signgreen focus:border-2 rounded" type="text" name="city" placeholder="City"/>
                </div>
                <div className="input-type">
                    <input className="border w-full px-5 py-2 focus:outline-none focus:border-signgreen focus:border-2 rounded" type="text" name="country" placeholder="Country"/>
                </div>
                <div className="input-type">
                    <input className="border w-full px-5 py-2 focus:outline-none focus:border-signgreen focus:border-2 rounded" type="number" name="zip" placeholder="Zip-code"/>
                </div>
                <button className="flex justify-center text-md bg-signgreen text-white px-[106px] py-2 border rounded hover:bg-emerald-800 hover:text-slate-50">Add</button>
            </div>
            
            
            
        </form>
    )
}
