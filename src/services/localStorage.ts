import { IArticleCard } from '../interfaces';

const FAVORITE_ARTICLES_KEY = 'favorite_articles';

if (!JSON.parse(localStorage.getItem(FAVORITE_ARTICLES_KEY) as string)) {
  localStorage.setItem(FAVORITE_ARTICLES_KEY, JSON.stringify([]));
}

export const readFavoriteArticles = (): IArticleCard[] =>
  JSON.parse(localStorage.getItem(FAVORITE_ARTICLES_KEY) as string);

const saveFavoriteArticles = (favoriteArticles: IArticleCard[]) =>
  localStorage.setItem(FAVORITE_ARTICLES_KEY, JSON.stringify(favoriteArticles));

export const addArticle = (article: IArticleCard) => {
  const favoriteArticles = readFavoriteArticles();
  saveFavoriteArticles([...favoriteArticles, article]);
};

export const removeArticle = (article: IArticleCard) => {
  const favoriteArticles = readFavoriteArticles();
  saveFavoriteArticles(favoriteArticles.filter((a) => a.id !== article.id));
};