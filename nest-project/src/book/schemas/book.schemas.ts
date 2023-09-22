import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  ADVENTURE = 'Adventure',
  CALSSICS = 'Calssics',
  CRIME = 'Creme',
  FANTASY = 'Fantasy',
}

@Schema({ timestamps: true })
export class Book {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  author: string;
  @Prop()
  price: number;
  @Prop()
  catecory: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book)
