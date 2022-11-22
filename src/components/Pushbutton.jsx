const Pushbutton = ({getRandomAll, objectBgStyle}) => {
  return (
    <button
      className="card__button"
      onClick={getRandomAll}
      style={objectBgStyle}
    >
      &#62;
    </button>
  );
};

export default Pushbutton;
