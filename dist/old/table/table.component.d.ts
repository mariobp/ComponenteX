import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import { CallService } from '../services';
export declare class TableComponent implements OnInit {
    _cs: CallService;
    table: ElementRef;
    icon: string;
    title: string;
    service: any;
    columns: any[];
    multiselect: boolean;
    deleteable: boolean;
    aggregable: boolean;
    editable: boolean;
    order: any[];
    addlink: (string | number)[];
    enable: boolean;
    dataTable: any;
    selectedItems: any[];
    selectedItemsChange: EventEmitter<{}>;
    static renderCheckRow(data: any): string;
    static renderDecimal(data: any): string;
    static renderAvatar(data: any): string;
    constructor(_cs: CallService);
    readonly itemSelected: any;
    ngOnInit(): void;
    drawCallback(): void;
    _selectionInit(table: any): void;
    _onSelectedRow(tr: any): void;
    preAjax(data: any): any;
    ajax(draw: number, dataSource: any, cb: any): void;
    success(data: any): void;
    onDelete(): void;
    editlink: any;
    _editlink: any;
}