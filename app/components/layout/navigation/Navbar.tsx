import { useLocation, Link } from '@tanstack/react-router';
import type { LinkProps } from '@tanstack/react-router';

const NavLink = ({ to, children }: LinkProps) => {
  const normalizedLink = 'block color-white font-normal font-[12pt] no-underline'
  return (
    <li
      className="text-white text-left text-sm pl-3 hover:bg-[#bbb] hover:pl-5"
      style={{ transition: 'background-color .25s linear, padding-left .15s'}}
    >
      <Link to={to} className={normalizedLink} title={children as string} activeProps={{ className: normalizedLink }}>
        {children}
      </Link>
    </li>
  )
}

const NavHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="text-white text-right border-b-[1px] border-b-solid border-b-[#4a4a4a]">{children}</h4>
  )
}

const PatreonButton = () => {
  return (
    <a role="button"
      className="font-sans text-white text-[16px] select-none font-bold bg-[#e6461a] px-3 py-1 rounded-md no-underline border-1 border-solid border-[#e6461a] flex gap-1 items-center"
      href="https://www.patreon.com/bePatron?u=6155868&redirect_uri=https%3A%2F%2Ffoulab.org%2Ftestbed%2F&utm_medium=widget">
      <img src="/img/patreon-logo.svg" alt="Patreon logo" className="w-[14px] h-[14px]" />
      Pledge Here</a>
  )
}

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div id="nav" className="bg-[#757575] border-l-2 border-[#22180b] border-l-solid p-2 text-sm text-right basis-[175px] grow-1">
      <div className="sticky top-0 pt-2">
        <NavHeader>MENU</NavHeader>

        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/exposition">The Lab</NavLink>
          <NavLink to="/about">About Foulab</NavLink>
          <NavLink to="/location">Getting Here</NavLink>
          <NavLink to="/contact">Contact Foulab</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
        </ul>

        <NavHeader>SUPPORT US</NavHeader>
        <section className="flex flex-col content-center gap-1">
          <div id='foulab-shopify-button'></div>
          {/* <script type="text/javascript" src="/js/shopifydonation.js"></script> */}
          <PatreonButton />
        </section>
        {pathname == '/' && (
          <>
            <NavHeader>SPONSORED BY</NavHeader>
            <section className="flex flex-col content-center gap-1">
              <a href="https://usedservers.ca" target="_blank">
                <img src="/img/usedservers.png"
                  alt="Used Servers"
                  className="w-full bg-white rounded-sm"
                />
              </a>
              <a href="https://canservers.com" target="_blank">
                <img src="/img/canservers.svg"
                  alt="Canadian Servers"
                  className="w-full bg-white px-2 py-0 rounded-sm"
                />
              </a>
            </section>
          </>
        )}
      </div>
    </div>
  )
};
