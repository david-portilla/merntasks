const Header = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>David</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Sign out</a>
      </nav>
    </header>
  );
};

export default Header;
