import { useState } from 'react'
import Requisite from './Requisite';

const LoginUI = () => {

    const [show, setShow] = useState(false);
    const [requisite, setRequisite] = useState(false);
    const [cheks, setChecks] = useState({
        capLetterCheck: false,
        smallLetterCheck: false,
        numberCheck: false,
        pwdLengthCheck: false,
        specialCharCheck: false,


    })

    const handleOnChange = e => {
        console.log(e.target.value);
    };

    const handleOnFocus = () => {
        setRequisite(true);
    }
    const handleOnBlur = () => {
        setRequisite(false);
    }


    const handleOnKeyUp = (e) => {
        const { value } = e.target;
        const capLetterCheck = /[A-Z]/.test(value);
        const smallLetterCheck = /[a-z]/.test(value);
        const numberCheck = /[0-9]/.test(value);
        const pwdLengthCheck = value.length >= 8;
        const specialCharCheck = /[!@#$%^&*]/.test(value);
        setChecks({
            capLetterCheck,
            smallLetterCheck,
            numberCheck,
            pwdLengthCheck,
            specialCharCheck,
        });

    };





    const handleShowHide = () => {
        setShow(!show);

    }

   


    return (
        <>

          
                <div className="bgImg">
                <div className="wrapper">
                    <form action="">
                        <input type="email" className='email' placeholder='Enter Your Email' required />
                        <div className='eye'>
                            <input required type={show ? "text" : "password"} className='password' placeholder='Enter Your Password' onChange={handleOnChange}
                                onFocus={handleOnFocus}
                                onBlur={handleOnBlur}
                                onKeyUp={handleOnKeyUp}


                            />
                            {
                                show ?
                                    (
                                        <i class="fa-solid fa-eye" id='ShowHide' onClick={handleShowHide}></i>
                                    ) : (
                                        <i class="fa-solid fa-eye-slash" id='ShowHide' onClick={handleShowHide} ></i>

                                    )
                            }
                        </div>

                        {requisite ? <Requisite capLetterFlag={cheks.capLetterCheck ? "valid" : "invalid"}
                            smallLetterFlag={cheks.smallLetterCheck ? "valid" : "invalid"}
                            numberFlag={cheks.numberCheck ? "valid" : "invalid"}
                            pwdLengthFlag={cheks.pwdLengthCheck ? "valid" : "invalid"}
                            specialCharFlag={cheks.specialCharCheck ? "valid" : "invalid"}
                        /> : null}

                        <button className="Submit" disabled={!cheks.capLetterCheck || !cheks.smallLetterCheck || !cheks.numberCheck || !cheks.pwdLengthCheck || !cheks.specialCharCheck ? true : false}>Submit</button>
                    </form>

                </div>
                </div>

        </>
    )
}

export default LoginUI