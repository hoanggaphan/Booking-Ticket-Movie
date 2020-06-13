import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./BookingHistory.styles";

function BookingHistory() {
  const thongTinDatVe = useSelector((state) => state.userReducer.thongTinDatVe);
  const isFetching = useSelector((state) => state.userReducer.isFetching);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, thongTinDatVe.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {!isFetching ? (
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader>

              <TableHead>
                <TableRow>
                  <TableCell>Ngày đặt</TableCell>
                  <TableCell>Tên phim</TableCell>
                  <TableCell>Ghế đã đặt</TableCell>
                  <TableCell>Địa điểm rạp</TableCell>
                  <TableCell>Tổng tiền</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {(rowsPerPage > 0
                  ? [...thongTinDatVe]
                      .reverse()
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                  : [...thongTinDatVe]
                ).map((item, index) => {
                  return <TableRow hover key={item.ngayDat}>

                    <TableCell>
                      {new Date(item.ngayDat).toLocaleTimeString()} -{" "}
                      {new Date(item.ngayDat).toLocaleDateString()}
                    </TableCell>

                    <TableCell>{item.tenPhim}</TableCell>

                    <TableCell>
                      Ghế:{" "}
                      {item.danhSachGhe.map((ghe) =>
                        ghe.danhSachGheRefact.map((refact, index) => (
                          <span key={index}>
                            {(index ? "," : "") + " " + refact}
                          </span>
                        ))
                      )}
                    </TableCell>

                    <TableCell>
                      {item.danhSachGhe.map((ghe) => (
                        <Box key={ghe.maGhe}>
                          {ghe.tenHeThongRap} - {ghe.tenRap}
                        </Box>
                      ))}
                    </TableCell>

                    <TableCell>{item.giaVe.toLocaleString()} đ</TableCell>
                    
                  </TableRow>
                })}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>

            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, { value: -1, label: "tất cả" }]}
            labelRowsPerPage="số hàng"
            component="div"
            count={thongTinDatVe.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <Skeleton variant="rect" width="100%" height="500px" />
      )}
    </>
  );
}

export default BookingHistory;
