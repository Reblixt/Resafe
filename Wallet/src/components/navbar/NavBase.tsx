export const NavBase = ({ chain }) => {
  return (
    <div className="navContainer">
      <nav>
        <div className="chainContianer">
          <a> {chain} </a>
        </div>
        <h1>Resafe Wallet</h1>
        <div className="imgContainer">
          <img src="#" />
        </div>
      </nav>
    </div>
  );
};
