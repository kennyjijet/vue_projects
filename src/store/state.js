import cats from '../data/cats'
import dogs from '../data/dogs'
import movies from '../data/movies'


export default {
  cats,
  dogs,
  pets: [...cats, ...dogs],
  movies
}