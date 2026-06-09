import React from 'react';
import { WritingList, InputsList } from './ReadingList';

// Editorial section: readable title + a faint index number, with a hairline rule.
const Section = ({ index, title, children }) => (
  <section className="mt-14 first:mt-2">
    <div className="flex items-baseline justify-between border-b border-line2 pb-2">
      <h2 className="text-base font-bold tracking-tight">{title}</h2>
      <span className="text-xs tabular-nums text-faint">{index}</span>
    </div>
    <div className="mt-5">{children}</div>
  </section>
);

const Profile = () => {
  return (
    <div>
      <p className="text-[15px] leading-relaxed text-muted">
        Studied math, econ, finance, and CS. Jack of all trades, master of none.
      </p>

      <Section index="01" title="Writing">
        <WritingList />
      </Section>

      <Section index="02" title="Reading & Watching">
        <InputsList />
      </Section>

      <Section index="03" title="Connect">
        <p className="text-sm text-muted">
          DMs welcome —{' '}
          <a className="ulink" href="https://twitter.com/0x_jefuture" target="_blank" rel="noreferrer">
            Twitter
          </a>
          {' · '}
          <a className="ulink" href="https://ca.linkedin.com/in/jeffery-sun" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {' · '}
          <a className="ulink" href="https://substack.com/@0xjeffery" target="_blank" rel="noreferrer">
            Substack
          </a>
        </p>
        <p className="mt-3 text-xs italic text-faint">
          No judgement please — everyone gets a bit wonky (or overly normal) on social media.
        </p>
      </Section>
    </div>
  );
};

export default Profile;
