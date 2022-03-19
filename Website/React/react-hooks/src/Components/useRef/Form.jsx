import React,{forwardRef} from 'react'

const Form = forwardRef(({ handleClick }, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
});

export default Form