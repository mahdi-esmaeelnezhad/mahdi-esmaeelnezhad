import { useReveal } from '../useReveal';

interface Props {
  kicker: string;
  title: string;
  subtitle?: string;
}

export function SectionHead({ kicker, title, subtitle }: Props) {
  const ref = useReveal();
  return (
    <div className="section-head reveal" ref={ref}>
      <div className="os-bar">
        <span className="os-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="os-path">
          {kicker} — {title}
        </span>
      </div>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}
