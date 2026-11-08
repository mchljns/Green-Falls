import { redirect } from "next/navigation";

// Short link for Mix Assistant, the church sound app: greenfalls.co/mix downloads the Mac installer.
export default function MixPage() { redirect("https://github.com/mchljns/AI-Audio-Engineer-/raw/stable/dist/Mix-Assistant-Installer.zip"); }
