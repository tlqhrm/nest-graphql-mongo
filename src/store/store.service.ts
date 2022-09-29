import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateDrinkInput,
  CreateFoodInput,
  CreateOrderInput,
  Drink,
  Food,
  Order,
  RegistedFood,
} from 'src/graphql';
import { FoodDocument } from 'src/schemas/food.schema';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateStoreInput } from './dto/create-store.input';
import { UpdateStoreInput } from './dto/update-store.input';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Food.name) private foodModel: Model<FoodDocument>,
    @InjectModel(Drink.name) private drinkModel: Model<FoodDocument>,
    @InjectModel(Order.name) private orderModel: Model<FoodDocument>,
  ) {}
  async createUser(createStoreInput: CreateStoreInput) {
    return await this.userModel.create(createStoreInput);
    // return await this.userModel.create
  }
  async createFood(createFoodInput: CreateFoodInput) {
    return await this.foodModel.create(createFoodInput);
    // return await this.userModel.create
  }

  async createDrink(createDrinkInput: CreateDrinkInput) {
    return await this.drinkModel.create(createDrinkInput);
    // return await this.userModel.create
  }

  async createOrder(createOrderInput: CreateOrderInput) {
    const { user_name, food, drink } = createOrderInput;
    const foodObj = [];
    const drinkObj = [];
    let total_price = 0;
    for (const f of food) {
      const foodInfo = f.split(',');
      total_price += +foodInfo[2];
      foodObj.push({
        name: foodInfo[0],
        count: foodInfo[1],
        price: foodInfo[2],
      });
    }
    for (const d of drink) {
      const drinkInfo = d.split(',');
      total_price += +drinkInfo[2];
      drinkObj.push({
        name: drinkInfo[0],
        count: drinkInfo[1],
        price: drinkInfo[2],
      });
    }

    return await this.orderModel.create({
      user_name,
      food: foodObj,
      drink: drinkObj,
      total_price,
    });

    // await this.createOrder();
  }
  async findAll() {
    const users = await this.userModel.find();
    console.log(users);
    return users;
  }

  async findProducts() {
    const foods = await this.foodModel.find({
      name: { $in: Object.values(RegistedFood) },
    });
    const drinks = await this.drinkModel.find();

    // console.log([...foods, ...drinks]);
    return [...foods, ...drinks];
  }

  async findOrders() {
    const orders = await this.orderModel.find();
    console.log(orders);
    return orders;
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreInput: UpdateStoreInput) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
