// import './App.css';

const Requisite = ({capLetterFlag,smallLetterFlag,numberFlag,pwdLengthFlag,specialCharFlag}) => {
    
  return (
    <div className='rules'>
        <p className={capLetterFlag}>Must be 1 Capital Letter</p>
        <p className={smallLetterFlag}>Must be 1 small Letter</p>
        <p className={numberFlag}>Must Contain Numbers</p>
        <p className={pwdLengthFlag}>Must be 8 Character</p>
        <p className={specialCharFlag}>must be 1 special char</p>
    </div>
  )
}

export default Requisite