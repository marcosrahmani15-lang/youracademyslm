import React from 'react';
import { AcademyBook } from '../types';
import yourEnglish1Cover from '../assets/images/regenerated_image_1793011016882.jpg';
import yourEnglish2Cover from '../assets/images/regenerated_image_1793011020239.jpg';
import yourEnglish3Cover from '../assets/images/regenerated_image_1793011024408.jpg';
import yourEnglish4Cover from '../assets/images/regenerated_image_1793011032421.jpg';
import yourEnglish5Cover from '../assets/images/regenerated_image_1793011028319.jpg';
import yourEnglish6Cover from '../assets/images/regenerated_image_1793011036192.jpg';

interface OfficialBookCoverProps {
  book: AcademyBook;
  className?: string;
  isModal?: boolean;
}

/**
 * OfficialBookCover
 *
 * Renders each approved Your Academy book cover as an independent, unobstructed
 * HTML <img> element using its dedicated original cover image asset.
 */
export const OfficialBookCover: React.FC<OfficialBookCoverProps> = ({
  book,
  className = '',
  isModal = false,
}) => {
  return (
    <div
      className={`book-cover-container rounded-2xl border-2 border-zinc-200/80 dark:border-amber-400/25 bg-[#0B101D] shadow-[0_14px_36px_-6px_rgba(0,0,0,0.45)] ${className}`}
    >
      {book.id === 'book-your-english-1' ? (
        <img
          id={isModal ? undefined : 'book-cover-your-english-1'}
          src={yourEnglish1Cover}
          alt="Your English 1 — Student's Book & Workbook"
          className="book-cover-image"
        />
      ) : book.id === 'book-your-english-2' ? (
        <img
          id={isModal ? undefined : 'book-cover-your-english-2'}
          src={yourEnglish2Cover}
          alt="Your English 2 — Student's Book & Workbook"
          className="book-cover-image"
        />
      ) : book.id === 'book-your-english-3' ? (
        <img
          id={isModal ? undefined : 'book-cover-your-english-3'}
          src={yourEnglish3Cover}
          alt="Your English 3 — Student's Book & Workbook"
          className="book-cover-image"
        />
      ) : book.id === 'book-your-english-4' ? (
        <img
          id={isModal ? undefined : 'book-cover-your-english-4'}
          src={yourEnglish4Cover}
          alt="Your English 4 — Student's Book & Workbook"
          className="book-cover-image"
        />
      ) : book.id === 'book-your-english-5' ? (
        <img
          id={isModal ? undefined : 'book-cover-your-english-5'}
          src={yourEnglish5Cover}
          alt="Your English 5 — Student's Book & Workbook"
          className="book-cover-image"
        />
      ) : book.id === 'book-your-english-6' ? (
        <img
          id={isModal ? undefined : 'book-cover-your-english-6'}
          src={yourEnglish6Cover}
          alt="Your English 6 — Student's Book & Workbook"
          className="book-cover-image"
        />
      ) : (
        <img
          src={book.coverImage || yourEnglish1Cover}
          alt={book.title}
          className="book-cover-image"
        />
      )}
    </div>
  );
};
