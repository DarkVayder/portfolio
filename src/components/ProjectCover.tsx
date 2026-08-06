type Props = {
  title: string;
  accent: string;
};

const ProjectCover = ({ title, accent }: Props) => {
  const initial = title.charAt(0);

  return (
    <svg
      viewBox="0 0 480 320"
      className="h-full w-full"
      role="img"
      aria-label={`${title} cover`}
    >
      <defs>
        <linearGradient id={`grad-${title}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0a0a0b" stopOpacity="1" />
        </linearGradient>
        <pattern id={`grid-${title}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="480" height="320" fill={`url(#grad-${title})`} />
      <rect width="480" height="320" fill={`url(#grid-${title})`} />
      <circle cx="380" cy="60" r="120" fill={accent} fillOpacity="0.12" />
      <text
        x="40"
        y="220"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="140"
        fontWeight="600"
        fill={accent}
        fillOpacity="0.9"
      >
        {initial}
      </text>
    </svg>
  );
};

export default ProjectCover;
