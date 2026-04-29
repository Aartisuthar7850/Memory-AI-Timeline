import { useState } from "react";

const MemoryForm = () => {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { text, mood };
    console.log("Memory:", data);

    setText("");
    setMood("");
  };

  return (
    <div className="flex justify-center">
    <div className="bg-white p-5 rounded-xl shadow-md w-3xl  align-center">
      <h2 className="text-lg text-blue-950 font-semibold mb-3">
        How was your day?
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-black">
        
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Something that stayed with you today..."
          className="border p-2 rounded-md outline-none"
          rows={3}
        />

        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">Select Mood</option>
          <option value="happy">😊 Happy</option>
          <option value="sad">😢 Sad</option>
          <option value="angry">😡 Angry</option>
          <option value="calm">😌 Calm</option>
        </select>

        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
        >
          Save Memory
        </button>
      </form>
    </div>
    </div>
  );
};

export default MemoryForm;