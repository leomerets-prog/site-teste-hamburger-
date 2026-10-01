export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#inicio"
      className={`brand ${className}`}
      aria-label="Me Poupa — início"
    >
      <img
        src="/marca/logo-instagram.jpg"
        alt="Me Poupa Burgers & Shakes"
        width="60"
        height="60"
      />
      <span aria-hidden="true">
        BURGERS
        <br />& SHAKES<span className="brand-city">POÇOS DE CALDAS</span>
      </span>
    </a>
  );
}
