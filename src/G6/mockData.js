/*
 * @Author: ZhaoYue
 * @Date: 2022-11-08 15:41:49
 * @Description: 文件内容描述
 * @LastEditTime: 2022-11-08 17:40:19
 * @LastEditors: ZhaoYue
 * @FilePath: /js-demo/src/G6/mockData.js
 */
const mockData = {
  id: "g1",
  name: "Name1",
  count: 123456,
  label: "538.90",
  currency: "Yuan",
  rate: 1.0,
  status: "B",
  variableName: "V1",
  variableValue: 0.341,
  variableUp: false,
  children: [
    // {
    //   id: "g12",
    //   name: "Deal with LONG label LONG label LONG label LONG label",
    //   count: 123456,
    //   label: "338.00",
    //   rate: 0.627,
    //   status: "R",
    //   currency: "Yuan",
    //   variableName: "V2",
    //   variableValue: 0.179,
    //   variableUp: true,
    //   children: [
    //     {
    //       id: "g121",
    //       name: "Name3",
    //       collapsed: true,
    //       count: 123456,
    //       label: "138.00",
    //       rate: 0.123,
    //       status: "B",
    //       currency: "Yuan",
    //       variableName: "V2",
    //       variableValue: 0.27,
    //       variableUp: true,
    //       children: [
    //         {
    //           id: "g1211",
    //           name: "Name4",
    //           count: 123456,
    //           label: "138.00",
    //           rate: 1.0,
    //           status: "B",
    //           currency: "Yuan",
    //           variableName: "V1",
    //           variableValue: 0.164,
    //           variableUp: false,
    //           children: [],
    //         },
    //       ],
    //     },
    //     {
    //       id: "g122",
    //       name: "Name5",
    //       collapsed: true,
    //       count: 123456,
    //       label: "100.00",
    //       rate: 0.296,
    //       status: "G",
    //       currency: "Yuan",
    //       variableName: "V1",
    //       variableValue: 0.259,
    //       variableUp: true,
    //       children: [
    //         {
    //           id: "g1221",
    //           name: "Name6",
    //           count: 123456,
    //           label: "40.00",
    //           rate: 0.4,
    //           status: "G",
    //           currency: "Yuan",
    //           variableName: "V1",
    //           variableValue: 0.135,
    //           variableUp: true,
    //           children: [
    //             {
    //               id: "g12211",
    //               name: "Name6-1",
    //               count: 123456,
    //               label: "40.00",
    //               rate: 1.0,
    //               status: "R",
    //               currency: "Yuan",
    //               variableName: "V1",
    //               variableValue: 0.181,
    //               variableUp: true,
    //               children: [],
    //             },
    //           ],
    //         },
    //         {
    //           id: "g1222",
    //           name: "Name7",
    //           count: 123456,
    //           label: "60.00",
    //           rate: 0.6,
    //           status: "G",
    //           currency: "Yuan",
    //           variableName: "V1",
    //           variableValue: 0.239,
    //           variableUp: false,
    //           children: [],
    //         },
    //       ],
    //     },
    //     {
    //       id: "g123",
    //       name: "Name8",
    //       collapsed: true,
    //       count: 123456,
    //       label: "100.00",
    //       rate: 0.296,
    //       status: "DI",
    //       currency: "Yuan",
    //       variableName: "V2",
    //       variableValue: 0.131,
    //       variableUp: false,
    //       children: [
    //         {
    //           id: "g1231",
    //           name: "Name8-1",
    //           count: 123456,
    //           label: "100.00",
    //           rate: 1.0,
    //           status: "DI",
    //           currency: "Yuan",
    //           variableName: "V2",
    //           variableValue: 0.131,
    //           variableUp: false,
    //           children: [],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   id: "g13",
    //   name: "Name9",
    //   count: 123456,
    //   label: "100.90",
    //   rate: 0.187,
    //   status: "B",
    //   currency: "Yuan",
    //   variableName: "V2",
    //   variableValue: 0.221,
    //   variableUp: true,
    //   children: [
    //     {
    //       id: "g131",
    //       name: "Name10",
    //       count: 123456,
    //       label: "33.90",
    //       rate: 0.336,
    //       status: "R",
    //       currency: "Yuan",
    //       variableName: "V1",
    //       variableValue: 0.12,
    //       variableUp: true,
    //       children: [],
    //     },
    //     {
    //       id: "g132",
    //       name: "Name11",
    //       count: 123456,
    //       label: "67.00",
    //       rate: 0.664,
    //       status: "G",
    //       currency: "Yuan",
    //       variableName: "V1",
    //       variableValue: 0.241,
    //       variableUp: false,
    //       children: [],
    //     },
    //   ],
    // },
    {
      id: "g14",
      name: "Name12",
      count: 123456,
      label: "100.00",
      rate: 0.186,
      status: "G",
      currency: "Yuan",
      variableName: "V2",
      variableValue: 0.531,
      variableUp: true,
      children: [],
    },
  ],
};

let l = 0;

const getItem = (index) => {
  return {
    id: `g12211-${index}`,
    name: `Name6-1-${index}`,
    count: 12345 + index,
    label: `${index}.00`,
    rate: 1.0,
    status: "R",
    currency: "Yuan",
    variableName: "V1",
    variableValue: 0.181,
    variableUp: true,
    children: [],
  };
};

const fnAddChildren = (children) => {
  if (l > 1000) {
    return;
  }
  l += 1;
  const nowItem = getItem(l);
  if (children && children.length < 10) {
    children.push(nowItem);
    fnAddChildren(children);
  } else {
    children.forEach((element) => {
      //   debugger;
      fnAddChildren(element.children);
    });
  }
};
fnAddChildren(mockData.children);

export default mockData;
