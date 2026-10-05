import { useId, type SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & { inverse?: boolean };

export function Brandmark({ className = "", inverse = false, ...props }: LogoProps) {
  const maskId = useId();
  return (
    <svg {...props} className={className} viewBox="0 0 190 190" role="img" aria-label="Green Falls Co.">
      <defs><mask id={maskId}><rect width="165" height="180" fill="#fff" /><path d="M82 68C69 79 65 84 65 92s7 13 17 23v48" fill="none" stroke="#000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" /></mask></defs>
      <g transform="translate(15 10)">
        <g fill={inverse ? "#F8FAF7" : "#353B24"} mask={`url(#${maskId})`}><path d="M18 34 69 8c7-4 13 0 13 8v55c0 6-2 10-7 15l-8 8 15 16v54l-64-28c-5-3-8-7-8-13V47c0-6 3-10 8-13Z" /><path d="M93 76h47c8 0 12 4 12 12v62c0 8-4 12-12 12H91c-7 0-11-4-11-11v-39L68 99c-6-6-6-13 0-19l12-12c4-4 8 8 13 8Z" /></g>
        <path d="M82 68C69 79 65 84 65 92s7 13 17 23v48" fill="none" stroke="#2A9AB7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function BrandLogo({ className = "", inverse = false }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 951 150" role="img" aria-label="Green Falls Co.">
      <Brandmark x="0" y="0" width="150" height="150" inverse={inverse} aria-hidden="true" />
      <image
        href="/brand/approved-horizontal-wordmark.png"
        x="175"
        y="26"
        width="776"
        height="98"
        aria-hidden="true"
        style={inverse ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </svg>
  );
}
