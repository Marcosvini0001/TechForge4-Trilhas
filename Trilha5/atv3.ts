/* FIZ PELO TYPESCRIPT PLAYGROUND */


abstract class FavoriteManager {
    protected favorites: string[] = [];

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}


class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item); 
        }
    }

    getFavorites(): string[] {
        return this.favorites.sort(); 
    }
}


class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        if (!this.favorites.includes(item)) {
            this.favorites.unshift(item); 
        }
    }

    getFavorites(): string[] {
        return this.favorites; 
    }
}

const movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("Inception");
movieManager.addFavorite("The Matrix");
movieManager.addFavorite("Inception"); 
console.log("Filmes Favoritos:", movieManager.getFavorites());

const bookManager = new BooksFavoriteManager();
bookManager.addFavorite("1984");
bookManager.addFavorite("Brave New World");
bookManager.addFavorite("1984"); 
console.log("Livros Favoritos:", bookManager.getFavorites());
