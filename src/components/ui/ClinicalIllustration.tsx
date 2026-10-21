export default function ClinicalIllustration() {
  return (
    <svg className="clinical-illustration" viewBox="0 0 560 390" role="img" aria-labelledby="illustration-title">
      <title id="illustration-title">Illustration of a protected digital healthcare record</title>
      <circle cx="290" cy="190" r="165" fill="#eaf3ff" />
      <rect x="150" y="65" width="335" height="240" rx="20" fill="#b9d4f0" />
      <rect x="164" y="79" width="307" height="212" rx="12" fill="#ffffff" />
      <rect x="184" y="100" width="162" height="170" rx="12" fill="#f1f7fd" />
      <circle cx="223" cy="141" r="25" fill="#3777c8" />
      <path d="M223 128v26M210 141h26" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
      <rect x="260" y="131" width="70" height="9" rx="4" fill="#8bb7eb" />
      <rect x="260" y="149" width="57" height="9" rx="4" fill="#c1d8f3" />
      <rect x="201" y="185" width="128" height="9" rx="4" fill="#c8ddf4" />
      <rect x="201" y="205" width="108" height="9" rx="4" fill="#c8ddf4" />
      <rect x="201" y="225" width="88" height="9" rx="4" fill="#c8ddf4" />
      <rect x="359" y="100" width="95" height="170" rx="10" fill="#f5f9fd" />
      <circle cx="380" cy="126" r="8" fill="#a6c6e9" />
      <rect x="395" y="121" width="42" height="7" rx="3" fill="#d1e0f1" />
      <rect x="395" y="136" width="30" height="7" rx="3" fill="#d1e0f1" />
      {[165, 192, 219, 246].map((y) => <g key={y}><rect x="373" y={y} width="12" height="12" rx="3" fill="#d8e7f7" /><rect x="395" y={y + 3} width="42" height="6" rx="3" fill="#d1e0f1" /></g>)}
      <path d="M80 180 126 162 172 180v40c0 39-25 65-46 77-21-12-46-38-46-77Z" fill="#3777c8" stroke="#ffffff" strokeWidth="7" strokeLinejoin="round" />
      <rect x="108" y="218" width="36" height="31" rx="5" fill="#ffffff" />
      <path d="M115 218v-10a11 11 0 0 1 22 0v10" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
      <circle cx="126" cy="232" r="4" fill="#3777c8" />
      <path d="M126 235v6" stroke="#3777c8" strokeWidth="3" strokeLinecap="round" />
      <path d="M100 320h380" stroke="#d9e9fa" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
