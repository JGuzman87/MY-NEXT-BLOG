import '../app/globals.css'

const Blog = () => {
  return (
    <form className="input-container">
      <label for="username" class="block text-sm/6 font-medium text-gray-900">
        Username:
      </label>
      <input
        className="user-name"
        name="unsername "
        type="text"
        placeholder="username"
      />
      <label for="password" class="block text-sm/6 font-medium text-gray-900">
        Password:
      </label>
      <input
        className="psw"
        name="password "
        type="password"
        placeholder="password"
      />
    </form>
  );
};

export default Blog;
