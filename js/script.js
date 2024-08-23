$(document).ready(function() {
    let currentPage = 1;
    const cardsPerPage = 6;
    const totalCards = 30;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    function showPage(page) {
        // Hide all cards
        $('#page-cards-container .page-cards').hide();

        // Calculate start and end index for the current page
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        // Show cards for the current page
        $('#page-cards-container .page-cards').slice(startIndex, endIndex).show();

        // Update the active page number
        $('#pagination .page-number').removeClass('active');
        $(`#pagination .page-number[data-page=${page}]`).addClass('active');
    }

    // Handle click on page numbers
    $('#pagination .page-number').click(function() {
        currentPage = $(this).data('page');
        showPage(currentPage);
    });

    // Handle Prev button click
    $('#pagination #prev').click(function() {
        currentPage = (currentPage === 1) ? totalPages : currentPage - 1;
        showPage(currentPage);
    });

    // Handle Next button click
    $('#pagination #next').click(function() {
        currentPage = (currentPage === totalPages) ? 1 : currentPage + 1;
        showPage(currentPage);
    });

    // Initialize the first page
    showPage(currentPage);
});
