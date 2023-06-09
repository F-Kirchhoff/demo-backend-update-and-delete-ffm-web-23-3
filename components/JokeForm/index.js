export default function JokeForm({ value, onSubmit, editMode }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="joke-input">
        {editMode ? "Edit the joke" : "Enter a new joke"}
      </label>
      <input type="text" id="joke-input" name="joke" defaultValue={value} />
      <button type="submit">Submit</button>
    </form>
  );
}
