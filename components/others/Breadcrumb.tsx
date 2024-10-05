import React from "react";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

interface IBreadcrumbProps {
  title: string;
  slug?: string;
  title2?: string;
  slug2?: string;
  title3?: string;
  slug3?: string;
  title4?: string;
  slug4?: string;
  title5?: string;
  slug5?: string;
}

const Breadcrumb = ({
  title,
  title2,
  slug,
  slug2,
  title3,
  slug3,
  title4,
  slug4,
  title5,
  slug5,
}: IBreadcrumbProps) => {
  const renderLink = (linkText: string, href?: string, isBold?: boolean) => (
    <>
      <div className="relative w-4 h-4 opacity-70">
        <IoChevronForwardOutline size={16} />
      </div>
      {href ? (
        <Link
          href={href}
          title={linkText}
          className={`text-sm transition-all duration-300 ${
            isBold
              ? "text-site font-semibold"
              : "text-gray-600 dark:text-gray-400 hover:text-site dark:hover:text-site"
          }`}
        >
          {linkText}
        </Link>
      ) : (
        <p
          className={`text-sm ${
            isBold ? "text-site font-semibold" : "text-gray-600"
          }`}
        >
          {linkText}
        </p>
      )}
    </>
  );

  return (
    <div className="md:flex hidden items-center my-5 gap-3">
      <Link
        href={"/"}
        className="text-sm text-gray-600 dark:text-gray-400 hover:text-site dark:hover:text-site transition-all duration-300"
        title="Ana Sayfa"
      >
        Anasayfa
      </Link>
      {renderLink(title, slug, !title2)}
      {title2 && renderLink(title2, slug2, !title3)}
      {title3 && renderLink(title3, slug3, !title4)}
      {title4 && renderLink(title4, slug4, !title5)}
      {title5 && renderLink(title5, slug5, true)}
    </div>
  );
};

export default Breadcrumb;
