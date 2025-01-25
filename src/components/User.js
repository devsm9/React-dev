const User = (props) => {
  return (
    <div className="user-info">
      <h2>{props.name}</h2>
      <h2 className="user-infoh">Location-</h2>
      <h3 className="user-infoh">Information</h3>
      <h4 className="user-infoh">Contact</h4>
    </div>
  );
};

export default User;
