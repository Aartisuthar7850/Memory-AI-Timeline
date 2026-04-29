import MemoryForm from "../components/MemoryForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-500 flex justify-center items-start p-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Memory Timeline
        </h1>

        <MemoryForm />
      </div>
    </div>
  );
};

export default Home;