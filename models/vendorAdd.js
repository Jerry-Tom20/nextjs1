
import mongoose, {Schema} from 'mongoose';

const vendorAddSchema = new Schema(
    {
        name: String,
        accountno: String,
        bank: String,
        address: String,
        city: String,
        country: String,
        zipcode: Number
    },
    {
        timestamps: true,
    }
);

const Vendor = mongoose.model.Vendor || mongoose.model("Vendor", vendorAddSchema);

export default Vendor;


