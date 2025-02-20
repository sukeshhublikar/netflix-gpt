function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-500 mb-6">
          We're sorry, but something went wrong on our end. Please try again
          later or contact support.
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

export default Error;
