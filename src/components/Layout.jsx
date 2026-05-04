import { Link } from 'react-router-dom';

const menuLinks = [
  { name: 'About', link: '/' },
  { name: 'Candidate Views', link: '/candidate-views' },
  { name: 'Voters Guide', link: '/guide' },
  { name: 'Contact Us', link: '/contact' },
];

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <header style={{ background: '#A4CC8D', marginBottom: '1.45rem' }}>
        <div style={{ margin: '0 auto', maxWidth: 960, padding: '1.45rem 1.0875rem', display: 'flex', alignItems: 'center' }}>
          <div className="logo">
            <Link to="/">
              <img src="/images/vgi-logo-transparant.png" width="300" height="85" alt="Voters for a Green Indiana" />
            </Link>
          </div>
          <nav>
            <ul>
              {menuLinks.map(link => (
                <li key={link.name} style={{ listStyleType: 'none' }}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="body" style={{ margin: '0 auto', maxWidth: 960, padding: '0px 1.0875rem 66px', paddingTop: 0 }}>
        {children}
      </main>
      <footer style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '20px' }}>
        © {new Date().getFullYear()} Voters for a Green Indiana
      </footer>
    </div>
  );
}
