import { CommentGood } from './comment-good.model';
import { Category } from './category.model';

export class JSON {
    id: number;
    name: string;
    price: number;
    idGoodOnShop: string;
    linkOnProduct: string;
    linkOnPicture: string;
    currencyName: string;
    shopName: string;
    categoryId: number | null;
    comments: CommentGood[];
    average: number | null;
    categoryIdOnShop: string;
    categoryIdsOnShop: Category[] | null;
}
