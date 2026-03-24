import React, { useState } from 'react';

const ApiCard = ({ api }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(api.Link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-200/50">
      <div className=" bg-blue-500 px-5 py-4">
        <h3 className="truncate text-lg font-bold text-white">{api.API}</h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="line-clamp-3 mb-4 min-h-[4.5rem] text-sm text-slate-600">
          {api.Description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {api.Category}
          </span>
          {api.Auth && (
            <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Auth Required
            </span>
          )}
          {api.CORS === 'yes' && (
            <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              CORS
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          <a
            href={api.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block flex-1 rounded-xl bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
          >
            Visit API
          </a>

          <button
            onClick={copyToClipboard}
            className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${copied
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          HTTPS: {api.HTTPS ? 'Yes' : 'No'} • Auth: {api.Auth ? 'Required' : 'Not Required'}
        </p>
      </div>
    </article>
  );
};

export default ApiCard;
