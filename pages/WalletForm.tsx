import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Input from '../components/input';
import Submit from '../components/submit';
import { createWallet } from '../redux/wallets/actions';

import styles from '../styles/WalletForm.module.css';

export default function WalletForm() {
 const {
  reset,
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();
 const dispatch = useDispatch();

 const handleCreateWallet = handleSubmit(({ password, alias }) => {
  dispatch(createWallet(password, alias));
  reset();
 });


 return (
  <form className={styles.walletForm} onSubmit={handleCreateWallet}>
   <Input placeholder='Wallet name' {...register('alias', { required: true })} />
   <Input placeholder='Password' {...register('password', { required: true })} type="password" />

   <Submit>Add Wallet</Submit>
  </form>
 );
}