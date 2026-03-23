import { useRouteError, useNavigate } from "react-router-dom"

export default function RouteError() {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Something broke 🚨</h1>

      <p className="text-sm text-gray-500">
        {error?.message || "Unknown error"}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Reload
        </button>

        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 border rounded"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}