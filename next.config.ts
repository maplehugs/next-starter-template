import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",        // ensures ./out includes CSS/JS bundles
    images: { unoptimized: true },
    basePath: "",
    assetPrefix: "",
    trailingSlash: true,     // 👈 helps static exports include CSS/JS correctly
};

export default nextConfig;

// keep this for dev (Cloudflare)
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
