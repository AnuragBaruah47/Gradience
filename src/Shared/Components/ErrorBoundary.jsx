import { ErrorBoundary } from "react-error-boundary"

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">Something went wrong 🚨</h1>
      <p className="text-sm text-gray-500">{error.message}</p>

      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Retry
      </button>
    </div>
  )
}

export default function AppErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  )
}