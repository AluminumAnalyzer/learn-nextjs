'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

const ErrorPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const back = useCallback(() => router.push('/'), []);
  return (
    <div>
      <p>현재 경로: {pathname}</p>
      <p>이 페이지는 존재 하지 않습니다.</p>
      <button onClick={back}>메인 페이지로 이동...</button>
    </div>
  );
};

export default ErrorPage;
