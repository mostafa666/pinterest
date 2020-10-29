import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link'
 
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
        <Link href="/forgetPassword">رمزعبور خود را فراموش کرده اید؟</Link>
        <input type="submit" value="login" />
        <p className="ruls">با ورود و یا ثبت نام در پینترست شما شرایط و قوانین استفاده از سرویس های سایت پینترست و قوانین حریم خصوصی آن را می‌پذیرید.</p>
        <p className="pleaseRegister">اگر قبلا عضو نشده اید همین الان <Link href="/register">ثبت نام </Link>کنید</p>
      </div>
    </form>
  );
}
