const SectionHeading = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 print:border-gray-300 print:mb-4">
    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 print:text-black" />
    <h2 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider print:text-black">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
