import notfoundimg from '../assets/images/notfoundimg.png';
function ErrorPage() {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <div className='flex flex-col items-center justify-center w-[650px] m-3 p-3 gap-3'>
        <img src={notfoundimg} alt="Error"/>
        <p className="text-4xl font-bold text-center max-sm:text-3xl">Oops! Page Not Found.</p>
        <p className='text-2xl font-normal text-center max-sm:text-xl'>You must have picked the wrong door because I haven't been able to lay my eyes on the page you are searching for. </p>
      </div>
    </div>  
    </>
  );
}

export default ErrorPage;
