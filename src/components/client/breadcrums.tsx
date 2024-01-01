import { LiaGreaterThanSolid } from "react-icons/lia";
export default function Breadcrumbs({
  First,
  Second,
  Third,
}: {
  First: string;
  Second: string;
  Third: string;
}) {
  return (
    <div className="breadcrumbs-outer">
      <div className="site-container">
      <div className="breadcrumbs-inner">
        <ul className="bc-list">
          <li className="bc-listitem">
            <a href="#" className="bc-listitem-a">
              {First}
            </a>
            <div className="bc-seperator">
              <LiaGreaterThanSolid />
            </div>
          </li>
          <li className="bc-listitem">
            <a href="#" className="bc-listitem-a">
              {Second}
            </a>
            <div className="bc-seperator">
              <LiaGreaterThanSolid />
            </div>
          </li>
          <li className="bc-listitem">
            <a href="#" className="bc-listitem-a">
              {Third}
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}
