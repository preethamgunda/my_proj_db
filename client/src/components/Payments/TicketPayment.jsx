import React from 'react'
import Button from '@mui/material/Button';


const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_By0ovCBn7Mzp2R",
      currency: "INR",
      amount: amount*100,
      name: "Bus Ticket",
      description: "Thanks for purchasing",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        window.location.href="http://localhost:3000/payment_success";
      },
      prefill: {
        name: "Vivek Vardhan",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
const TicketPayment = ({source,destination,adults}) => {
  return (
    <>
    <Button variant="outlined" onClick={() => displayRazorpay(source*destination*adults)}>Pay {source*destination*adults}</Button>
    </>
  )
}

export default TicketPayment