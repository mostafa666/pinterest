import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link'
import Loading from './Loading';
 
export default () =>  {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
 
  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <img src="./assets/pinterest.svg" width="30" />
        <h1>به پینترست خوش آمدید</h1>
        <input placeholder="ایمیل خودرا وارد نمایید" name="email" ref={register({ required: true })} />
        {errors.email && <p>ایمیل اجباری است</p>}
        <input name="password" placeholder="رمزعبور خود را وارد نمایید" ref={register({ required: true, minLength: 8 })} />
        {errors.password && errors.password.type === 'required' && <p>رمزعبور اجباری است</p>}
        {errors.password && errors.password.type === 'minLength' && <p>password length must be leatest 8 character</p>}
        <input name="age" placeholder="سن خود را وارد نمایید" ref={register({ required: true })} />
        {errors.age && <p>سن اجباری است</p>}
        <Link href="/forgetPassword">رمزعبور خود را فراموش کرده اید؟</Link>
        <button type="submit">
            ثبت نام
        </button>
        <p className="ruls">با ورود و یا ثبت نام در پینترست شما شرایط و قوانین استفاده از سرویس های سایت پینترست و قوانین حریم خصوصی آن را می‌پذیرید.</p>
      </div>
    </form>
  );
}
