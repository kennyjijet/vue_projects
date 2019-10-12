export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  },
  initialMovie: (state, movies) => {
    state.movies = movies;
  },
  /*
  appendMovie: (state, movies) => {
    //console.log(data);
    state["movies"].push(data);
    //state.movies = movies
  }
  */

}
