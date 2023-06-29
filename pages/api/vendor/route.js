
import connectMongoDB from '@/database/conn'
import Vendor from '@/models/vendorAdd';
import { NextResponse } from 'next/server';

export async function POST(request){
    const{name, accountno, bank, address, city, country, zipcode} = await request.json();
    await connectMongoDB();
    await Vendor.create({name, accountno, bank, address, city, country, zipcode})
    return NextResponse.json({message: 'Vendor Updated'},{status: 201});
}






