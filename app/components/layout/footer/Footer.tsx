export const Footer = () => {
  return (
    <div
      id="footer"
      className={`
        h-[76px] bg-[#333] border-x-solid border-x-[#22180b] border-x-[1px]
        text-[7pt] py-6 text-center`}
    >
      <div className="flex items-center justify-center ">

      <a href="http://jigsaw.w3.org/css-validator/" title="Valid CSS">
        <img src="/img/valid_css_80x15.png" alt="Valid CSS" />
      </a>
      <a
        href="http://www.w3.org/WAI/WCAG1A-Conformance"
        title="Level A conformance icon, W3C-WAI Web Content Accessibility Guidelines 1.0"
      >
        <img
          src="/img/valid_wai-a_80x15.png"
          alt="Level A conformance icon, W3C-WAI Web Content Accessibility Guidelines 1.0"
        />
      </a>
      <a
        href="http://creativecommons.org/licenses/by-nc/3.0/"
        title="Creative Commons Non-commercial License with Attribution 3.0"
      >
        <img
          src="/img/license_cc_80x15.png"
          alt="Creative Commons Non-commercial License with Attribution 3.0"
        />
      </a>
      <img
        src="/img/madeinquebec_80x15.png"
        alt="Made in Quebec"
        title="Made in Quebec"
      />
      </div>
      <div>
        Except where otherwise noted, content on this site is licensed under a
        Creative Commons Non-Commercial with Attribution 3.0 License.&nbsp;
        <a href="http://creativecommons.org/licenses/by-nc/3.0/" className="color-white">
          Creative Commons Non-commercial Attribution 3.0 License
        </a>
      </div>
    </div>
  );
}
