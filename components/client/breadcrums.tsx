import Link from "next/link";
import { LiaGreaterThanSolid } from "react-icons/lia";

interface BreadcrumbsProps {
  First: {
    label: string;
    href: string;
  };
  Second: {
    label: string;
    href: string;
  };
  Third?: {
    label?: string;
    href?: string;
  };
}
export default function Breadcrumbs({
  First,
  Second,
  Third,
}: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs-outer">
      <div className="site-container">
        <div className="breadcrumbs-inner">
          <ul className="bc-list">
            {First.label ? (
              <li className="bc-listitem">
                <Link href={First.href} className="bc-listitem-a">
                  {First.label}
                </Link>
              </li>
            ) : (
              ""
            )}
            {Second.label ? (
              <li className="bc-listitem">
                <div className="bc-seperator">
                  <LiaGreaterThanSolid />
                </div>
                <a href={Second.href} className="bc-listitem-a">
                  {Second.label}
                </a>
              </li>
            ) : (
              ""
            )}
            {Third?.label ? (
              <li className="bc-listitem">
                <div className="bc-seperator">
                  <LiaGreaterThanSolid />
                </div>
                <a href={Third.href} className="bc-listitem-a">
                  {Third.label}
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
