import { ProductModel, IProduct } from '../model/product';
import { Controller, Route, Get, Post, BodyProp, Put, Delete } from 'tsoa';

@Route('/products')
export class ProductController extends Controller {
	@Get()
	public async getAll(): Promise<any> {
		try {
			let items: any = await ProductModel.find({});
			items = items.map((item: any) => { return {id: item._id, description: item.description}});
			return items;
		} catch (err) {
			this.setStatus(500);
			console.error('Caught error', err);
		}
	}

	
	@Get('/{id}')
	public async get(id: string): Promise<any> {
		return await ProductModel.findById(id);
	}
	

	@Post()
	public async create(@BodyProp() name: string, @BodyProp() description?: string) : Promise<void> {
		const item = new ProductModel({name: name, description: description});
		await item.save();
	}

	@Put('/{id}')
	public async update(id: string, @BodyProp() description: string) : Promise<void> {
		await ProductModel.findOneAndUpdate({_id: id}, {description: description});
	}

	@Delete('/{id}')
	public async remove(id: string) : Promise<void> {
		await ProductModel.findByIdAndRemove(id);
	}
}
