import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const PreviewPage = () => {
  const router = useRouter();
  const { success, canceled } = router.query;
  const [loggeduser, setLoggedUser] = useState("nouser");
  const [paramUser, setParamUser] = useState("");
  useEffect(() => {
    // checking login
    setLoggedUser(localStorage.getItem("username"));
    const url = router.asPath;
    const result = url.split('/');
    const Param = result[result.length - 2];
    setParamUser(Param);

  }, []);
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    // const query = new URLSearchParams(window.location.search);
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        alert('Order placed! You will receive an email confirmation.');
        router.push('/dashboard');
      }

      if (canceled) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      }
    }

  }, [success, canceled,router]);

  return (
    <form  action="/api/checkout_sessions" method="SUBMIT" className="flex justify-center items-center">
    <section className=" flex flex-col w-96 h-36 rounded-lg justify-center">
      <button type="submit" role="link" className="h-10 bg-indigo-600 rounded-md text-white font-semibold hover:opacity-80">
        Checkout
      </button>
    </section>
    
  </form>
  );
};
export default PreviewPage;
