'use client';

import parse from 'html-react-parser';

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return <>{parse(content)}</>;
}
