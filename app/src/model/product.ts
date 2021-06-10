import * as mongoose from 'mongoose';

interface IProduct extends mongoose.Document {
	_id: string;
	name: string;
    description: string;
    price?: number;
    picture?: string;
    ingredients?: Array<string>;
    category?: string;
    available: boolean;
}

const ProductSchema = new mongoose.Schema({
	description: String,
	name: String,
    price: Number,
    picture: String,
    ingredients: Array,
    category: String,
    available: Boolean
});


ProductSchema.method("toJSON", function(this: any) {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
  });
  

const ProductModel = mongoose.model<IProduct>('products', ProductSchema);

export { ProductModel, IProduct }