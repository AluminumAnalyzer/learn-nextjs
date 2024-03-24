'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

const ErrorPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default ErrorPage;
