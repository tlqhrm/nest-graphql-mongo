import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DrinkDocument = Drink & Document;

@Schema()
export class Drink {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  alcohol: string;
}

export const DrinkSchema = SchemaFactory.createForClass(Drink);
