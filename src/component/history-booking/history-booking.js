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
import { Skeleton } from "@material-ui/lab";
import useStyles from "./style";
import { connect } from "react-redux";
import shortid from "shortid";

function HistoryBooking(props) {
  const classes = useStyles();
  const { thongTinDatVe, isFetching } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
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
                {[...thongTinDatVe]
                  .reverse()
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={shortid.generate()}
                    >
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
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            labelRowsPerPage="số hàng"
            rowsPerPageOptions={[10, 25, { value: -1, label: "tất cả" }]}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            component="div"
            count={thongTinDatVe.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
          />
        </Paper>
      ) : (
        <Skeleton variant="rect" width="100%" height="500px" />
      )}
    </>
  );
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       getListCommentAPI: () => {
//         dispatch(actGetListCommentAPI());
//       },
//     };
//   };

const mapStateToProps = (state) => {
  return {
    thongTinDatVe: state.userReducer.thongTinDatVe,
    isFetching: state.userReducer.isFetching,
  };
};
export default connect(mapStateToProps, null)(HistoryBooking);
