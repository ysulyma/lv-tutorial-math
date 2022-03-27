interface Props extends React.HTMLAttributes<HTMLElement> {
  blockTitle?: React.ReactChild;
}

const block = (className: string) => function(props: Props) {
  const {blockTitle, children, ...attrs} = props;
  return (
    <aside className={`block ${className}`} {...attrs}>
      <header>
        {blockTitle && (className === "block" ? "" : "(")}
        {blockTitle}
        {blockTitle && (className === "block" ? "" : ")")}
      </header>
      <div className="content">{children}</div>
    </aside>
  );
}

export const Block = block("");
export const Corollary = block("corollary");
export const Definition = block("definition");
export const Example = block("example");
export const Exercise = block("exercise");
export const Lemma = block("lemma");
export const Remark = block("remark");
export const Proof = block("proof");
export const Proposition = block("proposition");
export const Theorem = block("theorem");
