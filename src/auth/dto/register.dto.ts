import { IsNotEmpty, IsString, Length } from 'class-validator';

export class registerDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @Length(6, 10)
  password: string;
}
