import * as models from './models';

export interface Ingredient {
    amount?: string;

    createDate?: Date;

    createdDate?: Date;

    dbId?: number;

    links?: Array<models.Links>;

    name?: string;

    recipeId?: number;

}
