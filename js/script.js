$(document).ready(function() {

    function paginationGallery(){
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
    }
    
    function login(){
        // Function to enable or disable background scroll
        function toggleBackgroundScroll(enable) {
            $('body').css('overflow', enable ? 'auto' : 'hidden');
        }

        // Initially hide the popup content and success message
        $('#totc-loginpopup').hide();
        $('#register-successMessage').hide();
        $('#register-errorMessage').hide(); // Hide error message initially

        // Open popup
        $('#openLoginPopupBtn').click(function(event) {
            event.stopPropagation(); // Prevent triggering document click
            $('#totc-loginpopup').show();
            toggleBackgroundScroll(false); // Disable background scroll
        });

        // Close popup
        function closePopup() {
            $('#totc-loginpopup').hide();
            toggleBackgroundScroll(true); // Enable background scroll
        }

        // Close popup when clicking the close button
        $('.totc-close-btn').click(function(event) {
            event.stopPropagation(); // Prevent triggering document click
            closePopup();
        });

        // Close popup when clicking outside the popup content
        $(document).click(function(event) {
            if (!$(event.target).closest('#totc-loginpopup .totc-popup-content').length && $('#totc-loginpopup').is(':visible')) {
                closePopup();
            }
        });

        // Prevent popup close when clicking inside the popup content
        $('#totc-loginpopup .totc-popup-content').click(function(event) {
            event.stopPropagation();
        });

        // Toggle show/hide password
        $('#togglePassword').click(function() {
            const passwordField = $('#password');
            const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
            passwordField.attr('type', type);
            $(this).text(type === 'password' ? 'Show' : 'Hide');
        });

        // Show success or error message based on login credentials
        $('#loginBtn').click(function() {
            const username = $('#username').val();
            const password = $('#password').val();

            // Check if username and password match the required credentials
            if (username === 'totc-user' && password === 'totc-user') {
                // Hide the login form and show the success message
                $('#totc-loginform').hide();
                $('#successMessage').show();
                $('#errorMessage').hide(); // Hide error message if showing
            } else {
                // Show error message and do not submit form
                $('#errorMessage').show();
            }
        });
    }

    function signup(){
        // Function to enable or disable background scroll
        function toggleBackgroundScroll(enable) {
            $('body').css('overflow', enable ? 'auto' : 'hidden');
        }

        // Initially hide the popup content and success message
        $('#totc-registerpopup').hide();
        $('#successMessage').hide();
        $('#errorMessage').hide(); // Hide error message initially

        // Open popup
        $('#openRegisterPopupBtn').click(function(event) {
            event.stopPropagation(); // Prevent triggering document click
            $('#totc-registerpopup').show();
            toggleBackgroundScroll(false); // Disable background scroll
        });

        // Close popup
        function closePopup() {
            $('#totc-registerpopup').hide();
            toggleBackgroundScroll(true); // Enable background scroll
        }

        // Close popup when clicking the close button
        $('.totc-close-btn').click(function(event) {
            event.stopPropagation(); // Prevent triggering document click
            closePopup();
        });

        // Close popup when clicking outside the popup content
        $(document).click(function(event) {
            if (!$(event.target).closest('#totc-registerpopup .totc-popup-content').length && $('#totc-registerpopup').is(':visible')) {
                closePopup();
            }
        });

        // Prevent popup close when clicking inside the popup content
        $('#totc-registerpopup .totc-popup-content').click(function(event) {
            event.stopPropagation();
        });

        // Toggle show/hide password
        $('#register-togglePassword').click(function() {
            const passwordField = $('#toggle-password');
            const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
            passwordField.attr('type', type);
            $(this).text(type === 'password' ? 'Show' : 'Hide');
        });

        // Show success or error message based on login credentials
        $('#loginBtn').click(function() {
            const username = $('#username').val();
            const password = $('#password').val();

            // Check if username and password match the required credentials
            if (username === 'totc-user' && password === 'totc-user') {
                // Hide the login form and show the success message
                $('#totc-registerform').hide();
                $('#register-successMessage').show();
                $('#register-errorMessage').hide(); // Hide error message if showing
            } else {
                // Show error message and do not submit form
                $('register-#errorMessage').show();
            }
        });
    }

    // Calling functions
    paginationGallery();
    login();  
    signup();
});