"use client";
import { useState } from "react";

export default function Filters() {
  const [openSection, setOpenSection] = useState(null);

  const filterData = [
    {
      title: "IDEAL FOR",
      options: ["Men", "Women", "Kids"],
    },
    {
      title: "FABRIC",
      options: ["Cotton", "Leather"],
    },
    {
      title: "OCCASION",
      options: ["Casual", "Party"],
    },
    {
      title: "WORK",
      options: ["Office", "Home"],
    },
    {
      title: "SEGMENT",
      options: ["Premium", "Budget"],
    },
    {
      title: "SUITABLE FOR",
      options: ["Summer", "Winter"],
    },
    {
      title: "RAW MATERIALS",
      options: ["Organic", "Synthetic"],
    },
    {
      title: "PATTERN",
      options: ["Solid", "Printed"],
    },
  ];

  return (
    <aside className="filters">
      <h4>CUSTOMIZABLE</h4>

      {filterData.map((section, index) => (
        <div key={index} className="filter-section">
          <div
            className="filter-title"
            onClick={() =>
              setOpenSection(openSection === index ? null : index)
            }
          >
            {section.title}
          </div>

          {openSection === index && (
            <div className="filter-options">
              <p className="all">All</p>
              <p className="unselect">Unselect all</p>

              {section.options.map((opt, i) => (
                <label key={i}>
                  <input type="checkbox" /> {opt}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}