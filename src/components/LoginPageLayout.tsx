import Form from './Form/Form';
import Header from './LoginHeader';

export default function LoginPageLayout() {
  return (
    <main className='flex flex-col justify-center items-center mt-40 md:mt-[202px]'>
      <div className='md:w-[433px]'>
        <Header />
        <Form />
      </div>
    </main>
  );
}
