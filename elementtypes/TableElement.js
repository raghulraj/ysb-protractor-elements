
//import { browser, element } from "protractor";

var BaseElement = require('./baseElement');

let rowLocator = './tbody//tr';
let colLocator = './thead//th';
var colDataLocator = colLocator.concat('[colIndex]');
var cellDataLocator = rowLocator.concat('[rowIndex]//td[colIndex]');
let allColLocator = rowLocator.concat('//td[colIndex]');

class Table extends BaseElement {
 
  // get the total number of rows
  async getRowCount() {
    let _this=await this;
    var rowCount = await _this.protractorElement.all(by.xpath(rowLocator)).count();
    await console.log("Total no of rows : " + rowCount);
    return await rowCount;
  }

  // get the total number of columns
  async getColumnCount() {
    let _this=await this;
    var columnCount = await _this.protractorElement.all(by.xpath(colLocator)).count();
    await console.log("Total no of columns : " + columnCount);
    return await columnCount;
  }


  async getColumnHeaders() {
    let _this=await this;
    var columnHeader = await _this.protractorElement.all(by.xpath(colLocator)).getText();
    await console.log("columnHeadera are :  " + columnHeader);
    return await columnHeader;
  }

  async getColumnData(colName) {
    let _this=await this;
    var ColNo = await this.getColIndexForColumn(colName);
    let tempLocator = await allColLocator.replace('colIndex', ColNo);
    var columnData = await _this.protractorElement.all(by.xpath(tempLocator)).getText();
    await console.log("columnData is : " + columnData);
    return await columnData;
  }


  async getColIndexForColumn(colName) {
    let _this=await this;
    var uiColNo;
    var colCount = await this.getColumnCount();
    for (var j = 1; j < colCount; j++) {
      let tempLocator = await colDataLocator.replace('colIndex', j);
      var colData = await _this.protractorElement.element(by.xpath(tempLocator)).getText();
      if (colName === colData) {
        uiColNo = await j;
        break;
      }
    }
    // if (uiColNo) {
    //   await console.log("col header matched ");
    // }
    // else {
    //   await console.log("col header you are looking for is not present in the table ");
    // }
    // //await console.log("column index is :  " + uiColNo);
    return await uiColNo;
  }


  async getCellData(rowNumber, colName) {
    let _this=await this;
    var rowCount=await this.getRowCount();
    // if (rowNumber == 0 || rowNumber>rowCount) {
    //   await console.log("Invalid row Num");//Should exit
    // }
    var uiColNo = await this.getColIndexForColumn(colName);
    var tempLocator = await cellDataLocator.replace('rowIndex', rowNumber).replace('colIndex', uiColNo);
    var cellData = await _this.protractorElement.element(by.xpath(tempLocator)).getText();
    await console.log("cellData : " + cellData);
    return await cellData;
  }

//sort by e.g. asc,desc.
  async sortColumn(colName, sortBy) {
    let _this=await this;
    var tempLocator = await colLocator.concat("[normalize-space(text())='colIndex']");
    tempLocator = await tempLocator.replace('colIndex', colName);
    var tempElement = await _this.protractorElement.element(by.xpath(tempLocator));
    await browser.executeScript("arguments[0].click();", tempElement);
    var tempLocatorSpan = await tempLocator.concat('/span');
    let sortClass = await _this.protractorElement.element(by.xpath(tempLocatorSpan)).getAttribute('class');
    var sortUI = await sortClass.split("-")[2];
    if (sortClass == sortBy) {
      await console.log("sorting is already as desired so not clicking on sort icon");
    }
    else {
      await console.log("clicking on sort icon");
      await browser.executeScript("arguments[0].click();", tempElement);
    }
  }

}

module.exports = Table;
