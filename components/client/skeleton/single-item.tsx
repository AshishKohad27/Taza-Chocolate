export default function SingleItemSkeleton() {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className="h-8 bg-gray-200  dark:bg-gray-700 w-full mb-4"></div>
      <div className="h-3 bg-gray-200  dark:bg-gray-700 w-full mb-1.5"></div>
      <div className="h-3 bg-gray-200  dark:bg-gray-700 w-full mb-1.5"></div>
      <div className="h-3 bg-gray-200  dark:bg-gray-700 w-full mb-1.5"></div>
      <div className="h-3 bg-gray-200  dark:bg-gray-700 w-full mb-1.5"></div>
      <div className="h-3 bg-gray-200  dark:bg-gray-700 w-full mb-3"></div>
      <div className="h-20 bg-gray-200  dark:bg-gray-700 w-6/12 mb-3"></div>
      <div className="h-10 bg-gray-200  dark:bg-gray-700 w-full mb-3"></div>
      <div className="h-28 bg-gray-200  dark:bg-gray-700 w-full"></div>
    </div>
  );
}
