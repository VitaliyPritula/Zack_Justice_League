
export const Footer = () => {
  return (
    <footer className="bg-[#101012] text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md2:flex-row md:items-start md:justify-between gap-5">
        <a href="/">
          <img className="xl:w-full w-[50%]" src="/Logo.svg" alt="Logo" />
        </a>
        {/* Links */}
        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-7 gap-y-3 text-sm">
          <a href="#" className="hover:underline">Voice over and Subtitle</a>
          <a href="#" className="hover:underline">Voice Description</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Gift Cards</a>
          <a href="#" className="hover:underline">Media Center</a>
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Job Opportunities</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Legal Provisions</a>
          <a href="#" className="hover:underline">Cookies Preferences</a>
          <a href="#" className="hover:underline">Corporate Informations</a>
          <a href="#" className="hover:underline">Contact us</a>
        </div>
      </div>
    </footer>
  );
};
