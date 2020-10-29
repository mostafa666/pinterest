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
        <img src="./assets/pinterest.svg" width="30" />
        <h1>welcome to pinterest</h1>
      <input name="email" ref={register({ required: true })} />
      {errors.email && <p>email is required.</p>}
      <input name="password" ref={register({ required: true })} />
      {errors.password && <p>password is required.</p>}
      <Link href="/">go home</Link>
      <input type="submit" />
    </form>
  );
}
