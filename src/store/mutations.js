export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  },
  initialMovie: (state, movies) => {
    state.movies = movies;
  },
  initialLOPA: (state, lopa) => {
    state.lopa = lopa;
  },
  /*
  appendMovie: (state, movies) => {
    //console.log(data);
    state["movies"].push(data);
    //state.movies = movies
  }
  */

}
