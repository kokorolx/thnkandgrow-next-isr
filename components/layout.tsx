import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
        <SpeedInsights/>
        <Analytics/>
      </div>
      <Footer />
    </>
  );
}
