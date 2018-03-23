export class Category {
    idAtStore: string;
    name: string;
    parentIdAtStore: string | null;
    childrenCategories: Category[] | null;
}
