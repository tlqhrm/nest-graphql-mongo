
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum RegistedFood {
    chiken = "chiken",
    hamburger = "hamburger",
    pizza = "pizza"
}

export class CreateUserInput {
    name: string;
}

export class UpdateUserInput {
    id: string;
    name: string;
}

export class CreateFoodInput {
    name: string;
    description: string;
    price: number;
    weight: string;
}

export class UpdateFoodInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    price?: Nullable<number>;
    weight?: Nullable<string>;
}

export class CreateDrinkInput {
    name: string;
    description: string;
    price: number;
    alcohol: string;
}

export class UpdateDrinkInput {
    user_id: string;
    product_id: string;
    type: string;
}

export class CreateOrderInput {
    user_name: string;
    food?: Nullable<Nullable<string>[]>;
    drink?: Nullable<Nullable<string>[]>;
}

export class UpdateOrderInput {
    id: string;
    food?: Nullable<Nullable<string>[]>;
    drink?: Nullable<Nullable<string>[]>;
}

export interface Product {
    id?: Nullable<string>;
    description?: Nullable<string>;
    price?: Nullable<number>;
}

export class Post {
    id: number;
    title: string;
    votes?: Nullable<number>;
}

export class Author {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    posts?: Nullable<Post>;
}

export abstract class IQuery {
    abstract author(id?: Nullable<number>): Nullable<Author> | Promise<Nullable<Author>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(name: string): User | Promise<User>;

    abstract foods(): Nullable<Food>[] | Promise<Nullable<Food>[]>;

    abstract food(name: string): Food | Promise<Food>;

    abstract drinks(): Nullable<Drink>[] | Promise<Nullable<Drink>[]>;

    abstract drink(name: string): Drink | Promise<Drink>;

    abstract orders(): Nullable<Nullable<Order>[]> | Promise<Nullable<Nullable<Order>[]>>;

    abstract order(id: string): Order | Promise<Order>;

    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract foodDrink(): Nullable<Nullable<FoodDrink>[]> | Promise<Nullable<Nullable<FoodDrink>[]>>;
}

export class User {
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export class Food implements Product {
    id?: Nullable<string>;
    name?: Nullable<RegistedFood>;
    description?: Nullable<string>;
    price?: Nullable<number>;
    weight?: Nullable<string>;
}

export class Drink implements Product {
    id?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    price?: Nullable<number>;
    alcohol?: Nullable<string>;
}

export class Order {
    user_name?: Nullable<string>;
    food?: Nullable<Nullable<FoodOrder>[]>;
    drink?: Nullable<Nullable<DrinkOrder>[]>;
    total_price?: Nullable<number>;
}

export class FoodOrder {
    name?: Nullable<string>;
    count?: Nullable<number>;
    price?: Nullable<number>;
}

export class DrinkOrder {
    name?: Nullable<string>;
    count?: Nullable<number>;
    price?: Nullable<number>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(updateUserInput: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract removeStore(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract createFood(createFoodInput: CreateFoodInput): Nullable<Food> | Promise<Nullable<Food>>;

    abstract updateFood(updateFoodInput: UpdateFoodInput): Nullable<Food> | Promise<Nullable<Food>>;

    abstract removeFood(id: string): Nullable<Food> | Promise<Nullable<Food>>;

    abstract createDrink(createDrinkInput: CreateDrinkInput): Nullable<Drink> | Promise<Nullable<Drink>>;

    abstract updateDrink(updateDrinkInput: UpdateDrinkInput): Nullable<Drink> | Promise<Nullable<Drink>>;

    abstract removeDrink(id: string): Nullable<Drink> | Promise<Nullable<Drink>>;

    abstract createOrder(createOrderInput: CreateOrderInput): Nullable<Order> | Promise<Nullable<Order>>;

    abstract updateOrder(updateOrderInput: UpdateOrderInput): Nullable<Order> | Promise<Nullable<Order>>;

    abstract removeOrder(id: string): Nullable<Order> | Promise<Nullable<Order>>;
}

export type FoodDrink = Drink | Food;
type Nullable<T> = T | null;
