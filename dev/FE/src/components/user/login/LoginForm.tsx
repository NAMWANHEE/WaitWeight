import FormInput from '@/components/common/FormInput';
import SubmitButton from '@/components/common/SubmitButton';
import { useState, FormEvent, ChangeEvent } from 'react';

const LoginForm = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`id: ${id}, Password: ${password}`);
  };

  const handleIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        value={id}
        onChange={handleIdChange}
        placeholder="아이디"
      />
      <FormInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="비밀번호"
      />
      <div className="my-10">
        <SubmitButton
          title="로 그 인"
          color="CustomOrange"
          textColor="white"
          width="[200px]"
        />
      </div>
    </form>
  );
};

export default LoginForm;
