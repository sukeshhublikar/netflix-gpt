import React from "react";
import { ErrorBoundary as BaseErrorBoundary } from "react-error-boundary";

export default function ErrorBoundary({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <BaseErrorBoundary
      fallbackRender={({ error }:{error:Error}) => (
        <div>An error occurred: {error.message}</div>
      )}
    >
      {children}
    </BaseErrorBoundary>
  );
}
