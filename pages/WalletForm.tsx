import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createWallet } from '../redux/wallets/actions';

export default function NewWalletForm() {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();
 const dispatch = useDispatch();

 const promiseRef = useRef(null);

 const handleCreateWallet = handleSubmit(({ password, alias }) => {
  promiseRef.current = dispatch(createWallet(password, alias));
 });


 return (
  <form onSubmit={handleCreateWallet}>
   <input {...register('alias')} />
   <input {...register('password', { required: true })} type="password" />

   <input type="submit" value="Add Wallet" />
  </form>
 );
}