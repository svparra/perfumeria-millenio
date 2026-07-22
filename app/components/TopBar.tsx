const items = [
  "PERFUMERÍA 100% ORIGINAL CERTIFICADA",
  "ENVÍOS GRATIS DESDE $250.000",
  "PAGO CONTRAENTREGA EN TODO COLOMBIA",
  "10% OFF EN TU PRIMERA COMPRA",
];

export default function TopBar() {
  return (
    <div className="bg-emerald text-cream text-xs sm:text-sm tracking-wide overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-2 text-center">
        <p className="hidden sm:block">{items[0]}</p>
        <span className="hidden sm:block text-gold">•</span>
        <p className="hidden md:block">{items[1]}</p>
        <span className="hidden md:block text-gold">•</span>
        <p className="hidden lg:block">{items[2]}</p>
        <span className="hidden lg:block text-gold">•</span>
        <p className="hidden lg:block">{items[3]}</p>
        <p className="sm:hidden">{items[0]}</p>
      </div>
    </div>
  );
}
