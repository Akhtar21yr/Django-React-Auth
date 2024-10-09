import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState(""); // State to track errors

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => {
        setError("Failed to fetch notes."); // Set error message
        console.error(err);
      });
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          getNotes(); // Refresh notes after deletion
        } else {
          setError("Failed to delete note."); // Set error message
        }
      })
      .catch((error) => {
        setError("Failed to delete note."); // Set error message
        console.error(error);
      });
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          setTitle(""); // Clear title after creation
          setContent(""); // Clear content after creation
          getNotes(); // Refresh notes after creation
        } else {
          setError("Failed to create note."); // Set error message
        }
      })
      .catch((err) => {
        setError("Failed to create note."); // Set error message
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-4">Create a Note</h2>
      <form onSubmit={createNote} className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Content:</label>
        <textarea
          id="content"
          name="content"
          required
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="w-full p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
        />
      </form>
      
      {/* Show error alerts */}
      {error && (
        <div className="mt-4 text-red-600">
          {error}
        </div>
      )}
      
      <h2 className="text-3xl font-bold mb-6">Notes</h2>
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-4 mb-8">
        {notes.length ? notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        )) : <div className="font-bold text-2xl text-center">NO NOTES</div>}
      </div>
    </div>
  );
}

export default Home;
