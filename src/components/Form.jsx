import '../app/globals.css'

const Form = () => {
  return (
    <form className="input-container">
      <label
         htmlFor="username"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Username:
      </label>
      <input
        className="user-name"
        name="unsername "
        type="text"
        placeholder="username"
      />
      <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
        Title:
      </label>
      <input className="title" name="title " type="title" placeholder="Title" />
      <label  htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
        Content:
      </label>
      <textarea className="content" name="content " type="content" placeholder="content"></textarea>
      <button className="submit">Submit</button>
    </form>
  );
};

export default Form;
