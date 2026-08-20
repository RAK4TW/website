import { cn } from '../../../utils/cn';
import './CtaCalloutBanner.css';

export interface CtaCalloutBannerProps {
  id?: string;
  heading: string;
  subheading?: string;
  className?: string;
  imageSrc?: string | { url: string };
  linkUrl?: string;
  linkText?: string;
  onClick?: () => void;
}

export function CtaCalloutBanner({
  id,
  heading,
  subheading,
  linkUrl,
  linkText,
  imageSrc,
  className,
  onClick,
}: CtaCalloutBannerProps) {
  const imageUrl = typeof imageSrc === 'string' ? imageSrc : imageSrc?.url;

  const bannerHref: string | undefined = linkUrl ?? undefined;
  const bannerText: string | undefined = linkText ?? (bannerHref ? 'Learn more' : undefined);

  const bannerContent = (
    <>
      <span className="textSection">
        <span className={cn('heading', !subheading && 'spacing')}>
          {heading}
        </span>
        {subheading && <span className="subheading">{subheading}</span>}
        {bannerText && (
          <span className="link">
            <span className="shimmer">{bannerText}</span>
            {bannerHref && (
              <span className="arrowRight" aria-hidden="true">
                →
              </span>
            )}
          </span>
        )}
      </span>

      {imageUrl && (
        <span
          className="imageSection"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      )}
    </>
  );

  return (
    <div id={id} onClick={onClick} className={cn('ctaCalloutBannerContainer', className)}>
      {bannerHref ? (
        <a href={bannerHref} className="ctaCalloutBanner">
          {bannerContent}
        </a>
      ) : (
        <div className="ctaCalloutBanner">{bannerContent}</div>
      )}
    </div>
  );
}

export default CtaCalloutBanner;
