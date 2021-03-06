import { CommentGood } from './comment-good.model';
import { Category } from './category.model';

export class Good {
    id: number;
    name: string;
    price: number;
    idGoodOnShop: string;
    linkOnProduct: string;
    linkOnPicture: string;
    currencyName: string;
    shopName: string;
    comments: CommentGood[];
    average: number | null | undefined;
    categoryIdOnShop: string;
    categoryIdsOnShop: Category[] | null | undefined;
}
