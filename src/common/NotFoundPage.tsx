function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="text-lg font-medium text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
