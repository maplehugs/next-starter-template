import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // enables static export for GitHub Pages
    images: {
        unoptimized: true, // required for static export
    },
    basePath: "",       // leave empty since you use 5maple.com custom domain
    assetPrefix: "",    // also leave empty for custom domain
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
