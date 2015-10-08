import {categories} from './../../spec/SpecCategories';

export class Categories {
    constructor() {
        this.categories = categories;
        this.cacheMap = new Map();
        this.categories.map(item => {
            this.cacheMap.set(item.CategoryID, item);
        });
    }

    process(item, baseCategory) {
        let categoryData = this.cacheMap.get(String(baseCategory));
        if(categoryData) {
            item.category = categoryData;
        }
    }
}