import { SignupSteps } from './components/SignupSteps';

const Signup = async () => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center p-3 py-12">
      <SignupSteps />
    </main>
  );
};

export default Signup;
