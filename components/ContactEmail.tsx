'use client'
function ContactEmail() {
  return (
    <div className="flex items-center flex-col pb-10">
      <div className="  w-full px-4 max-w-3xl">
        <div className="text-lg font-bold text-center ">Contact Me</div>
        <div className="px-2 mx-auto">
          <form
            action="https://formsubmit.co/099d9f036aa1c40f847575a1013be4b6"
            className="space-y-2"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#213139ff] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="your@mail.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="block p-3 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#213139ff] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Describe your subject"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-800 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#213139ff] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#213139ff] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactEmail;
