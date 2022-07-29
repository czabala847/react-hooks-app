import React from "react";

interface Props {
  quote: string;
  author: string;
}

export const Quote: React.FC<Props> = ({ quote, author }) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{quote}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );
};
