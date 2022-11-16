export class Food{
  id!: string;
  name!: string;
  price!: number;
  tag?:string[];
  favourite!: boolean;
  stars!:number;
  imageUrl!: string;
  origin!: string[];
  cookTime!: string;
  static tag: any;
}
