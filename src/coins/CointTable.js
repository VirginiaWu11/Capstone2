import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardMedia from "@mui/material/CardMedia";

const columns = [
  {
    id: "image",
    label: "",
    minWidth: 10,
    format: (coin) => (
      <CardMedia
        component="img"
        sx={{
          objectFit: "contain",
          width: "2em",
          display: { sm: "block" },
          mr: 2,
        }}
        image={coin.image}
        alt={`${coin.name} logo`}
      />
    ),
  },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "symbol", label: "Symbol", minWidth: 100 },
  {
    id: "current_price",
    label: "Current Price",
    minWidth: 170,
    align: "right",
    format: (value) => "$" + value.toLocaleString("en-US"),
  },
  {
    id: "market_cap",
    label: "Market Cap",
    minWidth: 170,
    align: "right",
    format: (value) => "$" + value.toLocaleString("en-US"),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const CoinTable = ({ coins }) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", margin: 2 }}>
      <TableContainer sx={{ maxHeight: 900 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : null}
                        {column.format &&
                        typeof value === "string" &&
                        value.match(/^https?:\/\/.+\/.+$/)
                          ? column.format(row)
                          : null}
                        {!column.format ? value : null}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CoinTable;
