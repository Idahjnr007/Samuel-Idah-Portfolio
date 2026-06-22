function Header({ navItems, activeTarget, onTabClick, mobileOpen, onToggleMobile }) {
  return (
    <header className="topbar">
      <div className="traffic">
        <span className="dot red"></span>
        <span className="dot gold"></span>
        <span className="dot teal"></span>
      </div>

      <nav className="tabs" id="tabs" aria-label="Main Navigation">
        {navItems.map((item) =>
          item.external ? (
            <a
              key={item.target}
              className="tab-btn mono"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ) : (
            <a
              key={item.target}
              className={`tab-btn mono${activeTarget === item.target ? ' active' : ''}`}
              href={item.href}
              onClick={(e) => onTabClick(e, item.target)}
            >
              {item.label}
            </a>
          )
        )}
      </nav>

      <button
        className="mobile-toggle"
        id="mobileToggle"
        aria-label="Toggle Navigation"
        onClick={onToggleMobile}
      >
        ☰
      </button>
    </header>
  );
}

export default Header;
