import React from 'react'
const ResultBody = (props) => {
    return (
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
                                    props.inventory.map((data, key) => {
                                        let { materialName, productType, description, makerStatus } = data
                                        return (
                                            <tr key={key}>
                                                <td className="table-data font-bold text-blue-600">{materialName}</td>
                                                <td className="table-data font-light text-left">{productType}</td>
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
    )
}

export default ResultBody
