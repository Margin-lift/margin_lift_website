import { footer } from '@/lib/content'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fend">
          <span className="fend-brand">
            {footer.brand}
            <sup>™</sup>
          </span>
          <span className="fend-tag">{footer.tag}</span>
        </div>
      </div>
    </footer>
  )
}
