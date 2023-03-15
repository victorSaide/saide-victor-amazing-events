const container = document.getElementById('stats');
const fragment = document.createDocumentFragment();

function showTable() {
    let table = document.createElement('div');
    table.className = "table";
    table.innerHTML = `
            <!-- ----------------------- Table 1 ----------------------->
        <table class="table table-bordered border border-secondary bg-white">
            <h4>Events Statistics</h4>
            <thead class="bg-secondary text-white">
                <tr>
                    <th>Events with the highest percentage of attendance</th>
                    <th>Events with the lowest percentage of attendance</th>
                    <th>Events with larger capacity</th>
                </tr>
            </thead>
            <tbody>      <!-- +id for -- c/tr array tr -->
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <!-- ----------------------- Table 2 ----------------------- -->
        <table class="table table-bordered border border-secondary bg-white">
            <h4>Upcoming Events Statistics By Category</h4>
            <thead class="bg-secondary text-white">
                <tr>
                    <th>Events with the highest percentage of attendance</th>
                    <th>Events with the lowest percentage of attendance</th>
                    <th>Events with larger capacity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

        <!-- ----------------------- Table 3 ----------------------- -->
        <table class="table table-bordered border border-secondary bg-white">
            <h4>Past Events Statistics By Category</h4>
            <thead class="bg-secondary text-white">
                <tr>
                    <th>Events with the highest percentage of attendance</th>
                    <th>Events with the lowest percentage of attendance</th>
                    <th>Events with larger capacity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

    `
    container.appendChild(fragment);
    container.appendChild(table);
    console.log("linkeado");
}
showTable()

