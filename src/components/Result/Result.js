import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import ReactPaginate from 'react-paginate';


const Result = (props) => {
    const location = useLocation();
    const [productTypeArray, setProductTypeArray] = useState([])
    const [productStatus, setproductStatus] = useState([])
    useEffect(() => {
        if (props.callByCardType) {
            setProductTypeArray([props.callByCardType])
        }
    }, [props.callByCardType])

    const handleSortMenu = (event) => {
        let sortBy = event.target.value

        let toApi = {
            ProductType: productTypeArray,
            Status: productStatus,
            SearchKey: "",
            orderBy: sortBy,

        }
        return props.MakeApiCall(toApi)

    }

    const handleCheckBox = (checkboxArray, event, checkboxvalue, sethooks, checkBoxName) => {
        let clone = [...checkboxArray]



        if (event.target.checked) {
            clone.push(checkboxvalue)
        } else {
            clone = clone.filter(data => data !== checkboxvalue)
        }
        let toApi = {
            ProductType: [],
            Status: [],
            SearchKey: ""
        }
        toApi[checkBoxName] = clone
        if (checkBoxName === "ProductType") {
            toApi["Status"] = productStatus
        } else {
            toApi["ProductType"] = productTypeArray
        }

        sethooks(clone)
        return props.MakeApiCall(toApi)

    }

    const handleClear = (clearCheckbox) => {
        let toApi = {
            ProductType: [],
            Status: [],
            SearchKey: "",

        }
        toApi[clearCheckbox] = []
        if (clearCheckbox === "ProductType") {
            toApi["Status"] = productStatus
            setProductTypeArray([])
        } else {
            toApi["ProductType"] = productTypeArray
            setproductStatus([])
        }

        return props.MakeApiCall(toApi)
    }



    const checkInArray = (checkarray, value) => {
        return checkarray.includes(value) ? true : false
    }
    const pageCount = () => {
        let r = Math.ceil(props.Inventory.totEntry / 10)
        return r
    }
    const contentPrev=()=>{
        return <span><svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Previous</span>
    }
    const contentNext=()=>{
        return <span>Next <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
    }
    
    if (Object.keys(props.Inventory).length > 0) {
        return (
            <div>
                <div className="mt-18 w-full h-auto inline-block p-3">
                    {/* left side */}
                    <div className="w-3/12 h-auto inline-block p-4  sm:w-full float-left">
                        <div className="w-full bg-red h-auto inline-block p-2 bg-white p-2 rounded shadow-md">
                            {/* filter menu 1 start*/}
                            <div className="block">
                                <div>
                                    <span className="text-gray-700 font-bold">Product Types</span>
                                    <span className="clear-font" onClick={() => handleClear("ProductType")}>Clear</span>

                                </div>
                                <div className="mt-2">
                                    <div>
                                        <label className="checkboxStyle">
                                            <input type="checkbox" className="form-checkbox" value="rubbersheet"
                                                checked={checkInArray(productTypeArray, "rubbersheet")}
                                                onChange={(event) => {
                                                    handleCheckBox(productTypeArray, event, "rubbersheet", setProductTypeArray, "ProductType")
                                                }}
                                            />
                                            <span className="ml-2">Rubber sheet</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="checkboxStyle">
                                            <input type="checkbox" className="form-checkbox" value="flim"
                                                checked={checkInArray(productTypeArray, "flim")}
                                                onChange={(event) => {
                                                    handleCheckBox(productTypeArray, event, "flim", setProductTypeArray, "ProductType")
                                                }}
                                            />
                                            <span className="ml-2">Flim</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="checkboxStyle">
                                            <input type="checkbox" className="form-checkbox" value="adhsives"
                                                checked={checkInArray(productTypeArray, "adhsives")}
                                                onChange={(event) => {
                                                    handleCheckBox(productTypeArray, event, "adhsives", setProductTypeArray, "ProductType")
                                                }}
                                            />
                                            <span className="ml-2">Adhsives</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="checkboxStyle">
                                            <input type="checkbox" className="form-checkbox" value="foam"
                                                checked={checkInArray(productTypeArray, "foam")}
                                                onChange={(event) => {
                                                    handleCheckBox(productTypeArray, event, "foam", setProductTypeArray, "ProductType")
                                                }}
                                            />
                                            <span className="ml-2">Foam</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* filter menu 1 end*/}
                        </div>
                        <div className="w-full bg-red h-auto mt-2 inline-block p-2 bg-white p-2 rounded shadow-md">
                            {/* filter menu 2 start*/}
                            <div className="block">
                                <div>
                                    <span className="text-gray-700 font-bold">Maker Product Status</span>
                                    <span className="clear-font" onClick={() => handleClear("Status")}>Clear</span>
                                </div>
                                <div className="mt-2">
                                    <div>
                                        <label className="checkboxStyle">
                                            <input type="checkbox" className="form-checkbox" value="Active"
                                                checked={checkInArray(productStatus, "Active")}
                                                onChange={(event) => {
                                                    handleCheckBox(productStatus, event, "Active", setproductStatus, "Status")
                                                }}
                                            />
                                            <span className="ml-2">Active</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="checkboxStyle">
                                            <input type="checkbox" className="form-checkbox" value="Inactive"
                                                checked={checkInArray(productStatus, "Inactive")}
                                                onChange={(event) => {
                                                    handleCheckBox(productStatus, event, "Inactive", setproductStatus, "Status")
                                                }}
                                            />
                                            <span className="ml-2">Inactive</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* filter menu 2 end*/}
                        </div>
                    </div>



                    <div className="w-9/12 sm:w-full h-10 inline-block p-2 inline-block">
                        {/* right side */}
                        {/* result count start */}
                        <span className="font-bold py-2 px-4"> Showing {props.Inventory.totEntry} results </span>
                        <div className="float-right">
                            <select className="py-2 px-4 bg-gray-100 w-auto outline-none mb-4" name="sortlist" onChange={handleSortMenu}>
                                <option className="bg-white" value="">Sort</option>
                                <option value="mnaz">Material Name A-Z </option>
                                <option value="mnza">Material Name Z-A </option>
                                <option value="ptaz">Product Type A-Z</option>
                                <option value="ptza">Product Type Z-A  </option>
                            </select>
                        </div>
                        {/* result count end */}
                        {/* Tabel start*/}
                        <div className="overflow-x-auto bg-white w-full mt-5 w-full rounded-t-lg">
                            <table className="w-full">
                            <thead>
                                <tr className="w-full font-light">
                                    <th className="tabel-header">
                                    <span className="font-normal">Material Name</span>
                                    </th>
                                    <th className="tabel-header">
                                    <span className="font-normal">Product Type</span>
                                    </th>
                                    <th className="tabel-header">
                                    <span className="font-normal"> Description </span>
                                    </th>
                                    <th className="tabel-header">
                                        <span className="font-normal">Maker Product Status</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.Inventory.InventoryStatus.map((data, key) => {
                                        let { materialName, productType, description, makerStatus } = data
                                        return (
                                            <tr key={key}>
                                                <td className="table-data font-bold text-blue-600">{materialName}</td>
                                                <td className="table-data font-light">{productType}</td>
                                                <td className="table-data font-light">{description}</td>
                                                <td className="table-data font-light">
                                                    <span
                                                        className={`${makerStatus === "Active" ? "manuf-active" : "manuf-inactive"}`}>{makerStatus}</span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                        {/* Tabel end*/}
                        {/* Pagination start */}

                        <ReactPaginate
                            className="PaginationUl"
                            breakLabel="..."
                            nextLabel={contentNext()}
                            onPageChange={(event) => {
                                let toApi = {
                                    ProductType: productTypeArray,
                                    Status: productStatus,
                                    SearchKey: "",
                                    orderBy: null,
                                    ByPageNo: event.selected
                                }
                                return props.MakeApiCall(toApi)
                            }}
                            pageRangeDisplayed={3}
                            pageCount={pageCount()}
                            previousLabel={contentPrev()}
                            renderOnZeroPageCount={null}
                        />
                        {/* Pagination end */}
                    </div>

                    {/*right side content end  */}
                </div>

            </div>
        )
    } else {
        return (<div><h1>Give some key word to search</h1></div>)
    }
}

export default Result
