import * as models from './models';

export interface Recipe {
    createdDate?: string;

    dbId?: number;

    description?: string;

    lastMadeDate?: string;

    links?: Array<models.Link>;

    name?: string;

    notes?: string;

}
