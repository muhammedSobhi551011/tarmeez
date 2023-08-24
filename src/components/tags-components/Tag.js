const Tag = ({ name, children }) => {
  return (
    <>
      {name == null || name === "" ? null : (
        <li>
          <span>{name}</span>
          {children}
        </li>
      )}
    </>
  );
};

export default Tag;
