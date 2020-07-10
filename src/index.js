import { createStore } from 'redux';

import { createPost, editPost } from './actions';
import appReducer from './reducers';

const store = createStore(appReducer);

store.subscribe(() => {
  console.log('state changed:', store.getState());
});

const root = document.getElementById('root');

const render = () => {
  root.innerHTML = '';
  const { posts } = store.getState();
  posts.forEach((post, index) => {
    const item = document.createElement('li');
    item.addEventListener('click', () => store.dispatch(editPost(index, `${post.text}!`)));
    const text = document.createTextNode(
      `${post.user} - ${post.text}`,
    );
    item.appendChild(text);
    root.appendChild(item);
  });
};
store.subscribe(render);

store.dispatch(createPost('dan', 'hello world'));
store.dispatch(createPost('des', 'second post'));
