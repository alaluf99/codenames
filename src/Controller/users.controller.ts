import { IUser, userModel } from '../Model/UsersModel';
import { Controller, Route, Get, Post, BodyProp, Put, Delete } from 'tsoa';

@Route('/users')
export class UsersController extends Controller {
	@Get()
	//TODO: SECURE THE PASSWORD
	public async getAll(): Promise<IUser[]> {
		try {
			let items: any = await userModel.find({});
			items = items.map((item) => { return {id: item._id, name: item.name, password: item.password}});
			return items;
		} catch (err) {
			this.setStatus(500);
			console.error('Caught error', err);
		}
	}

	@Post()
	public async create(@BodyProp() name: string, @BodyProp() password: string) : Promise<void> {
		const item = new userModel({name: name, password: password});
		await item.save();
	}

}
