import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

const NotesPage = ({ children }) => {
  return (
    <Layout>
      <Link to="/" className="ulink text-xs uppercase tracking-[0.18em] text-muted">
        ← back
      </Link>

      <div className="mt-8 [&_a]:text-ink [&_a:hover]:text-muted [&_a]:underline [&_a]:underline-offset-[3px] [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_p]:mb-2 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted">
        {children}
      </div>

      <p className="mt-10 border-t border-line pt-4 text-xs italic text-faint">
        These notes are my personal interpretations of the original work, for informational use
        only. All copyrights belong to the original authors.
      </p>
    </Layout>
  );
};

export default NotesPage;
