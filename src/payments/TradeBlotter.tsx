import React, { FC, useMemo } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";

type Person = {
  // name: {
  //   firstName: string;
  //   lastName: string;
  // };
  // address: string;
  // city: string;
  // state: string;
  Pay_ID: string;
  Trade_Date: string;
  Trade_Status: string;
  Client_Buy_Amount: string | Number;
  Client_Sell_Amount: string | Number;
  Rate: number;
  Value_Date: string;
  Beneficiary_Name: string;
  Beneficiary_Country: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
  {
    Pay_ID: "1012202448E3E",
    Trade_Date: "12/19/2022",
    Trade_Status: "EXECUTED",
    Client_Buy_Amount: 1151.54 + " EUR",
    Client_Sell_Amount: 1000 + " GUB",
    Rate: 0.8684,
    Value_Date: "12/21/2022",
    Beneficiary_Name: "Acc name",
    Beneficiary_Country: "GB",
  },
];

const TradeBlotter: FC = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "Pay_ID", //access nested data with dot notation
        header: "Pay ID",
      },
      {
        accessorKey: "Trade_Date",
        header: "Trade Date",
      },
      {
        accessorKey: "Trade_Status",
        header: "Trade Status",
      },
      {
        accessorKey: "Client_Buy_Amount",
        header: "Client Buy Amount",
      },
      {
        accessorKey: "Client_Sell_Amount",
        header: "Client Sell Amount",
      },
      {
        accessorKey: "Rate",
        header: "Rate",
      },
      {
        accessorKey: "Value_Date",
        header: "Value Date",
      },
      {
        accessorKey: "Beneficiary_Name",
        header: "Beneficiary Name",
      },
      {
        accessorKey: "Beneficiary_Country",
        header: "Beneficiary Name",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      // enableColumnActions={false}
      // enableColumnFilters={false}
      // enableTopToolbar={false}
      // enableSorting={false}
    ></MaterialReactTable>
  );
};

export default TradeBlotter;
