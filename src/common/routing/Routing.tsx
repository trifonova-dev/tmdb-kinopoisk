import {Route, Routes} from "react-router";
import {PageNotFound} from "@/common/components";
import {CategoryPage, FilteredPage, MainPage, MovieDetailsPage, SearchPage} from "@/features/movies/ui";
import {FavoritesPage} from "@/features/favorites/ui/FavoritesPage/FavoritesPage";

export const Path = {
    MainPage: "/",
    FavoritesPage: "/favorites",
    CategoryPage: "/category",
    FilteredPage: "/filtered",
    MovieDetailsPage: "/movie/:movieId",
    SearchPage: "/search",
    NotFound: "*",
} as const

export const Routing = () => {
    return (
        <Routes>
            <Route path={Path.MainPage} element={<MainPage/>}/>
            <Route path={Path.FavoritesPage} element={<FavoritesPage/>}/>
            <Route path={Path.CategoryPage} element={<CategoryPage/>}/>
            <Route path={Path.FilteredPage} element={<FilteredPage/>}/>
            <Route path={Path.MovieDetailsPage} element={<MovieDetailsPage/>}/>
            <Route path={Path.SearchPage} element={<SearchPage/>}/>
            <Route path={Path.NotFound} element={<PageNotFound/>}/>
        </Routes>
    )
}