const Grid = ({ title, children, className }) => (
  <div className={className}>
    <h2 className="pb-4 text-xl font-bold">{title}</h2>
    <div className="grid grid-cols-auto-fill gap-8">{children}</div>
  </div>
);

export default Grid;
