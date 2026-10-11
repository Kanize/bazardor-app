const Footer = () => {
  return (
    <footer className="border-t border-gray-300">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-gray-500 sm:px-6 sm:text-sm lg:flex-row lg:text-left">
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>

        <p className="max-w-xl">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
