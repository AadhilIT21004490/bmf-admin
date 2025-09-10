import { Button } from "./ui/button";

export default function ErrorMessage({ error = "", page = "" }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-red-600 font-semibold">⚠️ Couldn’t load {page}</p>
      <p className="text-sm text-gray-500 mb-4">{error}</p>
      <Button
        onClick={() => window.location.reload()}
        className="bg-blue-500 hover:bg-blue-700 text-white"
      >
        Retry
      </Button>
    </div>
  );
}
