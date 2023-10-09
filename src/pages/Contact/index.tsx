import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { SectionTitle, PricingStartsAt, BookACall } from 'components';

import { Phone, Facebook, Email, Instagram, Twitter } from 'components/SVG';
import classNames from 'classnames';

export const ContactUs = () => {
  const ref = useRef();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseType, setResponseType] = useState<null | 'success' | 'fail'>(
    null
  );

  let timeout: ReturnType<typeof setTimeout>;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (ref.current) {
        const navbar = document.getElementById('navbar');

        const isLessThan50 =
          (ref.current as any).getBoundingClientRect().top < 0;

        if (isLessThan50) {
          navbar?.classList.add('nav-offset');
        } else {
          navbar?.classList.remove('nav-offset');
        }
      }
    });
  }, []);

  useEffect(() => {
    if (responseType) {
      timeout = setTimeout(() => {
        setResponseType(null);
      }, 2500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [responseType]);

  return (
    <div className="mt-[70px]" ref={ref as any}>
      <section className="relative py-16 px-6 lg:px-32 2xl:px-48">
        <div className="flex items-center gap-4 flex-col md:flex-row md:gap-10 xl:gap-15">
          <div className="flex-1">
            <SectionTitle className="font-extrabold">
              Get in touch, <br /> we are at your{' '}
              <span className="text-secondary">service</span>
            </SectionTitle>
            <div className="font-bold text-black/60 mt-8">
              Free up your time for things that are important to you, and pay
              only for the hours you need, at a low cost.
            </div>
            <div className="flex flex-col gap-4 mt-12">
              <div className="flex gap-2 items-center">
                <Phone />{' '}
                <span className="font-bold text-secondary">415-300-0730</span>
              </div>
              <div className="flex gap-2 items-center">
                <Email />{' '}
                <span className="font-bold text-secondary">
                  team@hellovirtualagent.com
                </span>
              </div>
              <div className="border-t pt-5">
                <div className="flex gap-6">
                  <Facebook className="text-secondary cursor-pointer transition-colors hover:text-black" />
                  <Instagram className="text-secondary cursor-pointer transition-colors hover:text-black" />
                  <Twitter className="text-secondary cursor-pointer transition-colors hover:text-black" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <div className="mt-10">
              <div className="rounded-md shadow-md p-6">
                <div className="font-bold text-2xl mt-3">
                  Send Us Your Thoughts
                </div>
                <form
                  ref={formRef as any}
                  onSubmit={e => {
                    e.preventDefault();
                    setIsLoading(true);
                    setResponseType(null);
                    const firstName = document.getElementById(
                      'firstName'
                    ) as any;
                    const lastName = document.getElementById('lastName') as any;
                    const email = document.getElementById('email') as any;
                    const phoneNumber = document.getElementById(
                      'phoneNumber'
                    ) as any;
                    const message = document.getElementById('message') as any;

                    const templateParams = {
                      firstName: firstName.value,
                      lastName: lastName.value,
                      to_name: 'Hello Virtual Agent',
                      from_name: `${firstName.value} ${lastName.value}`,
                      email: email.value,
                      phoneNumber: phoneNumber.value,
                      message: message.value,
                    };

                    emailjs
                      .send(
                        import.meta.env.VITE_SERVICE_ID,
                        import.meta.env.VITE_TEMPLATE_ID,
                        templateParams,
                        import.meta.env.VITE_PUBLIC_KEY
                      )
                      .then(() => {
                        firstName.value = '';
                        lastName.value = '';
                        email.value = '';
                        phoneNumber.value = '';
                        message.value = '';

                        setIsLoading(false);
                        setResponseType('success');
                      })
                      .catch(() => {
                        setIsLoading(false);
                        setResponseType('fail');
                      });
                  }}
                >
                  <div className="mt-10">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="w-full">
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          disabled={isLoading}
                          type="text"
                          name="firstName"
                          placeholder="Enter Your First Name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-secondary"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          disabled={isLoading}
                          type="text"
                          name="lastName"
                          placeholder="Enter Your Last Name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-secondary"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="w-full">
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          disabled={isLoading}
                          type="email"
                          name="email"
                          placeholder="Enter Your Email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-secondary"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phoneNumber"
                          disabled={isLoading}
                          type="text"
                          name="phoneNumber"
                          placeholder="Enter Your Phone Number"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-secondary"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      disabled={isLoading}
                      rows={4}
                      name="message"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border min-h-[130px] border-gray-300 focus-visible:outline-secondary"
                      placeholder="Write your thoughts here..."
                      required
                    />
                  </div>
                  <div className="mt-10 mb-8">
                    <button className="shadow-md rounded-md bg-secondary text-white py-2 px-6 font-bold w-full sm:w-auto">
                      {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                  </div>
                  {responseType && (
                    <div
                      className={classNames(
                        'font-bold text-center bg-red-500 py-2 rounded-md text-white',
                        responseType === 'success'
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      )}
                    >
                      {responseType === 'success'
                        ? 'Thank you for emailing us!'
                        : 'Sorry, cant process the request.'}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              src="https://maps.google.com/maps?hl=en&amp;q=219 P. Burgos St. Tacloban&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </section>
      <PricingStartsAt />
      <BookACall />
    </div>
  );
};
