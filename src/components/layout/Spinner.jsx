import spinner from '../../assets/image/spinner.gif';

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt="Loading..."
        style={{
          display: 'block',
          margin: 'auto',
          width: '200px',
        }}
      />
    </>
  );
};

export default Spinner;
