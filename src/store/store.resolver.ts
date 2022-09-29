import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  ResolveProperty,
} from '@nestjs/graphql';
import { StoreService } from './store.service';
import { CreateStoreInput } from './dto/create-store.input';
import { UpdateStoreInput } from './dto/update-store.input';
import {
  CreateDrinkInput,
  CreateFoodInput,
  CreateOrderInput,
  Drink,
  Food,
  Product,
} from 'src/graphql';

@Resolver('User')
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  @Mutation('createUser')
  createUser(@Args('createUserInput') createStoreInput: CreateStoreInput) {
    return this.storeService.createUser(createStoreInput);
  }

  @Mutation('createFood')
  createFood(@Args('createFoodInput') createFoodInput: CreateFoodInput) {
    return this.storeService.createFood(createFoodInput);
  }

  @Mutation('createDrink')
  createDrink(@Args('createDrinkInput') createDrinkInput: CreateDrinkInput) {
    return this.storeService.createDrink(createDrinkInput);
  }

  @Mutation('createOrder')
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.storeService.createOrder(createOrderInput);
  }

  @Query('users')
  findAll() {
    return this.storeService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.storeService.findOne(id);
  }

  // @Mutation('updateStore')
  // update(@Args('updateStoreInput') updateStoreInput: UpdateStoreInput) {
  //   return this.storeService.update(updateStoreInput.id, updateStoreInput);
  // }

  // @Mutation('removeStore')
  // remove(@Args('id') id: number) {
  //   return this.storeService.remove(id);
  // }
}

@Resolver('Product')
export class CharactersResolver {
  constructor(private readonly storeService: StoreService) {}
  @Query('products')
  findProducts() {
    return this.storeService.findProducts();
  }

  @ResolveField()
  __resolveType(value) {
    // console.log(value);
    if ('weight' in value) {
      return 'Food';
    }
    if ('alcohol' in value) {
      return 'Drink';
    }
    return null;
  }
}

@Resolver('FoodDrink')
export class FoodDrinkResolver {
  constructor(private readonly storeService: StoreService) {}
  @Query('foodDrink')
  findProducts() {
    return this.storeService.findProducts();
  }

  @ResolveField()
  __resolveType(value) {
    if ('weight' in value) {
      return 'Food';
    }
    if ('alcohol' in value) {
      return 'Drink';
    }
    return null;
  }
}

@Resolver('Order')
export class OrderResolver {
  constructor(private readonly storeService: StoreService) {}
  @Query('orders')
  findOrders() {
    return this.storeService.findOrders();
  }

  @ResolveField('food')
  findFood() {
    // console.log(order);
    return [
      {
        count: 2,
        name: '소주',
        price: 20000,
      },
    ];
  }
}
