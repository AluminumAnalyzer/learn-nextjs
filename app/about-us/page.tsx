import SchdeulerComponent from '../../components/calendar/Calendar';
import { Suspense } from 'react';

export const metadata = {
  title: 'About Us',
};

function Home() {
  return (
    <div>
      <div>스케줄러</div>
      <Suspense fallback={<div>로딩중</div>}>
        <SchdeulerComponent />
      </Suspense>
    </div>
  );
}

export default Home;
