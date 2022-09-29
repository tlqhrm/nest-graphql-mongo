import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import {
  CharactersResolver,
  FoodDrinkResolver,
  OrderResolver,
  StoreResolver,
} from './store.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { Drink, Food, Order } from 'src/graphql';
import { DrinkSchema } from 'src/schemas/drink.schema';
import { FoodSchema } from 'src/schemas/food.schema';
import { OrderSchema } from 'src/schemas/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Food.name, schema: FoodSchema },
      { name: Drink.name, schema: DrinkSchema },
      { name: Order.name, schema: OrderSchema },
    ]),
  ],
  providers: [
    StoreResolver,
    StoreService,
    CharactersResolver,
    FoodDrinkResolver,
    OrderResolver,
  ],
})
export class StoreModule {}
