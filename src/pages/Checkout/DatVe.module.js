import { Table } from "antd";
import React from "react";
import "./DatVe.module";

const columns = [
  {
    title: "Số ghế",
    dataIndex: "soGhe",
  },

  {
    title: "Giá vé",
    dataIndex: "giaVe",
    align: "left",
  },
];

const showHeader = true;

class DatVe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bordered: false,
      loading: false,
      pagination: false,
      size: "default",
      expandable: false,
      title: undefined,
      showHeader,
      yScroll: true,
      hasData: true,
      tableLayout: undefined,
      top: "none",
      bottom: "none",
    };
  }

  render() {
    const { xScroll, yScroll, ...state } = this.state;

    const scroll = {};
    if (yScroll) {
      scroll.y = 350;
    }
    if (xScroll) {
      scroll.x = "100vw";
    }

    const tableColumns = columns.map((item) => ({
      ...item,
      ellipsis: state.ellipsis,
    }));
    if (xScroll === "fixed") {
      tableColumns[0].fixed = true;
      tableColumns[tableColumns.length - 1].fixed = "right";
    }

    const { danhSachDangDat } = this.props;
    console.log(danhSachDangDat);
    const data = [];
    if (danhSachDangDat.length > 0) {
      for (let i = 0; i < danhSachDangDat?.length; i++) {
        data.push({
          key: i,
          soGhe: `Ghế ${danhSachDangDat[i].tenGhe}`,

          giaVe: `${danhSachDangDat[i].giaVe.toLocaleString()} đ`,
        });
      }
    }

    return (
      <>
        <Table
          {...this.state}
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
          scroll={scroll}
        />
      </>
    );
  }
}

export default DatVe;
