// Note.js
import React from 'react';

const Note = ({ note, onDelete }) => {
  // Format the created_at date
  const formattedDate = new Date(note.created_at).toLocaleString();

  return (
    <div className="p-4 mb-2 bg-gray-50 border border-gray-300 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{note.title}</h3>
        <p className="text-gray-600">{note.content}</p>
        <p className="text-gray-500 text-sm">{formattedDate}</p> {/* Display created date */}
      </div>
      <button
        onClick={() => onDelete(note.id)}
        className="ml-4 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition duration-300"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
