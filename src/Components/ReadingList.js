import React from 'react';
import { Link } from 'react-router-dom';
import { books, medias, thoughts } from '../database';

const ReadingList = ({ items }) => {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.title} className="flex gap-x-3">
          <span className="shrink-0 select-none pt-[2px] text-faint">—</span>
          <div className="min-w-0 flex-1">
            <span className="text-sm leading-snug [overflow-wrap:anywhere]">
              {item.link ? (
                <a className="ulink font-bold" href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              ) : (
                <span className="font-bold text-ink">{item.title}</span>
              )}
              {item.author && <span className="text-faint"> · {item.author}</span>}
              {item.notes && (
                <Link
                  to={item.notes}
                  target="_blank"
                  className="ulink ml-1.5 whitespace-nowrap text-[12px] text-muted"
                >
                  [notes&nbsp;↗]
                </Link>
              )}
            </span>
            {item.description && (
              <p className="mt-1 text-[13px] leading-snug text-muted">{item.description}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

// Newest first by `date` (YYYY-MM); undated items keep their original order after dated ones.
const byDateDesc = (a, b) => {
  if (a.date && b.date) return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  if (a.date) return -1;
  if (b.date) return 1;
  return 0;
};

// What I write (essays, notes, thoughts).
export const WritingList = () => <ReadingList items={thoughts} />;
// What I read & watch (books + articles/media, merged, date-ranked).
export const InputsList = () => <ReadingList items={[...books, ...medias].sort(byDateDesc)} />;
