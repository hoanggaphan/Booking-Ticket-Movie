import React from "react";
import {
  Box,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableRow,
  TableBody,
  TablePagination,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { connect } from "react-redux";
import shortid from "shortid";

import useStyles from "./style";

function HistoryBooking(props) {
  const classes = useStyles();
  const { thongTinDatVe, isFetching } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, thongTinDatVe.length - page * rowsPerPage);

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
                ).map((item) => (
                  <TableRow hover key={shortid.generate()}>
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
                ))}

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

const mapStateToProps = (state) => {
  return {
    thongTinDatVe: state.userReducer.thongTinDatVe,
    isFetching: state.userReducer.isFetching,
  };
};
export default connect(mapStateToProps, null)(HistoryBooking);
