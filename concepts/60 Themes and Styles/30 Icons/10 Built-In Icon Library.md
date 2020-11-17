<div id="cardHeader" class="content-block dx-card responsive-paddings">
    <h2>Files</h2>
    <dx-form id="filterForm" [(formData)]="filter" labelLocation="top" colCount="3" minColWidth="320"
        style="width: 100%;">
        <dxi-item dataField="BeginDate" class="form-item"></dxi-item>
        <dxi-item dataField="EndDate" class="form-item"></dxi-item>
    </dx-form>
    <dx-button icon="filter" text="Filter" type="default" (onClick)="onFilterClick($event)"></dx-button>
    <dx-button icon="exports" text="Export" type="default" (onClick)="onFilterClick($event)"></dx-button>
    <!-- <dx-button icon="excel" text="Export" type="default" (onClick)="onFilterExportClick($event)"></dx-button> -->
</div>

<div class="content-block">
    <dx-data-grid id="gridContainer" class="dx-card wide-card" [dataSource]="dataSource" [showBorders]="false"
        [focusedRowEnabled]="true" [columnAutoWidth]="true" [columnHidingEnabled]="true" (onExporting)="onExporting($event)">
        
        <!-- <dxo-export [enabled]="true" [allowExportSelectedData]="true"></dxo-export> -->

        <dxo-paging [pageSize]="10"></dxo-paging>
        <dxo-pager [showPageSizeSelector]="true" [showInfo]="true"></dxo-pager>
        <dxo-filter-row [visible]="true"></dxo-filter-row>
       
        <dxo-selection selectAllMode="allPages" showCheckBoxesMode="onClick" mode="multiple"></dxo-selection>
       
        <!-- columns -->
        <dxi-column dataField="id" [width]="70" [allowFiltering]="false" [allowSorting]="false" caption=""
            cellTemplate="idCellTemplate"></dxi-column>

        <dxo-selection id="chkItems" mode="multiple" [deferred]="true"></dxo-selection>   

        <dxi-column dataField="filename" width="30%" caption="Name" [hidingPriority]="8">
        </dxi-column>
        <dxi-column dataField="playerName" caption="Player" [hidingPriority]="8">
        </dxi-column>
        <dxi-column dataField="status" caption="Status" [hidingPriority]="7">
            <dxo-lookup [dataSource]="packStatus" valueExpr="value" displayExpr="text">
            </dxo-lookup>
        </dxi-column>
        <dxi-column dataField="createdAt" dataType="date" [hidingPriority]="5">
        </dxi-column>
        <dxi-column dataField="active" dataType="boolean" [hidingPriority]="6">
        </dxi-column>

        <div *dxTemplate="let data of 'idCellTemplate'">
            <dx-button icon="search" type="default" (onClick)="onViewClick(data.value)"></dx-button>
        </div>
    </dx-data-grid>

</div>
