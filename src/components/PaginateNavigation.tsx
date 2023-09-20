interface PaginateNavigationInterface {
  pageLimit: number;
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
}

interface PaginateButtonInterface {
  label: string | number;
  handleClick: () => unknown;
  isCurrent?: boolean;
}

const PaginateButton = ({
  label,
  handleClick,
  isCurrent = false,
}: PaginateButtonInterface) => {
  const bgColor = isCurrent
    ? "bg-primary-100 text-white"
    : "border border-primary-100/50";
  return (
    <li
      className={`w-full sm:w-5/12 md:w-full rounded-full p-4 hover:cursor-pointer ${bgColor}`}
      onClick={handleClick}
    >
      <button>{label}</button>
    </li>
  );
};

export default function PaginateNavigation({
  pageLimit,
  currentPage,
  setCurrentPage,
}: PaginateNavigationInterface) {
  const handleNextPage = () => {
    if (currentPage < pageLimit) setCurrentPage(currentPage + 1);
  };

  const handleBackPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageSelect = (pageNumber: number) => {
    if (pageNumber !== currentPage) setCurrentPage(pageNumber);
  };

  return (
    <nav>
      <ul className="text-center flex flex-row flex-wrap justify-between gap-4 md:flex-nowrap">
        <PaginateButton label="Back" handleClick={handleBackPage} />

        {[...Array(pageLimit)].map((content, index) => {
          const associatedPage = index + 1;
          return (
            <PaginateButton
              key={`${content} + ${index}`}
              label={associatedPage}
              handleClick={() => handlePageSelect(associatedPage)}
              isCurrent={associatedPage == currentPage}
            />
          );
        })}

        <PaginateButton label="Next" handleClick={handleNextPage} />
      </ul>
    </nav>
  );
}
