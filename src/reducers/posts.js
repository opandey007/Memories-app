export default (posts = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    case 'DELETE':
      return posts.filter((post) => post._id !== action.payload);
    case 'LIKE':
    case 'UPDATE':
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
