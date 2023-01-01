import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mt-8 text-black font-bold text-7xl text-center p-9">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Products? Let us know.</p>
                <form action="https://formspree.io/f/mjvdbdor" className="space-y-8" method='POST' >
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500
                        ">Your Name</label>
                        <input type="text" name="username" className="shadow-sm bg-gray-50 border border-gray-500
                         text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Put Your full Name" required />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500
                        ">Your email</label>
                        <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-500
                         text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500
                        ">Subject</label>
                        <input type="text" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <input className="btn btn-secondary text-dark" type="submit" value="Send Message" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;