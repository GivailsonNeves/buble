import React, { ReactNode, useMemo, useState } from "react";
import "./styles.scss";

interface Props {
  className?: string;
  totalPages: number;
  initialPage?: number;
  onChange?: (page: number) => void;
}

const SlashPagination: React.FC<Props> = ({
  className,
  totalPages,
  initialPage,
  onChange,
}) => {
  const [page, setPage] = useState<number>(initialPage || 0);

  const classNameValue = useMemo(() => {
    const classValues = ["app-slash-pagination"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  const handlePageClick = (index: number) => {
    setPage(index);
    if (onChange) onChange(index);
  };

  const Marks = useMemo(() => {
    const elements: ReactNode[] = [];

    for (let i = 0; i < totalPages; i++) {
      elements.push(
        <li>
          <button
            className={i === page ? "selected" : undefined}
            onClick={() => handlePageClick(i)}
          >
            /
          </button>
        </li>
      );
    }

    return elements;
  }, [totalPages, initialPage, page]);

  return (
    <nav className={classNameValue}>
      <ul>{Marks}</ul>
    </nav>
  );
};

export default SlashPagination;
