<h2>Grid<span class="status complete">Complete</span></h2>

ShowCar UI includes the responsive Susy grid system. It is implemented with a 12 column layout. There are predefined classes for grid rows and grid columns.  
Every grid row should be placed within a `.sc-content-container`.  
Every grid row is represented as `.sc-grid-row`.  
Every grid cell is a `.sc-grid-col-*` container.  
<style>
#grid .sample .sc-grid-row > div{
    border: 1px solid #dcdcdc;
    background: #f4f4f4;
    margin-bottom: 5px;
    padding: 5px;
}
#grid .sample .sc-grid-row > div [class*='sc-grid-col-']{
    word-break: break-all;
}
</style>
