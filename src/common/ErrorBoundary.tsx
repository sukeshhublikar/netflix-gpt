import { isRouteErrorResponse } from "react-router-dom";

// Define the type for the error prop
interface ErrorBoundaryProps {
  error: Error | RouteErrorResponse;
}

// Define the type for a RouteErrorResponse
interface RouteErrorResponse {
  status: number;
  statusText: string;
  data: any;
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    // If it's a RouteErrorResponse, show the error details
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    // If it's a regular JavaScript Error, show the error message and stack
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    // If it's neither, show a generic error
    return <h1>Unknown Error</h1>;
  }
}
