// import React from "react";
// import styled from "styled-components";
// import { useFilterContext } from "../context/filter_context";
// import { FaCheck } from "react-icons/fa";

// const FilterSection = () => {
//   const {
//     filters: { text, category,company, color },
//     all_products,
//     updateFilterValue,
//   } = useFilterContext();

//   const getUniqueData = (data, attr) => {
//     let newVal = data.map((curEle) => {
//       return curEle[attr];
//     });
    

//     if (attr === "colors") {
     
//       newVal = newVal.flat();
//     }
//     return (newVal = ["all", ...new Set(newVal)]);
//   };
//   const categoryOnlyData = getUniqueData(all_products, "category");
//   const companyOnlyData = getUniqueData(all_products, "company");
//   const colorsData = getUniqueData(all_products, "colors");
  
//   return (
//     <Wrapper>
//       <div className="filter-search">
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="text"
//             name="text"
//             value={text}
//             onChange={updateFilterValue}
//             placeholder="Search"
//           />
//         </form>
//       </div>

//       <div className="filter-category">
//         <h3>Category</h3>
//         <div>
//           {categoryOnlyData.map((curEle, index) => {
//             return (
//               <button
//                 key={index}
//                 type="button"
//                 name="category"
//                 value={curEle}
//                 onClick={updateFilterValue}
//               >
//                 {curEle}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       <div className="filter-selection">
//         <h3>Company</h3>
//         <form action="#">
//           <select
//             name="company"
//             id="company"
//             className="filter-selection--style"
//             onChange={updateFilterValue}
//           >
//             {companyOnlyData.map((curEle, index) => {
//               return (
//                 <option key={index} value={curEle} name="company">
//                   {curEle}
//                 </option>
//               );
//             })}
//           </select>
//         </form>
//       </div>

//       <div className="colors">
//         <h3>Colors</h3>
//         <div>
//           {colorsData.map((curColor, index) => {
//             return (
//               <button
//                 key={index}
//                 value={curColor}
//                 name="color"
//                 className={color === curColor ? "btnStyle active" : "btnStyle"}
//                 type="button"
//                 style={{ backgroundColor: curColor }}
//                 onClick={updateFilterValue}
//               >
//                 {color === curColor ? <FaCheck className="checkStyle" /> : null}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 5rem 0;
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;

//   .filter-category {
//     div {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       gap: 1.4rem;

//       button {
//         border: none;
//         background-color: #fff;
//         text-tranform: capitalize;
//         cursor: pointer;
//         text-align: left;

//         &:hover {
//           color: ${({ theme }) => theme.colors.btn};
//         }
//       }
//     }
//   }

//   .colors h3 {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     gap: 0.1rem;
//   }
//   .btnStyle {
//     width: 2rem;
//     height: 2rem;
//     background-color: #000;
//     border-radius: 50%;
//     margin-left: 0.7rem;
//     border: none;
//     outline: none;
//     opacity: 0.5;
//     cursor: pointer;

//     &:hover {
//       opacity: 1;
//     }
//   }
//   .active {
//     opacity: 1;
//     border-bottom: 1px solid #000;
//     color: ${({ theme }) => theme.colors.btn};
//   }
//   .checkStyle {
//     font-size: 1rem;
//     color: #fff;
//   }

//   h3 {
//     padding: 2rem 0;
//     font-size: bold;
//   }
//   .filter-search {
//     input {
//       padding: 0.6rem 1rem;
//       width: 80%;
//     }
//     filter-category {
//       display: flex;
//       flex-wrap: wrap;
//     }
//   }
//   .filter-selection .filter-selection--style {
//     padding: 0.5rem;
//     cursor: pointer;

//     .filter-selection--option {
//       padding: 0.5rem 0;
//       cursor: pointer;
//       height: 2rem;
//       padding: 10px;
//     }
//   }
// `;
// export default FilterSection;

// import React from "react";
// import styled from "styled-components";
// import { useFilterContext } from "../context/filter_context";
// import { FaCheck } from "react-icons/fa";
// import {Button} from "../styles/Button"

// const FilterSection = () => {
//   const {
//     filters: { text, category, company, color },
//     all_products,
//     updateFilterValue,
//     clearFilters,
//   } = useFilterContext();

//   const getUniqueData = (data, attr) => {
//     let newVal = data.map((item) => item[attr]);

//     if (attr === "colors") {
//       newVal = newVal.flat();
//     }
    
//     return ["all", ...new Set(newVal)];
//   };

//   const categoryOnlyData = getUniqueData(all_products, "category");
//   const companyOnlyData = getUniqueData(all_products, "company");
//   const colorsData = getUniqueData(all_products, "colors");

//   return (
//     <Wrapper>
//       {/* Search Input */}
//       <div className="filter-search">
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="text"
//             name="text"
//             value={text}
//             onChange={updateFilterValue}
//             placeholder="Search"
//           />
//         </form>
//       </div>

//       {/* Category Filter */}
//       <div className="filter-category">
//         <h3>Category</h3>
//         <div>
//           {categoryOnlyData.map((curEle, index) => (
//             <button
//               key={index}
//               type="button"
//               name="category"
//               value={curEle}
//               className={category === curEle ? "active" : ""}
//               onClick={updateFilterValue}
//             >
//               {curEle}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Company Filter */}
//       <div className="filter-selection">
//         <h3>Company</h3>
//         <form>
//           <select
//             name="company"
//             id="company"
//             className="filter-selection--style"
//             value={company}
//             onChange={updateFilterValue} // Changed from onClick to onChange
//           >
//             {companyOnlyData.map((curEle, index) => (
//               <option key={index} value={curEle}>
//                 {curEle}
//               </option>
//             ))}
//           </select>
//         </form>
//       </div>

//       {/* Color Filter */}
//       <div className="colors">
//         <h3>Colors</h3>
//         <div>
//           {colorsData.map((curColor, index) => (
//             <button
//               key={index}
//               value={curColor}
//               name="color"
//               className={color === curColor ? "btnStyle active" : "btnStyle"}
//               type="button"
//               style={{ backgroundColor: curColor }}
//               onClick={updateFilterValue}
//             >
//               {color === curColor && <FaCheck className="checkStyle" />}
//             </button>
//           ))}
//         </div>

//         <div>
//           <Button className="btn" onClick={clearFilters}>Clear Filters</Button>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 5rem 0;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   gap: 3rem;

//   .filter-category div {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 1.4rem;

//     button {
//       border: none;
//       background-color: #fff;
//       // text-transform: capitalize;
//       cursor: pointer;
//       text-align: left;

//       &:hover {
//         color: ${({ theme }) => theme.colors.btn};
//       }
//     }
//   }

//   .colors h3 {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     gap: 0.1rem;
//   }

//   .btnStyle {
//     width: 2rem;
//     height: 2rem;
//     border-radius: 50%;
//     margin-left: 0.7rem;
//     border: none;
//     outline: none;
//     opacity: 0.5;
//     cursor: pointer;
    
//     &:hover {
//       opacity: 1;
//     }
//   }

//   .active {
//     opacity: 1;
//     border-bottom: 1px solid #000;
//     color: ${({ theme }) => theme.colors.btn};
//   }

//   .checkStyle {
//     font-size: 1rem;
//     color: #fff;
//   }

//   .filter-search input {
//     padding: 0.6rem 1rem;
//     width: 80%;
//   }

//   .filter-selection .filter-selection--style {
//     padding: 0.5rem;
//     cursor: pointer;
//   }
// `;

// export default FilterSection;



import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import { Button } from "../styles/Button";

const FilterSection = () => {
  const {
    filters: { text, category, company, color },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // Get unique values for filters
  const getUniqueData = (data, attr) => {
    let newVal = data.map((item) => item[attr]);

    if (attr === "colors") {
      newVal = newVal.flat();
    }

    return ["all", ...new Set(newVal)];
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      {/* Search Input */}
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search Products"
          />
        </form>
      </div>

      {/* Category Filter */}
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curEle, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={curEle}
              className={category === curEle ? "active" : ""}
              onClick={updateFilterValue}
            >
              {curEle}
            </button>
          ))}
        </div>
      </div>

      {/* Company Filter */}
      <div className="filter-selection">
        <h3>Company</h3>
        <form>
          <select
            name="company"
            id="company"
            className="filter-selection--style"
            value={company}
            onChange={updateFilterValue}
          >
            {companyOnlyData.map((curEle, index) => (
              <option key={index} value={curEle}>
                {curEle}
              </option>
            ))}
          </select>
        </form>
      </div>

      {/* Color Filter */}
      <div className="colors">
        <h3>Colors</h3>
        <div className="color-buttons">
          {colorsData.map((curColor, index) => (
            <button
              key={index}
              value={curColor}
              name="color"
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              type="button"
              style={{
                backgroundColor: curColor === "all" ? "transparent" : curColor,
                border: curColor === "all" ? "1px solid black" : "none",
              }}
              onClick={updateFilterValue}
            >
              {curColor === "all" ? "" : ""}
              {color === curColor && <FaCheck className="checkStyle" />}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      <div>
        <Button className="btn-clear" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight:600;
  }

  /* Search Bar */
  .filter-search input {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.3rem;
  }

  /* Category Filter */
  .filter-category div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.3rem;
      text-align: left;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.btn};
      }
    }

    .active {
      font-weight: bold;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  /* Company Filter */
  .filter-selection select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
  }

  /* Colors Filter */
  .color-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    border: 2px solid ${({ theme }) => theme.colors.btn};
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: white;
  }

  /* Clear Filters Button */
  .btn-clear {
    margin-top: 1rem;
    background: ${({ theme }) => theme.colors.btn};
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: darkred;
    }
  }
`;

export default FilterSection;
