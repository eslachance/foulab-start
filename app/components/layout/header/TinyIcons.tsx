const tinyBarIcons = 'h-[20px] w-[20px] transition-height transition-width duration-150 hover:h-[35px] hover:w-[35px]'
const tinyBarLink = 'text-white text-normal p-0 m-0 no-underline bg-transparent'

export const TinyIcons = () => {
  return (
    <div className="m-0 absolute right-2 bottom-2 z-2 flex gap-1">
    <a href="https://github.com/FOULAB" title="Foulab GitHub" className={tinyBarLink}>
      <img className={tinyBarIcons} src="/img/git.png" alt="Link to Foulab GitHub" />
    </a>
    <a href="https://test.foulab.org/" title="Mattermost Server" className={tinyBarLink}>
      <img className={`${tinyBarIcons} bg-white rounded-sm`} src="/img/mattermost.svg" alt="Link to Mattermost Server" />
    </a>
    <a href="https://web.libera.chat/?channels=#foulab" title="IRC Webchat" className={tinyBarLink}>
      <img className={tinyBarIcons} src="/img/irc.png" alt="Link to IRC Webchat" />
    </a>
    <a href="https://twitter.com/foulab" title="Twitter" className={tinyBarLink}>
      <img className={tinyBarIcons} src="/img/twt.png" alt="Link to Twitter" />
    </a>
    <a href="/news/index.xml" title="RSS Feed" className={tinyBarLink}>
      <img className={tinyBarIcons} src="/img/rss.png" alt="Link to RSS Feed" />
    </a>
    <a href="mailto:friends.of.foulab-subscribe@lists.riseup.net" title="Mailing List" className={tinyBarLink}>
      <img className={tinyBarIcons} src="/img/eml.png" alt="Link to Mailing List" />
    </a>
    <a href="https://www.facebook.com/groups/144161830009" title="Facebook Group" className={tinyBarLink}>
      <img className={tinyBarIcons} src="/img/fb.png" alt="Link to Facebook Group" />
    </a>
  </div>
  )  
}
