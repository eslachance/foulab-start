import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/tanstack-start'

import { TinyIcons } from './TinyIcons';

const openStatus = `
 ██████  ██████  ███████ ███    ██
██    ██ ██   ██ ██      ████   ██
██    ██ ██████  █████   ██ ██  ██
██    ██ ██      ██      ██  ██ ██
 ██████  ██      ███████ ██   ████
`;

export const Header = () => {
  return (
    <div id="header" className="bg-black color-white relative h-[168px] border-x-solid border-x-[#22180b] border-x-[1px] bg-[url('/img/header.png')]">
      <canvas id="gl_canvas" className="absolute left-0 top-0 w-full h-full z-10 hidden" />
      <div className="absolute right-2 top-0">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
      <div id="status" className="z-2 absolute right-2 top-2 text-xs text-[#eee] h-[50px] w-[150px] my-0 mt-[30px] mb-[10px] text-center">
        STATUS
        <span className="text-[8px] font-mono whitespace-pre">{openStatus}</span>
      </div>
      <TinyIcons />
    </div>
  )
};
