import { useEffect, useState } from "react";
import * as Styled from "./Table.styled";
import {ImportExport} from '@mui/icons-material';

export interface TableItem {
    head: string;
    body: string;
    manageItems?: Function;
    order?: string;
    formatter?: Function;
}

interface TableProps {
    tableItems: TableItem[];
    list: any[];
    relation: string; 
}

export function Table({ tableItems, list, relation }: TableProps) {
    const [items, setItems] = useState(list);

    useEffect(() => {
        const itemsSorted : any[] = [];

        items.forEach((item) => {
            const element = list.find(element => element[relation] === item[relation])
            if(element)
                itemsSorted.push(element);
        })
        setItems(itemsSorted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[list])

    function orderBy(field: string) {
        const itemsSorted = items;
        const column = document.querySelector(`th#${field}`);

        if (column?.classList.contains("asc")) {
            itemsSorted.sort((prev, next) => prev[field] < next[field] ? -1 : 1);
            column?.classList.remove("asc");
            column?.classList.add("desc");
        } else if (column?.classList.contains("desc")) {
            itemsSorted.sort((prev, next) => prev[field] > next[field] ? -1 : 1);
            column?.classList.remove("desc");
            column?.classList.add("asc");
        }
        setItems([...itemsSorted]);
    }

    return (
        <Styled.Table className="w-100 mb-4">
            <thead>
                <tr>
                    {tableItems.map(({ head, body, order }, index) => <th role={order && "button"} onClick={() => orderBy(body)} key={index} id={body} className={order}><div className="px-3">{head}{order && <ImportExport className="ms-2"/>}</div></th>)}
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => <tr key={index}>
                    {tableItems.map(({ body, manageItems, formatter }, index) => <td key={index}>
                        <div className="px-3">
                            {manageItems ? <div className="row">
                                <div className="col-auto">{formatter ? formatter(item[body]) : item[body]}</div>
                                <div className="col-auto ms-auto">{manageItems(item)}</div>
                            </div> : formatter ? formatter(item[body]) : item[body]}
                        </div>
                    </td>)}
                </tr>)}
            </tbody>
        </Styled.Table>
    )
}