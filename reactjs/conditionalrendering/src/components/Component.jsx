const Component = ({ hasMessage }) => {
  return (
    <div>
      <h2>Dashboard</h2>

      {hasMessage && <h2>You have a notification</h2>}
    </div>
  );
};

const NewComponent = () => {
  return <div></div>;
};

export { Component, NewComponent };
