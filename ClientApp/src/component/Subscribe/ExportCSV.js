import React from "react";
import { Button } from "react-bootstrap";
import FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ExportCSV = ({ csvData, fileName, wscols }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const Heading = [
    {
      id: "id",
      name: "Name",
      email: "Email",
      message: "Message",
      createAt: "Time Create",
      updateAt: "Time Update ",
    },
  ];

  const exportToCSV = (csvData, fileName, wscols) => {
    const ws = XLSX.utils.json_to_sheet(Heading, {
      header: ["id", "name", "email", "message", "createAt", "updateAt"],
      skipHeader: true,
      origin: 0, //ok
    });
    ws["!cols"] = wscols;
    XLSX.utils.sheet_add_json(ws, csvData, {
      header: ["id", "name", "email", "message", "createAt", "updateAt"],
      skipHeader: true,
      origin: -1, //ok
    });
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button
      variant="warning"
      onClick={(e) => exportToCSV(csvData, fileName, wscols)}
    >
      Export XLSX
    </Button>
  );
};

export default ExportCSV;
