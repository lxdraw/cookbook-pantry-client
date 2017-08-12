import * as models from './models';

export interface Instruction {
    createdDate?: Date;

    dbId?: number;

    instruction?: string;

    links?: Array<models.Links>;

    recipeId?: number;

}
