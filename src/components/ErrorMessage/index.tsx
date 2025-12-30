import clsx from 'clsx';
import React from 'react';

type ErrorMessageProps = {
  pageTitle: string;
  cotentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  content,
  cotentTitle,
  pageTitle,
}: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>

      <div
        className={clsx(
          'min-h-[320] bg-slate-900 text-slate-100',
          'mb-16 p-8 rounded-xl',
          'flex items-center justify-center',
          'text-center',
        )}
      >
        <div>
          <h1 className='text-7xl/tight mb-4 font-extrabold'>{cotentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}
