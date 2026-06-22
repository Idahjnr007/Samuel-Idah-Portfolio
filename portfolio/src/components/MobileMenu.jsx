function MobileMenu({ navItems, activeTarget, onTabClick, isOpen }) {
  return (
    <nav className={`mobile-menu${isOpen ? ' open' : ''}`} id="mobileMenu">
      {navItems.map((item) =>
        item.external ? (
          <a
            key={item.target}
            className="mono"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ) : (
          <a
            key={item.target}
            className={`mono${activeTarget === item.target ? ' active' : ''}`}
            href={item.href}
            onClick={(e) => onTabClick(e, item.target)}
          >
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}

export default MobileMenu;
