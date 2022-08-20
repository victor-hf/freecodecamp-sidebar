const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    // if (sidebar.classList.contains('show-sidebar')) {
    //     console.log('hide');
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     console.log('show');
    //     sidebar.classList.add('show-sidebar');
    // }
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});
