'use client';

import rocket from 'logrocket';

export default function LogRocket() {
  const logrocketId = process.env.NEXT_PUBLIC_LOGROCKET_ID || 'cgz5qz/thnkandgrowcom';

  setTimeout(() => {
    rocket.init(logrocketId);
  }, 100);
  return null;
}
