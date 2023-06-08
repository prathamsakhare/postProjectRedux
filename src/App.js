import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';
import logo from './logo.svg';

function App() {
  return (
    <main className="App">
      <PostsList />
      <AddPostForm />
    </main>
  );
}

export default App;
