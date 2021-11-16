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

    console.log(props.Inventory);
    if (Object.keys(props.Inventory).length > 0) {
        return (
            <div>
                <h1>Result Page</h1>
                <div className="w-full h-auto border-4 border-light-blue-500 border-opacity-100 inline-block">
                    {/* left side */}
                    <div className="w-2/12 h-auto inline-block p-2 sm:w-full float-left">
                        <div className="w-full bg-red h-auto inline-block p-2 bg-white p-2 rounded shadow-md">
                            {/* filter menu 1 start*/}
                            <div class="block">
                                <div>
                                    <span class="text-gray-700">Product Types</span>
                                    <span class="text-gray-700 float-right cursor-pointer" onClick={() => handleClear("ProductType")}>Clear</span>

                                </div>
                                <div class="mt-2">
                                    <div>
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox" value="rubbersheet"
                                                checked={checkInArray(productTypeArray, "rubbersheet")}
                                                onChange={(event) => {
                                                    handleCheckBox(productTypeArray, event, "rubbersheet", setProductTypeArray, "ProductType")
                                                }}
                                            />
                                            <span class="ml-2">Rubber sheet</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox" value="flim"
                                                checked={checkInArray(productTypeArray, "flim")}
                                                onChange={(event) => {
                                                    handleCheckBox(productTypeArray, event, "flim", setProductTypeArray, "ProductType")
                                                }}
                                            />
                                            <span class="ml-2">Flim</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox" value="adhsives"
                                                checked={checkInArray(productTypeArray, "adhsives")}
                                                onChange={(event) => {
                                                    handleCheckBox(productTypeArray, event, "adhsives", setProductTypeArray, "ProductType")
                                                }}
                                            />
                                            <span class="ml-2">Adhsives</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox" value="foam"
                                                checked={checkInArray(productTypeArray, "foam")}
                                                onChange={(event) => {
                                                    handleCheckBox(productTypeArray, event, "foam", setProductTypeArray, "ProductType")
                                                }}
                                            />
                                            <span class="ml-2">Foam</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* filter menu 1 end*/}
                        </div>
                        <div className="w-full bg-red h-auto mt-2 inline-block p-2 bg-white p-2 rounded shadow-md">
                            {/* filter menu 2 start*/}
                            <div class="block">
                                <div>
                                    <span class="text-gray-700">Maker Product Status</span>
                                    <span class="text-gray-700 float-right cursor-pointer" onClick={() => handleClear("Status")}>Clear</span>
                                </div>
                                <div class="mt-2">
                                    <div>
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox" value="active"
                                                checked={checkInArray(productStatus, "active")}
                                                onChange={(event) => {
                                                    handleCheckBox(productStatus, event, "active", setproductStatus, "Status")
                                                }}
                                            />
                                            <span class="ml-2">Active</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox" value="inactive"
                                                checked={checkInArray(productStatus, "inactive")}
                                                onChange={(event) => {
                                                    handleCheckBox(productStatus, event, "inactive", setproductStatus, "Status")
                                                }}
                                            />
                                            <span class="ml-2">Inactive</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* filter menu 2 end*/}
                        </div>
                    </div>



                    <div className="w-10/12 sm:w-full bg-blue-500 h-10 inline-block p-2 inline-block">
                        {/* right side */}
                        {/* result count start */}
                        <span> Showing {props.Inventory.totEntry} results </span>
                        <div className="float-right">
                            <select id="cars" name="carlist" form="carform" onChange={handleSortMenu}>
                                <option value="">Sort</option>
                                <option value="mnaz">Material Name A-Z </option>
                                <option value="mnza">Material Name Z-A </option>
                                <option value="ptaz">Product Type A-Z</option>
                                <option value="ptza">Product Type A-Z  </option>
                            </select>
                        </div>
                        {/* result count end */}
                        {/* Tabel start*/}
                        <div className="overflow-x-auto bg-white w-full mt-5 w-full">
                            <table className="w-full">
                                <tr className="w-full">
                                    <th className="tabel-header">Material Name</th>
                                    <th className="tabel-header">Product type</th>
                                    <th className="tabel-header">Description</th>
                                    <th className="tabel-header">maker product status</th>
                                </tr>
                                {
                                    props.Inventory.InventoryStatus.map((data, key) => {
                                        let { materialName, productType, description, makerStatus } = data
                                        return (
                                            <tr key={key}>
                                                <td className="table-data text-blue-600">{materialName}</td>
                                                <td className="table-data">{productType}</td>
                                                <td className="table-data">{description}</td>
                                                <td className="table-data">
                                                    <span
                                                        className={`${makerStatus === "active" ? "manuf-active" : "manuf-inactive"}`}>{makerStatus}</span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                        {/* Tabel end*/}
                        {/* Pagination start */}

                        <ReactPaginate
                            className="PaginationUl"
                            breakLabel="..."
                            nextLabel="Next --->"
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
                            previousLabel="<--- Previous"
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
