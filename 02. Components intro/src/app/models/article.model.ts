import {IArticle}  from '../interfaces'
export class Article implements IArticle  {

    constructor(
        public title: string,
        public description: string,
        public author: string,
        public imageUrl: string) { }
}   