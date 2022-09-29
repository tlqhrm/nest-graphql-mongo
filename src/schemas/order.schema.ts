import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, StringExpression } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  user_name: string;

  @Prop()
  food: object[];

  @Prop()
  drink: object[];

  @Prop()
  total_price: number;

  // @Prop()
  // password: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
