import { InventoryStatus } from '../APIData/APIData'
let db = InventoryStatus

export const FilterBy = ({ ProductType, Status, SearchKey, orderBy, ByPageNo }) => {

  let pool = []
  let ResultStatus = []


  const FilterByPt = (db, type) => {
    /* filter by product type */ 
    return db.filter(obj => obj.productType === type)
  }

  const FilterByMS = (db, status) => {
    /* filter by material status */ 

    return db.filter(obj => obj.makerStatus === status)
  }


  const SearchBy = (searchKey) => {
    /* search by key word */ 
    const matcher = new RegExp(`${searchKey.toUpperCase()}`, 'g');
    let result = db.filter(obj => obj.materialName.toUpperCase().match(matcher));
    return result
  }

  const chunks = (a, size) =>
    Array.from(
      new Array(Math.ceil(a.length / size)),
      (_, i) => a.slice(i * size, i * size + size)
    );


  if (ProductType.length > 0) {
    ProductType.map(data => {
      let ar = FilterByPt(InventoryStatus, data)
      return pool = [...pool, ...ar]
    })
  } else {
    pool = InventoryStatus
  }

  if (Status.length > 0) {
    Status.map((data) => {
      let ar = FilterByMS(pool, data)
      return ResultStatus = [...ResultStatus, ...ar]
    })
  } else {
    ResultStatus = pool
  }

  let SearchResult

  if (SearchKey) {
    SearchResult = SearchBy(SearchKey)
  } else {
    SearchResult = ResultStatus
  }

  let sortorder

  if (orderBy === "mnaz") {
    sortorder = SearchResult.sort((a, b) => {
      let mA = a.materialName
      let mB = b.materialName
      if (mA < mB) {
        return -1;
      }
    })

  }
  if (orderBy === "mnza") {
    sortorder = SearchResult.sort((a, b) => {
      let mA = a.materialName
      let mB = b.materialName
      if (mA > mB) {
        return -1;
      }
    })
  }

  if (orderBy === "ptaz") {
    sortorder = SearchResult.sort((a, b) => {
      let mA = a.productType
      let mB = b.productType
      if (mA < mB) {
        return -1;
      }
    })
  }
  if (orderBy === "ptza") {
    sortorder = SearchResult.sort((a, b) => {
      let mA = a.productType
      let mB = b.productType
      if (mA > mB) {
        return -1;
      }
    })
  }
  if (!orderBy) {
    sortorder = SearchResult
  }


  let ByPageResult
  if (sortorder.length > 0) {
    if (ByPageNo) {
      ByPageResult = chunks(sortorder, 10)[ByPageNo]
    } else {
      ByPageResult = chunks(sortorder, 10)[0]
    }
  }

  return {
    totEntry: sortorder.length,
    pageNum: ByPageNo ? ByPageNo : 0,
    InventoryStatus: ByPageResult ? ByPageResult : sortorder
  }
}






