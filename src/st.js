import data from './dividends_all_pages_transposed.json';
const table = document.createElement('table');
table.className = 'min-w-full divide-y divide-gray-200';

// Assuming the data is an array of objects and using the keys of the first object as table headers
const headers = Object.keys(data[0]);
const thead = document.createElement('thead');
thead.id = 'stocks-table-header';
thead.className = 'bg-gray-50';
const headerRow = document.createElement('tr');

headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    th.className = 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer';
    th.addEventListener('click', () => sortTableByColumn(header));
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

// Populate the table with data
const tbody = document.createElement('tbody');
tbody.id = 'stocks-table-body';
tbody.className = 'bg-white divide-y divide-gray-200';

function populateTableBody(data) {
    tbody.innerHTML = ''; // Clear existing rows
    data.forEach(item => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = item[header];
            td.className = 'px-6 py-4 whitespace-nowrap text-sm text-gray-500';
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
}

populateTableBody(data);
table.appendChild(tbody);

// Append the table to the body or a specific element
document.body.appendChild(table);

let sortDirection = true;

function sortTableByColumn(column) {
    const sortedData = [...data].sort((a, b) => {
        if (a[column] < b[column]) return sortDirection ? -1 : 1;
        if (a[column] > b[column]) return sortDirection ? 1 : -1;
        return 0;
    });
    sortDirection = !sortDirection;
    populateTableBody(sortedData);
}