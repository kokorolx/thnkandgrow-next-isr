'use client';

// import LogRocket from '@/components/LogRocket';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Analytics() {
  return (
    <>
      {/* <LogRocket /> */}
      <VercelAnalytics />
      <SpeedInsights />
      <GoogleAnalytics gaId="G-KD7JRK2YJ6" />
    </>
  );
}
