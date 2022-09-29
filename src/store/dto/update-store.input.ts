import { CreateStoreInput } from './create-store.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateStoreInput extends PartialType(CreateStoreInput) {
  id: number;
}
