//require objects to be transferred! 
import { IArticle } from "../interfaces"
import { Article } from "../models/article.model"
import { data } from "../data/seed"
export class ArticleData {
    getData(): IArticle[] {


        //note this! (that you can tell explicitly what let should be!)
        let articles: IArticle[] = []

        for (let i = 0; i < data.length; i++) {
            const { title, description, author, imageUrl } = data[i];
            const newArticle = new Article(title, description, author, imageUrl);
            articles.push(newArticle);
        }
        return articles;
    }
}
