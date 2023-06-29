import { BiEdit,BiTrashAlt } from "react-icons/bi";
import { useState } from 'react'
import Link from "next/link"


export default function Table(){


    return(
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-10 py-2">
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-gray-200">Bank Acc No.</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-gray-200">Bank Name</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-gray-200">Address</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-gray-200">City</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-gray-200">Country</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-gray-200">Zipcode</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-gray-200">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                <tr className="bg-gray-50 text-center">
                    <td className="px-10 py-2">
                        <span className="text-center ml-2 font-semibold">Jerry</span>
                    </td>
                    <td className="px-10 py-2">
                        <span>AC245645133525</span>
                    </td>
                    <td className="px-10 py-2">
                        <span>Federal Bank</span>
                    </td>
                    <td className="px-10 py-2">
                        <span>Mig-374 Bharhut Nagar</span>
                    </td>
                    <td className="px-10 py-2">
                        <span>Satna</span>
                    </td>
                    <td className="px-10 py-2">
                        <span>India</span>
                    </td>
                    <td className="px-10 py-2">
                        <span>485001</span>
                    </td>
                    <td className="px-10 py-2 flex justify-center gap-10">
                        <Link href={"/editTopic/123"} className="cursor"><BiEdit size={25} color={'rgb(5, 150, 105)'}></BiEdit></Link>
                        <button className="cursor"><BiTrashAlt size={25} color={'rgb(220, 38, 38)'}></BiTrashAlt></button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}







